const qrcode = require('qrcode-terminal');
const { BoostGPT } = require("boostgpt")
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const dotenv  = require('dotenv')
dotenv.config()

const client = new Client({
    puppeteer: {
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ],
        authStrategy: new LocalAuth(),
    },
    authStrategy: new LocalAuth(),
});

const boostgpt = new BoostGPT({
    key: process.env.BOOSTGPT_API_KEY,
    project_id: process.env.BOOSTGPT_PROJECT_ID
});

const contacts = process.env.WHATSAPP_CONTACTS
 
client.initialize();
 
client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});
 
client.on('authenticated', () => {
    console.log('Authenticated');
  });
 
client.on('ready', () => {
  console.log('Bot is online!');
});

client.on('message', async (message) => {
      const chat = await message.getChat();

      chat.sendStateTyping();

      if (chat) {
        if(contacts.includes(chat.id.user)){

          let payload = {
              bot_id: process.env.BOOSTGPT_BOT_ID,//The collection to chat
              openai_key: process.env.OPENAI_API_KEY,
              model: process.env.BOOSTGPT_BOT_MODEL, //The model to use for the chat response. Defaults to the bot model.
              message: message.body, //The chat message
              source_ids: process.env.BOOSTGPT_BOT_SOURCE_IDS, //The training source id's you want the AI's knowledge to be limited to.
              tags: process.env.BOOSTGPT_BOT_TAGS, //Use tags to get the segment of the training data you want the AI's knowledge to be limited to.
              top: process.env.BOOSTGPT_BOT_TOP, //Optional. The weight of training data used to form a context. Defaults to 10. Recommended settings between : 10 - 15 give better response from the AI.
          }

          let chatbot = await boostgpt.chat(payload);

          if (chatbot.err) {
                // message.reply(`Hi ${process.env.ERROR_MESSAGE}`)
          }else{
              if (chatbot.response.chat) {
                 chat.clearState();
                 await chat.sendMessage(chatbot.response.chat.reply); 
              }
          }
        }
      }
});