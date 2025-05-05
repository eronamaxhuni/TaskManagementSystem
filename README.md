# Task Management System

**Projekti Final për lëndën "Advanced Programming" me Prof. Agon Bajgora**

Një sistem për menaxhimin e projekteve dhe detyrave me arkitekturë mikroservisesh. Përdoruesit mund të krijojnë projekte, t'i ndajnë në detyra, të caktojnë anëtarë të ekipit dhe të ndjekin progresin përmes një paneli vizual (Kanban Board).

---

## Përmbajtja

- [Përshkrimi i Projektit](#përshkrimi-i-projektit)
- [Arkitektura Mikroservise](#arkitektura-mikroservise)
- [Frontend - Aplikacioni Web](#frontend---aplikacioni-web)
- [Baza e të Dhënave](#baza-e-të-dhënave)
- [Infrastrukturë & Deploy](#infrastrukturë--deploy)
- [Siguri](#siguri)
- [Teknologjitë Kryesore](#teknologjitë-kryesore)

---

## Përshkrimi i Projektit

Task Management System është një platformë bashkëpunimi për menaxhimin e projekteve dhe detyrave në grup me:

- Krijim dhe menaxhim projektesh
- Caktim detyrash për anëtarët
- Panel Kanban për vizualizim progresi
- Komente, njoftime dhe bashkëngjitje dokumentesh

---

## Arkitektura Mikroservise

Projekti është ndarë në 8 mikroservise të pavarura, secila me funksionalitet specifik:

### 1. Auth Service

- Regjistrimi dhe kyçja e përdoruesve
- Menaxhimi i roleve (admin, anëtar)
- Autentikimi me JWT

### 2. User Service

- Profili i përdoruesit
- Menaxhimi i ekipeve (teams)
- Kërkesat për bashkëngjitje në projekt

### 3. Project Service

- Krijimi dhe menaxhimi i projekteve
- Caktimi i skuadrave
- Strukturë e "workspace"

### 4. Task Service

- CRUD për detyra
- Caktimi i përdoruesve në detyra
- Statuset: To Do, In Progress, Done

### 5. Comment Service

- Komente për detyra
- Përmendje me @username
- Diskutime të ruajtura për çdo detyrë

### 6. Notification Service

- Njoftime për veprime të rëndësishme
- Push ose email (testim)
- Integrim me Event Bus ose WebSocket

### 7. Time Tracking Service

- Matja e kohës së shpenzuar për detyra
- Start/Stop timer
- Raporte mujore ose sipas projekti

### 8. File Service

- Ngarkimi i dokumenteve
- Ruajtje lokale ose cloud (p.sh. S3, Firebase)
- Shfaqje dhe shkarkim

---

## Frontend - Aplikacioni Web

- React.js me TailwindCSS
- Kanban Board për projektet
- Modal për detaje të detyrave
- Regjistrim, login, dashboard, profil përdoruesi

---

## Baza e të Dhënave

Përdoren PostgreSQL ose MongoDB, të ndara sipas shërbimeve:

| Mikroservisi       | Tabela / Koleksione                     |
|--------------------|------------------------------------------|
| Auth               | users, credentials                       |
| User               | profiles, teams                          |
| Project            | projects, workspaces                     |
| Task               | tasks, labels, assignments               |
| Comment            | comments                                 |
| Notification       | notifications                            |
| Time Tracking      | task_timers                              |
| File               | files (metadata), uploads                |

---

## Infrastrukturë & Deploy

- Çdo mikroservis ka `Dockerfile` të vetin
- Përdorimi i `docker-compose.yml` për përbërjen
- `.env` për konfigurimet e mjediseve
- Ndarje mes development dhe production

---

## Siguri

- JWT për autentikim
- Role-Based Access Control (RBAC)
- Validimi i inputeve në çdo shërbim
- Pa kredenciale të ngulitura në kod

---

## Teknologjitë Kryesore

- **Backend:** FastAPI / Node.js
- **Frontend:** React.js, TailwindCSS
- **Databaza:** PostgreSQL, MongoDB
- **Containerization:** Docker, Docker Compose
- **Security:** JWT, RBAC
- **Realtime:** WebSocket, Event Bus
