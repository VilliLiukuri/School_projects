#React/Redux
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 4100

CMD apt update && apt install dnsutils -y && public_ip=$(dig +short myip.opendns.com @resolver1.opendns.com) && sed -i "s/localhost/$public_ip/g" src/agent.js && npm start
#CMD [ "npm", "start" ]
