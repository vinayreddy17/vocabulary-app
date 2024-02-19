GRE Vocabulary Builder - Backend
Welcome to the GRE Vocabulary Builder project! This repository contains the backend server for serving word data through a RESTful API. The frontend application is housed in a separate repository (vocabulary-frontend), providing a user interface for accessing and studying GRE vocabulary.

Overview
The backend server is built with Node.js,express.js and MongoDB, storing word data and exposing an API endpoint (/api/getwords) for retrieving words in JSON format. It utilizes Express.js for routing and handling HTTP requests.

Backend Server
Features
Word Data: Stores word data in a MongoDB database, including meanings, synonyms, antonyms, and usage examples.
API Endpoint: Exposes a GET endpoint (/api/getwords) for retrieving words in JSON format.
API Endpoint
GET /api/getwords: Retrieves words along with their meanings, synonyms, antonyms, and usage examples.
You can access the live backend server [Click here](https://words-gre.onrender.com/)


Usage
To start using the GRE Vocabulary Builder backend:

Clone this repository to your local machine.
Install dependencies using npm install.
Start the server using npm start.
