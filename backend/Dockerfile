FROM node:18.3.0-slim

ARG NODE_ENV=development
ARG WKDIR=/app
ENV NODE_ENV=${NODE_ENV}


WORKDIR ${WKDIR}
COPY package*.json ./
RUN npm install yarn && yarn

COPY . .