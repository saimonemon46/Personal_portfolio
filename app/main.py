from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import json

app = FastAPI()

app.mount("/static", StaticFiles(directory="app/static"), name="static")
templates = Jinja2Templates(directory="app/templates")

def load_json(path):
    with open(path, "r") as f:
        return json.load(f)

@app.get("/")
def home(request: Request):
    skills = load_json("data/skills.json")
    projects = load_json("data/projects.json")

    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "skills": skills,
            "projects": projects
        }
    )
