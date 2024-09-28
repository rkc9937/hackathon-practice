FROM node:14

WORKDIR /frontend

COPY . .

RUN npm install

RUN npm install react-scripts

EXPOSE 3000

CMD ["npm", "start"]