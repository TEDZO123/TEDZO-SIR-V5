FROM fusuf/whatsasena:latest

RUN git clone https://github.com/TEDZO123/TEDZO-SIR-V5 /root/TEDZO-SIR-V5
WORKDIR /root/TEDZO-SIR-V5/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
