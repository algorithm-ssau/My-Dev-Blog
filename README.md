# My-Dev-Blog 💻
## О проекте 📖
Это новый сайт-болг о программировании под названием My-Dev-Blog.\
Над проектом работали 🧑‍🎓 :

 🖥️ [Артур Фаттахов](https://github.com/rtSblnkv)

 🖥️ [Артём Сабельников](https://github.com/mix4il)

 🖥️ [Михаил Баскаков](https://github.com/thundernorain)

***
### Для запуска сайта вам нужно установить [Node.js](https://nodejs.org/en/download/). 🛣️

## Установка 💿
### 1.Клонируйте репозиторий 📂
 ```bash
   git clone https://github.com/algorithm-ssau/My-Dev-Blog.git
 ```
### 2.Клиентская часть 📤
 ```bash
  cd ..\client 
  npm install
 ```
#### Запуск клиентской части: 
 ```bash
  npm run start
 ```
### 3.Серверная часть 🗳️
 ```bash
  cd ..\Server 
  npm install
  npm install nodemon -D
 ```
#### Запуск сервера:
```bash
 npm run dev
```

### 4. Python API 🐍
API, созданное с помощью Python,Fastapi используется для наполнения базы данных сайта посредством POST-запросов.\

Для работы с API вам нужно установить [Python](https://www.python.org/downloads/).\

Затем
```bash
 cd ...\python_api
```
#### Настройка виртуального окружения:
 ```bash
  py -3 -m venv .venv
  .venv\scripts\activate
 ```
#### Установите fastapi,uvicorn,pydantic,bson,motor
 ```bash
  pip install uvicorn fastapi motor pydantic bson
 ```
#### Запустите API:
 ```bash
  uvicorn main:app
 ```
 Измените URL на  
 ```
 http://127.0.0.1:8000/docs
 ```
 Откройте интерфейс OpenAPI.\
 Выберите необходимый запрос,введите данные и нажмите кнопку "EXECUTE".


