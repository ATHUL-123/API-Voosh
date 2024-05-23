# Node.js Authentication API

## Overview

This project is a Node.js-based backend API for an authentication system that includes the following 

## Features

- User registration and login with JWT authentication
- Social login with Google, GitHub
- Profile management including uploading a profile photo
- Setting profile visibility to public or private
- Admin access to both public and private profiles
- Normal users can only see public profiles

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js for social login
- JSON Web Tokens (JWT)
- Multer for file uploads
- bcrypt.js for password hashing
- express-validator for input validation

## Setup and Installation

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ATHUL-123/API-Voosh.git
   
2. Add .env:
   
   PORT=3000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
