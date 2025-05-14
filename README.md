 Personal Productivity Tracker

Një aplikacion modern për menaxhimin e produktivitetit personal, ndërtuar me React, Node.js, Express, MongoDB dhe Docker, duke përdorur arkitekturë të bazuar në mikroshërbime.

---
 Karakteristikat Kryesore

- Autentifikim i sigurt (Regjistrim / Login / Logout)
- Kanban Board (To Do, In Progress, Done) për menaxhimin vizual të detyrave
- Time Tracker për ndjekjen e kohës për çdo detyrë
- Njoftime në kohë reale për përditësime në projekte dhe detyra
- Statistika mujore me grafikë për analizë të produktivitetit

---

 Teknologjitë

- Frontend:React.js
- Backend: Node.js + Express
- Database:MongoDB
- Containerization & Orchestration: Docker + Docker Compose
- Arkitektura: Mikroshërbime

---

 Mikroshërbimet dhe Endpoint-et

 1. Auth Service - Autentifikimi i përdoruesve  
Endpoints:
- `POST /auth/signup` – Regjistrim
- `POST /auth/login` – Kyçje
- `POST /auth/logout` – Çkyçje

 2. Task Service - Menaxhimi i detyrave  
Endpoints:
- `POST /tasks` – Krijim detyre
- `GET /tasks` – Marrje detyrash
- `PUT /tasks/:id` – Përditësim statusi
- `DELETE /tasks/:id` – Fshirje detyre

 3. Project Service - Menaxhimi i projekteve  
Endpoints:
- `POST /projects` – Krijim projekti
- `GET /projects` – Listim projektesh
- `GET /projects/:id/tasks` – Detyrat e një projekti

 4. Comment Service - Komentet për detyra  
Endpoints:
- `POST /tasks/:taskId/comments` – Shto koment
- `GET /tasks/:taskId/comments` – Merr komentet
 5. Notification Service  - Njoftime të automatizuara  
Endpoints:
- `POST /notifications` – Dërgo njoftim
- `GET /notifications` – Merr njoftimet

---

  Struktura e Frontend-it (React.js)

- Login/Register Page – Për autentifikim të sigurt
- Dashboard (Kanban) – Menaxhim vizual i detyrave
- Timer Component – Ndjekja e kohës për detyra
- Notifications – Pamje e njoftimeve të fundit
- Stats Page – Grafikë dhe analiza për produktivitetin personal

---

 Qëllimi i Projektit

Ky projekt është pjesë e detyrës finale për lëndën *Advanced Programming*, dhe synon të ndërtojë një platformë të shkallëzueshme dhe funksionale për organizimin dhe matjen e produktivitetit ditor të përdoruesve përmes teknologjive moderne.
