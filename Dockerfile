FROM node
RUN mkdir /app && cd /app
WORKDIR /app
COPY . /app
RUN npm install
CMD [ "npm", "start" ]
EXPOSE 4200
