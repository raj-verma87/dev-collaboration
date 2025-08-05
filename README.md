# DeV Collaboration

A mini developer collaboration platform inspired by **GitHub Discussions**, **Trello**, and **Feedback boards** — built to help teams organize tasks, give feedback, and track progress in one place.

## 🔧 Features

- User authentication (Sign up / Login)
- Create workspaces and boards
- Add team members to workspaces
- Post issues, feature requests, or tasks
- Comment, upvote, assign tasks
- Task status tracking (To Do, In Progress, Done)
- Real-time updates (Socket.io – optional)

## 🛠 Tech Stack

**Frontend:**  
- React + React Router  
- Context API
- CSS Modules  

**Backend:**  
- Node.js + Express  
- MongoDB + Mongoose  
- JWT + bcrypt (auth)

## ⚙️ Backend Structure

- Modular folders: `controllers`, `routes`, `models`, `services`
- Middleware for auth, error handling, logging
- Utils: JWT handling, pagination, hashing
- Scalable design for future modules (workspace, task, comment, etc.)

## 💻 Frontend Structure

- `components/`: common, auth, workspace-specific
- `context/`: global state (Redux optional)
- `hooks/`: reusable logic
- `services/`: API integrations
- `pages/`: mapped to routes like `/login`, `/dashboard`, `/workspace/:id`

## 📦 Setup

```bash
# Clone repo
git clone https://github.com/your-username/dev-collaboration.git
cd dev-collaboration

# Install backend
cd backend
npm install

# Install frontend
cd ../frontend
npm install

## Run the App
# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend
npm start
