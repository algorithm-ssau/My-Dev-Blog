from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def start():
    return {"api":"Start"}

