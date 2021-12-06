FROM node:16
WORKDIR /home/node/app
COPY todo-server /home/node/app
RUN npm install
CMD npm run start
EXPOSE 7070