FROM fusuf/whatsasena:latest

RUN git clone https://github.com/DrkBotBase/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=America/New_York
RUN npm install supervisor -g
RUN npm install

CMD ["node", "bot.js"]
