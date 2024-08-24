MelodyVerse - Full Stack Web Application
Welcome to MelodyVerse! This is a full-stack web application designed as a gateway to a world of music, allowing users to sign up, log in, and manage their account, including a password reset functionality.

Table of Contents
Project Overview
Features
Tech Stack
Setup Instructions
Running the Application
API Endpoints
Testing
License
Project Overview
MelodyVerse is built to offer users a seamless and interactive experience, with features that include user authentication, JWT token handling, password reset, and more. The application is built using the MERN (MongoDB, Express, React, Node.js) stack, making it a powerful and scalable solution.

Features
User registration with email and password.
Secure login using JWT tokens.
Password reset functionality with email verification.
Visually appealing frontend with micro-interactions.
Protected routes that require authentication.
Tech Stack
Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
Others: Bcrypt.js (for password hashing), Nodemailer (for sending emails)
Setup Instructions
Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js: Download Node.js
MongoDB: Download MongoDB
Git: (optional) for cloning the repository
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
cd <repository-folder>
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add the following:

env
Copy code
MONGO_URI=mongodb://localhost:27017/melodyverse_db  # Replace with your MongoDB URI
JWT_SECRET=your_jwt_secret_key                      # Replace with your JWT secret key
Start MongoDB: Ensure your MongoDB server is running. You can start it using the following command if you installed MongoDB locally:


Running the Application
Start the backend server:

bash

npm start
The backend server will start at http://localhost:5000.

Start the frontend server (if applicable): Navigate to the frontend directory and run:

bash

npm start
The frontend server will start at http://localhost:3000.

API Endpoints
Auth Routes
Signup

URL: POST /api/auth/signup
Description: Registers a new user.
Request Body:
json

{
  "username": "testuser",
  "email": "testuser@example.com",
  "password": "password123"
}
Login

URL: POST /api/auth/login
Description: Authenticates a user and returns a JWT token.
Request Body:
json

{
  "email": "testuser@example.com",
  "password": "password123"
}
Forgot Password

URL: POST /api/auth/forgot-password
Description: Sends a password reset email to the user.
Request Body:
json

{
  "email": "testuser@example.com"
}
Reset Password

URL: POST /api/auth/reset-password/:token
Description: Resets the user's password.
Request Body:
json

{
  "newPassword": "newpassword123"
}
Testing
Frontend
Ensure the UI/UX is functioning as expected by interacting with the application through the browser.
Backend
Use Postman or cURL to test the various API endpoints listed above.
Ensure that user registration, login, and password reset workflows are functioning correctly.

Instructions to install and use:

o run and test the API, follow these steps:
1. Install Required Software
• Node.js: Ensure you have Node.js installed. You can download it from here.
• MongoDB: Make sure MongoDB is installed and running on your system. You can download 
it from here.
2. Set Up the Project
• Clone the Repository: If your project is in a version control system like Git, clone it using:
bash
git clone <repository-url>
cd <repository-folder>
Since, it is in the zip folder so you can directly copy it from there
• Install Dependencies: Run the following command in the project directory to install all 
required Node.js packages:
bash
npm install
3. Set Up Environment Variables
• Create .env File: In the root of your project, create a .env file.
• Add the following variables:
env
MONGO_URI=mongodb://localhost:27017/melodyverse_db # Replace with your MongoDB URI
JWT_SECRET=your_jwt_secret_key # Replace with your JWT secret key
4. Run the API
• Start the server using the following command:
bash
npm start
• The server should now be running on http://localhost:5000.
5. Test the API
You can test the API using tools like Postman or cURL.
5.1 Signup API
• Endpoint: POST http://localhost:5000/api/auth/signup
• Request Body:
json
{
 "username": "testuser",
 "email": "testuser@example.com",
 "password": "password123"
}
• Expected Response:
json
{
 "message": "User registered successfully"
}
5.2 Login API
• Endpoint: POST http://localhost:5000/api/auth/login
• Request Body:
json
Copy code
{
 "email": "testuser@example.com",
 "password": "password123"
}
• Expected Response:
json
{
 "token": "<your-jwt-token>"
}
5.3 Password Reset API
• Forgot Password
o Endpoint: POST http://localhost:5000/api/auth/forgot-password
o Request Body:
json
{
 "email": "testuser@example.com"
}
o Expected Response:
json
{
 "message": "Password reset email sent"
}
• Reset Password
o Endpoint: POST http://localhost:5000/api/auth/reset-password/:token
o Request Body:
json
{
 "newPassword": "newpassword123"
}
o Expected Response:
json
{
 "message": "Password reset successfully"
}
6. Check MongoDB Database
• You can verify that users are being created in your MongoDB database by connecting to your 
database and checking the users collection.
7. Frontend Testing
• Ensure that the frontend interacts with the backend by testing the signup, login, and 
password reset functionalities through the user interface.
8. Troubleshooting
• Common Issues:
o Port Already in Use: If you see an error about the port being in use, either stop the 
other process or change the port in your server.js file.
o Database Connection Error: Ensure that your MongoDB server is running and that 
the MONGO_URI is correct.
9. Deployment
• Local: You can continue testing on your local machine.
• Production: To deploy, consider services like Heroku, AWS, or DigitalOcean, and make sure to 
set environment variables securely in production environments.
These steps should guide you through running and testing API locally.
