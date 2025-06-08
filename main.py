from fastapi import FastAPI, File, UploadFile, Form
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import base64
import hashlib
from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

KEY = hashlib.sha256(b"secret-key").digest()

def pad(data):
    return data + b" " * (AES.block_size - len(data) % AES.block_size)

def encrypt_aes(data: bytes):
    iv = get_random_bytes(AES.block_size)
    cipher = AES.new(KEY, AES.MODE_CBC, iv)
    ciphertext = cipher.encrypt(pad(data))
    return base64.b64encode(iv + ciphertext).decode()

@app.post("/api/encrypt-text")
async def encrypt_text(data: str = Form(...)):
    encrypted = encrypt_aes(data.encode())
    return {"encrypted": encrypted}

@app.post("/api/encrypt-file")
async def encrypt_file(file: UploadFile = File(...)):
    contents = await file.read()
    encrypted = encrypt_aes(contents)
    return {"filename": file.filename, "encrypted": encrypted}

@app.get("/")
async def root():
    return {"message": "Yokai Encryptor API ready 🚀"}