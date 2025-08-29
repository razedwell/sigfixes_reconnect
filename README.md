# Reconnect for Sigfixes

This is a small userscript that extends **[Sigfixes](https://github.com/)** for [Sigmally](https://one.sigmally.com/).  
It allows you to **reconnect individual tabs** while multiboxing, which is useful if one of your tabs has higher ping than the others.  
By reconnecting only the affected tab, you can reduce latency differences and keep your gameplay smoother.

---

## ✨ Features
- **Reconnect active tab** → Press **R** to reconnect the tab you are currently controlling.  
- **Reconnect spectating tab** → Press **G** to toggle spectating mode (if enabled in Sigfixes settings).  
- **Smart key handling** → Hotkeys won’t trigger while typing in chat or input fields.  
- **Safe and lightweight** → Runs only on `https://one.sigmally.com/`.

---

## 🎮 Usage
1. Install [Tampermonkey](https://www.tampermonkey.net/) or another userscript manager.  
2. Install **Sigfixes** first (this script depends on its functions like `net` and `world`).  
3. Install this script from [GreasyFork](#) or manually from this repository.  
4. Open multiple tabs of [Sigmally](https://one.sigmally.com/).  
5. If one tab gets higher ping:
   - Press **R** → Reconnect that active tab.  
   - Press **G** → Reconnect your spectating tab.  

---

## 📌 Notes
- This script does **not** auto-reconnect; you stay in full control.  
- Designed for multibox players who need consistent latency across multiple tabs.  
- Depends on **Sigfixes** being installed.  

---

## 🔑 Hotkeys
- **R** → Reconnect active tab  
- **G** → Toggle/reconnect spectating tab  

---

## 📝 License
[MIT](LICENSE) – free to use and modify.  
