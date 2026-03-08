# syntax=docker/dockerfile:1

FROM node:lts-alpine
WORKDIR /movinin/backend
COPY ./backend ./
COPY ./backend/.env.docker .env
COPY ./packages /movinin/packages
RUN npm install

CMD [ "npm", "run", "start:setup"]
EXPOSE 4004
