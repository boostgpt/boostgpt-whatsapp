# BoostGPT WhatsApp

BoostGPT WhatsApp is a streamlined and user-friendly startup script that enables you to set up your own custom WhatsApp bot in a flash. With its cutting-edge artificial intelligence and powerful functionality, BoostGPT WhatsApp can help you automate tasks, improve workflow, and add an extra layer of fun and interactivity to your WhatsApp account.

<a href="https://discord.gg/FPTmDNjA"><img src="https://img.shields.io/discord/1100801013121822770?color=%bbccff&label=Discord" alt="Discord"></a>


## Features

- Can reply to direct messages


## Requirements

* Node v10 and above

* WHATSAPP_CONTACTS:

This is an array of contacts that you want the bot to respond to. Each contact in the array must include the country code without the "+" sign. For example, if you are adding a contact with the phone number "+2339508******", you would enter "2339508******" in the array. This ensures that the bot will be able to recognize and respond to messages from the specified contacts.


* OPENAI_API_KEY:

You need to have an OpenAI account and API key.
Go to the [OpenAI developer portal](https://platform.openai.com/), create an account, and generate an API key.

* BOOSTGPT_API_KEY:

You need to have a BoostGPT account and API key.
Go to the [BoostGPT site](https://boostgpt.co), create an account, and generate an API key.

* BOOSTGPT_PROJECT_ID:

You need to create a project on BoostGPT to use its API.
After creating a project, you can get its project ID from the dashboard.

* BOOSTGPT_BOT_ID:

You will need to have created a BoostGPT bot and have its ID.
To get your bot's ID, go to your bot's settings page on the BoostGPT dashboard and copy the bot ID.



## Installation

`git clone git@github.com:boostgpt/boostgpt-whatsapp.git`

Run `npm install`

## Configuration

To create a .env file with the above requirements, you can follow these steps:

1. Rename the file .env.exclude to .env.

2. Open the .env file in a text editor.

3. Edit the following lines in the file, replacing the placeholders with the actual tokens and IDs:

```
    WHATSAPP_CONTACTS=your_whatsapp_contacts_here
    OPENAI_API_KEY=your_openai_api_key_here
    BOOSTGPT_API_KEY=your_boostgpt_api_key_here
    BOOSTGPT_PROJECT_ID=your_boostgpt_project_id_here
    BOOSTGPT_BOT_ID=your_boostgpt_bot_id_here
```

4. Save the file

Make sure to keep the .env file secure and not share it publicly, as it contains sensitive information that could be used to access your bots and APIs.


### Start your bot

Run `node index.js` to start your bot. 

There we go! You should now see something like this after running the file:

<img src="https://wwebjs.dev/assets/img/qr-gen.e20f2e8c.png" />

After scanning this QR code, the bot should be authorized and you should see a Bot is online! message being printed out.

*Note: If you want to run `boostgpt-whatsapp` on a system without GUI (for example linux server images that can just be accessed over a shell and don't have something like a desktop). You need to install the following dependencies with the apt-get command (remember to apt-get update before you install).*

`sudo apt install -y gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget`


We recommend using the pm2 process manager to start your bot in production mode. 

To do this you have to:

- Install pm2 globally using the command `npm install -g pm2`.

- Navigate to the directory where your index.js file is located.

- Start your bot by running the command `pm2 start index.js --name my-bot` where my-bot is the name of your bot.

- Pm2 will automatically detect the Node.js runtime and launch the application in cluster mode.

- Verify that your bot is running by checking its status with the command `pm2 status`.

- If you need to stop the bot, you can run the command `pm2 stop my-bot`.

- If you need to restart the bot, you can run the command `pm2 restart my-bot`.

Using pm2 provides a number of benefits, including process management, automatic restarts in case of crashes, and monitoring capabilities.


## Questions?

[Join our Discord server.](https://discord.gg/KGhz5SnyXM)


### License

This package is licensed under the [MIT](https://github.com/boostgpt/boostgpt-crisp/blob/master/LICENSE).
