FROM node:lts-alpine
WORKDIR /server
COPY . .
RUN npm install
EXPOSE 8080
CMD ["node", "app.js"]
