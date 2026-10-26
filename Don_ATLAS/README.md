# YourSurname_ATLAS — DCIT 26 Laboratory Exercise 7

A student/faculty portal built with React + Vite, Express, Mongoose, and MongoDB Atlas.

## Requirements
- Node.js LTS and Git
- MongoDB Atlas account and database user

## Setup

### 1. Backend
Open a terminal in `backend` and run:
```bash
npm install
```
Create `backend/.env` from `.env.example`, then replace the placeholder URI with your MongoDB Atlas connection string.
```bash
npm run dev
```
The API runs at http://localhost:5000.

### 2. Frontend
Open a second terminal in `frontend` and run:
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (normally http://localhost:5173).

### 3. Sample records
After the backend connects to Atlas, open:
http://localhost:5000/api/seed
This inserts five sample students and five sample faculty records only if the collections are empty. It is intended for this lab/demo; remove or protect this route before deploying publicly.

## GitHub
From the project root:
```bash
git init
git add .
git commit -m "Complete DCIT 26 Lab 7 MERN student portal"
```
Create an empty repository on GitHub, then follow the instructions GitHub shows for adding a remote and pushing. Do not upload `.env` or any database credentials.
