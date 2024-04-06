FROM node:18

WORKDIR /app
ENV PORT=3000

COPY package.json .

RUN npm install
RUN npm install -g pm2

COPY . .
EXPOSE ${PORT}

CMD pm2 start ecosystem.config.js && pm2 monit
# CMD [ "pm2", "start", "ecosystem.config.js" ]
# CMD [ "sleep", "3600000" ]