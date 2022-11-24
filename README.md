Method | Path | Purpose
---|---|---
get | /api/categories | Returns an array of categories
post | /api/recipes/new | Recives information for recipe and Adds Recipe
get | /api/recipes/:id | Recives an id return information for specific recipe
delete | /api/recipes/:id| Recives an id deletes specific recipe
post | /api/user/new | Receives a user name and password and creates a new user
post | /api/user/authenication | Receives a user name and password authenicates user and returns user information
get | /api/user/profile | checks for current user and returns user information