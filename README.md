"# Student_CURD_Use_ExpresJS_API" 
student-api/
│
├── controllers/
│   └── studentController.js
│
├── routes/
│   └── studentRouter.js
│
├── config/
│   └── db.js
│
├── middleware/
│   └── authMiddleware.js
│
├── .env
├── app.js
├── server.js
├── package.json
└── node_modules/

npm init -y
npm install express mysql2 dotenv cors
npm install -D nodemon

.env file data

PORT=4000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=student_db


