# Introduction
Akeneo's Secret Santa app is a gift exchange pairing tool. It allows you to match participants and use a blacklist to prevent certain pairings.

- [Installation](#installation)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [How to improve the app](#how-to-improve-the-app)


##  Installation
- Clone the repository locally
  ```bash
  git clone https://github.com/akalamoyo/akeneo.git
- Install backend requirements
  ```bash
  pip install -r requirements.txt
- Start the backend server
  ```bash
  python manage.py runserver
- Install frontend packages and run app
  ```bash
  cd frontend
  npm install
  npm run dev

## Deployment
For a lightweight app like this, I would deploy the backend on heroku and the frontend on vercel
- Once backend is deployed, get the url and update `VITE_API_BASE_URL` in `frontend/.env`.
- In `secret_santa/settings.py`, add the domain url of the backend to `ALLOWED_HOSTS`. Also add the domain url of the frontend to `CORS_ALLOWED_ORIGINS`. 

## API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/participant | To get all participants |
| POST | /api/participant | To add a new participant |
| PATCH | /api/participant | To update a participant (specifically, the blacklist info) |
| GET | /api/draw | To start a new draw
| POST | /api/history | To create a new cause |

## Technologies Used
* [VueJS](https://vuejs.org/) This is a free web application framework.
* [Typescript](https://www.typescriptlang.org/) TypeScript is a strongly typed programming language that builds on JavaScript.
* [PrimeVue](https://tailwind.primevue.org/) This is a Vue component library.
* [SQLite](https://www.sqlite.org/) A lightweight SQL database engine.

## How to improve the app
- Use react-query for better api management in frontend. Useful for invalidating queries so updates reflect in table immediately.
- Would be nice to have authentication included but decided not to stress on that.
- Configure emails notifications so users are notified once they are matched
- Make UI responsive to different screens.

