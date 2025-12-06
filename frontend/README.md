📊 AI-Enhanced Sales Analytics Dashboard (MERN + JWT Auth + Charts + Gemini AI)

A modern full-stack Sales Insights Dashboard built using MERN stack, featuring user auth, product/sales tracking, analytics visualization, and AI-based business insight generation.
Designed for enterprise-style sales monitoring with clean UI and automated reporting.

🚀 Features


🔐 Auth & Security

JWT-based authentication

Secure Register & Login system

Encrypted passwords using bcrypt

📈 Sales Dashboard

Add / View / Filter Sales Records

Track revenue, quantity, growth trends

Visual Analytics with charts (ECharts / Recharts)

Monthly & Category-wise business breakdown


🤖 AI Business Insights

Summary Generation using Gemini API

Automated performance overview (profit, fast-selling products)

Recommendation suggestions for sales growth


🧩 Tech Stack
Area	              Technology
Frontend	          React + Vite + Axios + Context API
Backend            	Node.js + Express.js
Database          	MongoDB + Mongoose
Auth	              JWT + bcrypt
AI	                Gemini API
Charts              Recharts / ECharts


sales-dashboard/
│── backend/
│   ├── config/db.js              # Mongo connection
│   ├── models/User.js            # User Schema
│   ├── models/SalesRecord.js     # Sales Schema
│   ├── routes/authRoutes.js       # Register/Login
│   ├── routes/salesRoutes.js      # CRUD Sales APIs
│   ├── routes/aiRoutes.js         # AI insights API
│   └── server.js                  # App entry point

│── frontend/
│   ├── src/
│   │   ├── context/AuthContext.jsx
│   │   ├── pages/Login.jsx
│   │   ├── pages/Register.jsx
│   │   ├── pages/Dashboard.jsx
│   │   └── App.jsx
│   └── vite config files
│── README.md
│── .gitignore
│── package.json


⚙️ Installation & Setup
1️⃣ Clone Repository

git clone <repo-url>
cd sales-dashboard


2️⃣ Backend Setup

cd backend
npm install


Create .env inside backend/:

MONGO_URI=mongodb://localhost:27017/sales_dashboard
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_api_key

Run server:

npm run dev

3️⃣ Frontend Setup

cd ../frontend
npm install
npm run dev

Open in browser:

http://localhost:5173/

🛠 Available API Endpoints

| Method   | Route                | Description                |
| -------- | -------------------- | -------------------------- |
| POST     | `/api/auth/register` | Create new user            |
| POST     | `/api/auth/login`    | User login & token         |
| GET/POST | `/api/sales`         | Sales CRUD                 |
| POST     | `/api/ai/analyze`    | Generate business insights |


📌 Future Improvements

🔥 Role-based Admin Dashboard

📦 Inventory Forecasting Model

📍 Geo-based Sales Heatmap

📧 Automated Monthly Email Reports

📊 Predictive Analytics with AI

🤝 Contributing

Pull requests are welcome!
Fork → Modify → Submit PR 🚀
