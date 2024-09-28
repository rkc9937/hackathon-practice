FROM node:14

WORKDIR /frontend

COPY . .

RUN npm install

RUN npm install react-scripts

RUN npm install @mui/material @emotion/react @emotion/styled

RUN npm install react-router-dom

RUN npm install axios

EXPOSE 3000

CMD ["npm", "start"]