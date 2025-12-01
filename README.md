# VidSrc-Embeds-NoAds

**VidSrc-Embeds-NoAds** is a minimalist, serverless proxy built with **Node.js**, leveraging **Axios** and **Cheerio** to fetch and sanitize video embed content from **VidSrc**. Its goal is simple yet powerful: strip all ads from embedded players, returning a clean and safe iframe for use on any website or application.

> 🚀 **This repository serves for promotion only. For full access to the source code, documentation, and updates, please visit the official website: [scriptsrc.com](https://scriptsrc.com/scripts/vidsrc-embeds-noads/)**

---

## 🚀 How It Works

1. Send a request to the endpoint:  
   ```
   /embed?url=https://vidsrc.in/embed/ID
   ```
2. The proxy fetches and processes the embed content.
3. It returns a clean, ad-free iframe ready for direct use.

---

## ✅ Key Features

- 🎯 **Ad-Free Playback** – removes all third-party ads automatically
- 🔒 **Secure** – uses `sandbox="allow-scripts allow-same-origin"` for safe embedding
- ⚡ **Serverless Ready** – instantly deployable to Vercel, Railway, or Render
- 🧩 **No Auth or Database** – works with public embed URLs only
- 🧱 **Open-Source and Customizable** – simple source code, easy to adapt

---

## 🧪 Example Usage

```
https://vid-src-embeds-no-ads-demo.vercel.app/embed?url=https://vidsrc.in/embed/tt0944947/2-3/
```

> ✅ Output: Clean HTML with only the video iframe

---

## 🛠️ Tech Stack

- **Language:** JavaScript (Node.js)
- **Runtime:** Serverless or traditional Node.js environment
- **Dependencies:** [axios](https://www.npmjs.com/package/axios), [cheerio](https://www.npmjs.com/package/cheerio)

---

## 📥 Download & Documentation

📌 **The full source code, installation guide, and updates are available exclusively at:**

👉 [https://scriptsrc.com](https://scriptsrc.com/scripts/vidsrc-embeds-noads/)

---

## ⚠️ Disclaimer

This tool is intended strictly for educational and development use. It does not bypass paywalls or DRM systems. Always use responsibly and comply with third-party terms of service and copyright laws.

---

## 📣 Support & Contact

For support, suggestions, or inquiries, please use the contact section on the official website or open a ticket there.

---

**🔗 Official Website:** [https://scriptsrc.com](https://scriptsrc.com)
