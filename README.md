## If you want to get all functionality you need to have a Docker.

## Available Scripts

In the project directory, you can run:

### `npm start:client`

Runs the client app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start:server`

Runs the server app in the development mode.
Open [http://localhost:8888](http://localhost:8888) to view it in the browser.

## If you have a Docker

### `docker-compose up --build`

and then

### `npx sequelize-cli db:migrate`

Runs postgres DB and adminer, also runs client and server parts of this application in Docker,
so you don't need to install all dependencies on your local machine.

### Don't forget to create .env file with variables like in .envexample file

