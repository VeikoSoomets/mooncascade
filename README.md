# Mooncascade Test
This project is made to solve the test assignment created by Mooncascade.

### General info
- For this task I used Framework called **Laravel Framework**. For more information on framework [visit this link](https://laravel.com). You can also find installation instructions from there.
- The project includes two servers - laravel server and node server. Purpose of the first server is to deal with API calls and managing all the heavy application logic while the second server is responsible for websocket (using socket.io library) calls which makes live reload possible.
- Frontend is written in **Angular 2.0**
- Project includes a **dummyclient** which enables persisting some data to database with Laravel ORM using it's objects. After you persist the data a message is sent to a channel **redis server** which is listened by a node server. Then node server sends a message to frontend which makes an ajax request and then updates the models and the view.

### Installation instructions
- Install PHP and MySQL database
- Install Laravel for PHP and dependencies (use composer for that)
- Install node and npm
- Install redis. Redis is used for creating a channel and delivering update messages from laravel server to node server through publishing messages in redis server.
- Create **.env** file based on **.env.example** and change database and redis settings the file. Note that there is path to dummy_data which is used to persist data to application.
- Install angular dependencies with commands **npm install** and **npm run typings install**
- Compile all the js and css with command **gulp**

### Usage
- Start the application server with in root folder with command **php artisan serve**
- Start node server (for live reload) in **nodeserver folder** with command *node server.js*
- You can push data to database with command **php artisan dummyclient:send**
