FROM node:22

WORKDIR /frontend

COPY package.json /frontend/package.json
COPY package-lock.json /frontend/package-lock.json

RUN npm install
RUN npm install react-scripts

COPY . ./frontend

EXPOSE 3000

CMD ["npm", "start"]
