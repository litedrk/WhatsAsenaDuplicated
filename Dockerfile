FROM fusuf/whatsasena:latest

RUN git clone https://github.com/BotPrivateDrk/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV ES=America/Barranquilla
RUN npm install supervisor -g
RUN npm install

CMD ["node", "bot.js"]
