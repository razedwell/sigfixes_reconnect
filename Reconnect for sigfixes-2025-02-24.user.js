// ==UserScript==
// @name         Reconnect for sigfixes
// @namespace    http://tampermonkey.net/
// @version      2025-02-24
// @description  try to take over the world!
// @author       You
// @match        https://one.sigmally.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sigmally.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
  "use strict";
  const RECONNECT_KEY = "R"; // Key to reconnect active tab
  const SPECTATE_KEY = "G"; // Key to toggle spectating tab

  let isTyping = false;

  // Check if an input field, textarea, or any element with contenteditable is focused
  function isUserTyping() {
    const activeElement = document.activeElement;
    return (
      activeElement &&
      (activeElement.tagName === "INPUT" ||
        activeElement.tagName === "TEXTAREA" ||
        activeElement.isContentEditable) // Support for custom chat fields
    );
  }

  document.addEventListener("keydown", (event) => {
    if (isUserTyping()) return; // Prevent script from running while typing

    if (event.key.toUpperCase() === RECONNECT_KEY) {
      reconnectActiveTab();
    } else if (event.key.toUpperCase() === SPECTATE_KEY) {
      toggleSpectatingTab();
    }
  });

  function reconnectActiveTab() {
    const activeConnection = net.connections.get(world.selected);
    if (!activeConnection || !activeConnection.ws) {
      console.warn("No active connection found");
      return;
    }

    console.log(`Reconnecting tab with ping: ${activeConnection.latency}ms`);

    // Close the current WebSocket connection
    activeConnection.ws.onclose = null; // Prevent triggering auto-reconnect logic
    activeConnection.ws.close();

    // Reinitialize connection
    setTimeout(() => {
      net.reconnect(world.selected);
      console.log("Reconnected active tab");
    }, 500); // Short delay before reconnecting
  }

  function toggleSpectatingTab() {
    const spectateConnection = net.connections.get(world.viewId.spectate);
    if (spectateConnection) {
      console.log("Disconnecting spectate mode...");
      spectateConnection.ws.close();
    } else {
      console.log("Connecting to spectate mode...");
      net.connectSpectator();
    }
  }

  // Your code here...
})();
