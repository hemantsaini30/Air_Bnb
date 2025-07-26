# Air_BnB - Vacation Rental Platform

A full-stack web application inspired by Airbnb, built with Node.js, Express, and MongoDB. This platform allows users to browse vacation rental listings, view details, and read reviews.

---

## ✨ Features

- **Property Listings**: Browse available vacation rentals with images and details  
- **Review System**: Users can leave reviews and ratings for properties  
- **Map System**: Users can see where the listing is located on the map  
- **Responsive Design**: Works on desktop, tablet, and mobile devices  
- **User Authentication**: Secure login and signup system using Passport.js  
- **User Authorization**: Only logged-in users can create, edit, or delete their own listings and reviews  
- **Image Uploads**: Users can upload images with listings (handled via Multer & Cloudinary)  
- **Interactive Maps**: Location-based map using Mapbox  
- **Database Storage**: All data stored securely using MongoDB Atlas  

---

## 🚀 Live Demo

Experience the application live:  
👉 [https://air-bnb-y4ey.onrender.com/listings](https://air-bnb-y4ey.onrender.com/listings)

---

## 🎯 Usage

- Browse available listings on the homepage.
- Click on a listing to view details and reviews.
- Sign up or log in to create, edit, or delete your own listings and reviews.
- Upload images when creating or editing listings.
- Use the interactive map to view property locations.


## 🛠️ Project Structure

```

AIR_Bnb/
├── controllers/
│ ├── listing.js
│ ├── review.js
│ └── user.js
├── init/
│ └── index.js
├── models/
│ ├── listing.js
│ ├── review.js
│ └── user.js
├── node_modules/
├── public/
│ ├── css/
│ │ ├── rating.css
│ │ └── style.css
│ └── js/
│ ├── map.js
│ └── script.js
├── routes/
│ ├── listing.js
│ ├── review.js
│ └── user.js
├── utils/
│ ├── ExpressError.js
│ └── wrapAsync.js
├── views/
│ ├── includes/
│ │ ├── flash.ejs
│ │ ├── footer.ejs
│ │ └── navbar.ejs
│ ├── layouts/
│ │ └── boilerplate.ejs
│ ├── listings/
│ │ ├── edit.ejs
│ │ ├── index.ejs
│ │ ├── new.ejs
│ │ └── show.ejs
│ ├── users/
│ │ ├── login.ejs
│ │ └── signup.ejs
│ └── error.ejs
├── .env
├── .gitignore
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
├── package-lock.json
├── README.md
└── schema.js


```

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, Bootstrap, EJS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))  

---

## 🔌 Third-Party Libraries & Services

- [Mapbox](https://www.mapbox.com/): For map and location features  
- [Passport.js](http://www.passportjs.org/): For user authentication  
- [Multer](https://github.com/expressjs/multer): For handling image uploads  
- [Cloudinary](https://cloudinary.com/): For storing and delivering uploaded images  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): Cloud-hosted NoSQL database  

---

## 📚 API Endpoints

| Endpoint             | Method | Description                            |
|----------------------|--------|--------------------------------------|
| `/listings`          | GET    | Get all property listings             |
| `/listings/new`      | GET    | Show form to create a new listing     |
| `/listings`          | POST   | Create a new listing                   |
| `/listings/:id`      | GET    | Get a specific listing                |
| `/listings/:id/edit` | GET    | Show form to edit a specific listing  |
| `/listings/:id`      | PUT    | Update a specific listing              |
| `/listings/:id`      | DELETE | Delete a specific listing              |

| Endpoint             | Method | Description                            |
|----------------------|--------|--------------------------------------|
| `/reviews`           | GET    | Get all reviews                       |
| `/reviews/:id`       | GET    | Get a specific review or reviews for a listing |
| `/reviews`           | POST   | Create a new review                   |
| `/reviews/:id`       | PUT    | Update a specific review              |
| `/reviews/:id`       | DELETE | Delete a specific review              |

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas account
- Cloudinary account
- Mapbox API key

### Installation
1. Clone the repo  
   `git clone https://github.com/hemantsaini30/air_bnb.git`  
2. Install dependencies  
   `npm install`  
3. Setup your `.env` file with necessary keys (MongoDB URI, Cloudinary, Mapbox, etc.)  
4. Start the server  
   `npm start`  
5. Open [http://localhost:8080](http://localhost:8080) in your browser

## 🤝 Contributing

Contributions are welcome!  
Feel free to open issues or submit pull requests for bug fixes and new features.

Please make sure to update tests as appropriate.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Hemant Saini**  
- GitHub: [hemantsaini30](https://github.com/hemantsaini30) 
