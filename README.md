
# 🏡 Airbnb Clone – BCA Major Project

A full-stack Airbnb-style web application built using Node.js, Express, MongoDB, and EJS templating.  
This project is developed as a Major Project for the Bachelor of Computer Applications (BCA)  
at **Uttaranchal University**.



## 🚀 Features

- User Registration & Login (Passport.js)
- Add, Edit and Delete Property Listings
- Cloud-based Image Upload (Cloudinary + Multer)
- Review & Rating System for Listings
- Search and filtering support
- Secure session management and flash messaging
- Form validation using Joi
- Error handling with custom error pages


## 🛠️ Tech Stack

| Component | Technology |
|----------|------------|
| Frontend | EJS, Bootstrap, Custom CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (Mongoose) |
| Authentication | Passport.js |
| File Upload | Multer + Cloudinary |
| Environment Config | dotenv |


# 📦 Installation & Setup

Follow the steps below to set up the project locally:

### 1️⃣ Clone the Repository

git clone https://github.com/AadilGugarman/airbnb-clone-OnlineUU-project.git

### 2️⃣ Navigate into the Project Folder

cd airbnb-clone-OnlineUU-project

### 3️⃣ Install Required Dependencies

npm install

### 4️⃣ Start the Development Server

npm start

Your application should now be running locally! 🎉



## Create a `.env` file using `.env.example`:


ATLAS_DB=yourMongoDBConnectionURL
SECRET=yourSessionSecret
CLOUD_NAME=yourCloudinaryCloudName
CLOUD_API_KEY=yourCloudinaryAPIKey
CLOUD_API_SECRET=yourCloudinaryAPISecret
MAP_TOKEN=yourMapboxTokenHere

## Start the server:

node app.js
# OR
npx nodemon app.js

Visit in browser:

http://localhost:8080/listings


---

## 🔗 Project Links

GitHub Repository:
👉 https://github.com/AadilGugarman/airbnb-clone-OnlineUU-project

Live Deployment:
*(Will be updated soon)*

---

## 📂 Folder Structure


airbnb-clone-project/
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
├── .env.example
├── README.md
├── RUN.txt
│
├── controllers/     # Business logic
├── models/          # Database schemas
├── routes/          # All express routes
├── views/           # EJS UI pages
├── public/          # CSS, JS & images
├── middleware/      # Authentication rules
├── utils/           # Helper utilities
└── uploads/         # Uploaded images


---

## 👨‍💻 Developer Information

| Name       | Aadil Gugarman                          |
| Course     | Bachelor of Computer Applications (BCA) |
| University | Uttaranchal University                  |
| Guide      | Mr. Ramiz Shaikh (Software Engineer)    |
| Submission | Major Project                           |

---



⭐ Thank You!

```
```
