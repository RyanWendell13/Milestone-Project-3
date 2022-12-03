# Recipe Book
An online recipe book. Users can login and add their own recipes. 

## Demo
https://recipe-book-gyos.onrender.com

## Technology
### Frontend
- React
- Scss

### Backend
- Node JS
- Express
- MongoDB

## Technical Information
### How To Run(Locally)
In the backend folder create a .env file and add the following.

    MONGO_URI = (MongoDB connection string)
    PORT = (Port number to run on)
    SESSION_SECRET = (Type a string of random letters)
    CORS_ORIGIN = (Set to frontend url)

run node backend/seeder/seed-categories.js 
run npm start

## API
### Backend
Method | Path | Purpose
---|---|---
get | /api/categories | Returns an array of categories
post | /api/recipes/new | Recives information for recipe and Adds Recipe
get | /api/recipes/:id | Recives an id return information for specific recipe
delete | /api/recipes/:id/delete| Recives an id deletes specific recipe
post | /api/user/new | Receives a user name and password and creates a new user
post | /api/user/authenication | Receives a user name and password authenicates user and returns user information
get | /api/user/profile | checks for current user and returns user information