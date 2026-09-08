require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const ft = fs.readFileSync("./facts2.html", "utf8");
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

app.command("/szenzei-ping", async ({ ack, respond }) => {
  await ack();

  await respond("Szenzei is online! 🟢");
});

(async () => {
  await app.start();
  console.log("⚡ Szenzei is running!");
})();


app.command("/szenzei-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text:
`${response.data.setup}

${response.data.punchline}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});


app.command("/szenzei-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const html = fs.readFileSync("./facts.html", "utf8");
    console.log("facts.html loaded");
    const facts = [...html.matchAll(
      /<p[^>]*class=["']fact["'][^>]*>([\s\S]*?)<\/p>/gi
    )].map(match => match[1].trim());
    console.log("Facts found:", facts);
    if (facts.length === 0) {
      await respond({
        text: "❌ No facts found in facts.html"
      });
      return;
    }

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    console.log("Random fact:", randomFact);
    await respond({
      text: `Cat Fact:\n${randomFact}`
    });
  } catch (err) {
    console.error("FACT ERROR:", err);
    await respond({
      text: "Failed to read facts.html"
    });
  }
});



app.command("/szenzei-fact", async ({ ack, respond }) => {
  await ack();

  try {
    const html = ft;

    console.log("facts2.html loaded");

    const facts = [...html.matchAll(
      /<p[^>]*class=["']fact["'][^>]*>([\s\S]*?)<\/p>/gi
    )].map(match => match[1].trim());

    console.log("Facts found:", facts);

    if (facts.length === 0) {
      await respond({
        text: "No facts found in facts2.html"
      });
      return;
    }
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    console.log("Random fact:", randomFact);
    await respond({
      text: `Fact:\n${randomFact}`
    });

  } catch (err) {
    console.error("FACT ERROR:", err);
    await respond({
      text: "Failed to read facts2.html"
    });
  }
});




app.command("/szenzei-remind", async ({ command, ack, client }) => {
  await ack();

  try {
    const text = command.text.trim();

  
    const match = text.match(/^(\d+)(s|m|h|d)\s+(.+)$/i);

    if (!match) {
      await client.chat.postEphemeral({
        channel: command.channel_id,
        user: command.user_id,
        text:
          "Usage: `/szenzei-remind <time> <message>`\n" +
          "Examples: `/szenzei-remind 10m Finish homework` or `/szenzei-remind 1h Take a break`"
      });
      return;
    }

    const amount = parseInt(match[1]);
    const unit = match[2].toLowerCase();
    const message = match[3];

    let milliseconds;

    switch (unit) {
      case "s":
        milliseconds = amount * 1000;
        break;

      case "m":
        milliseconds = amount * 60 * 1000;
        break;

      case "h":
        milliseconds = amount * 60 * 60 * 1000;
        break;

      case "d":
        milliseconds = amount * 24 * 60 * 60 * 1000;
        break;
    }

    // Limit reminder time to 7 days
    if (milliseconds > 7 * 24 * 60 * 60 * 1000) {
      await client.chat.postEphemeral({
        channel: command.channel_id,
        user: command.user_id,
        text: "The maximum reminder time is 7 days."
      });
      return;
    }

    await client.chat.postEphemeral({
      channel: command.channel_id,
      user: command.user_id,
      text: `⏰ Reminder set for *${amount}${unit}*: ${message}`
    });
    setTimeout(async () => {
      try {
        await client.chat.postMessage({
          channel: command.channel_id,
          text: `🔔 <@${command.user_id}> Reminder: ${message}`
        });
      } catch (error) {
        console.error("Failed to send reminder:", error);
      }
    }, milliseconds);
  } catch (error) {
    console.error("Reminder error:", error);
  }
});
