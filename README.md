# 🚀 Yokai Encryptor

A futuristic web-based text & file encryption tool built with TypeScript, Anime.js, and Python (FastAPI) — styled in an outer space dark theme with stellar animation.

## 📁 File Structure

Yokai-Encryptor/
├── App.ts
├── EncryptForm.ts
├── FileDrop.ts
├── index.html
├── main.ts
├── styles.css
├── main.py
├── vercel.json
├── package.json
└── README.md

## 🛠 Local Dev

npm install
npx vite

# Run backend
pip install fastapi uvicorn pycryptodome
uvicorn main:app --reload

## 🚀 Deploy to Vercel

Push to GitHub → Import to Vercel → Set build: vite build, output: dist