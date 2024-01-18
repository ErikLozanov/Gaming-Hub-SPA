# Gaming Hub Documentation

## 1. Project Overview
Gaming Hub is a web platform designed for gaming enthusiasts to explore, purchase, and interact with games. Users can register, buy games, add new games, comment on existing games, and view other users' profiles.

## 2. Key Features
- User Registration and Authentication
- Game Purchase and Addition
- Game Commenting
- User Profile Management

## 3. Tech Stack
- JavaScript
- ReactJS
- MongoDB
- Mongoose
- Express

## 4. Architecture Overview
The project follows a client-server architecture. The client is built using ReactJS, and the server is implemented using Express. Data is stored in MongoDB.

## 5. Components/Modules
- **Details Component:** Displays game details including description, contributor information, and release date.
- **Comments Component:** Allows users to view and add comments for a specific game.
- **Profile Component:** Manages user profiles, including name, description, profile picture, and a list of added games.

## 6. Data Storage
Data is stored in MongoDB, utilizing three collections:
- Users: Stores user information.
- Games: Contains details about each game.
- Comments: Manages comments associated with games.

## 7. User Interface (UI)
The UI features a dynamic header navigation bar. Certain sections are accessible only to logged-in or authorized users, providing a personalized and secure experience.

## 8. Authentication and Authorization
Authentication is handled through error handling, ensuring secure user access. Authorization is implemented using Route Guards to control access to private sections based on user roles.

## 9. APIs and Integrations
The project interacts with MongoDB for data storage and retrieval, facilitating user registration, game management, and comment handling.

## 10. Scalability
The project is designed to scale efficiently to accommodate increased user activity and a growing game database.

![Capture2](https://github.com/ErikLozanov/Gaming-Hub-SPA/assets/122800063/8c6e3db9-0800-416f-8940-608e010f9473)

![Capture1](https://github.com/ErikLozanov/Gaming-Hub-SPA/assets/122800063/8926dc18-619d-488a-9d66-b8c1a6b5df61)
![ProfileView](https://github.com/ErikLozanov/Gaming-Hub-SPA/assets/122800063/0df9eda4-adc3-42eb-9ff1-5a292277d176)
![CommentView](https://github.com/ErikLozanov/Gaming-Hub-SPA/assets/122800063/151a181c-dcaf-45de-bd51-f28027738f68)


