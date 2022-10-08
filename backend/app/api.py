from fastapi import FastAPI, File, UploadFile
# from pydantic import BaseModel
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from model.model import *

app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

x:str=""

@app.post("/upload")
async def create_upload_file(file: UploadFile = File(...)):
    
    image = read_imagefile(await file.read())
    global x
    x = predict(image)
    print(x)

@app.get("/upload")
async def g():
    global x
    return x