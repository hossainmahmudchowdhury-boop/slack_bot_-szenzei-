# Szenzei
A fun live Slack bot with many features; it's a very multifunctional bot with interactive commands for entertainment and some randomness!!
[Try my bot!](https://slack.com/oauth/v2/authorize?client_id=2210535565.11873362613892&scope=commands,calls:write,app_mentions:read,channels:history&user_scope=)

<img width="515" height="98" alt="image" src="https://github.com/hossainmahmudchowdhury-boop/slack_bot_-szenzei-/blob/main/Image/img%201.png" />
<img width="515" height="98" alt="image" src="https://github.com/hossainmahmudchowdhury-boop/slack_bot_-szenzei-/blob/main/Image/img2.png" />
<img width="515" height="98" alt="image" src="https://github.com/hossainmahmudchowdhury-boop/slack_bot_-szenzei-/blob/main/Image/img3.png" />


## What is this about?

This is a Slack bot designed for the Hack Club Slack workspace that allows users to access a variety of entertaining tools, API utilities, and basic automation commands right within Slack. It began as a small experiment for Stardance but evolved into a more extensive system for delving into backend development, without relying on APIs, and understanding the fundamentals.

## How does it work?


## Command Usage

Here are the available commands and the arguments they accept:

| Command            | Arguments          | Example                               | Description                                               |
| ------------------ | ------------------ | ------------------------------------- | --------------------------------------------------------- |
| `/szenzei-ping`    | None               | `/szenzei-ping`                       | Checks if Szenzei is online.                              |
| `/szenzei-hello`   | None               | `/szenzei-hello`                      | Sends a greeting message.                                 |
| `/szenzei-catfact` | None               | `/szenzei-catfact`                    | Sends a random cat fact.                                  |
| `/szenzei-fact`    | None               | `/szenzei-fact`                       | Sends a random fact from the bot's local fact collection. |
| `/szenzei-joke`    | None               | `/szenzei-joke`                       | Sends a random joke.                                      |
| `/szenzei-remind`  | `<time> <message>` | `/szenzei-remind 10m Finish homework` | Creates a reminder after the specified amount of time.    |

### `/szenzei-remind` arguments

The `/szenzei-remind` command requires two arguments:

* `<time>` — how long to wait before sending the reminder.
* `<message>` — the text you want to be reminded about.

Examples:

```text
/szenzei-remind 10m Finish homework
/szenzei-remind 30m Check my project
/szenzei-remind 1h Take a break
```


If a command requires arguments, make sure to provide them after the command, separated by spaces.


The bot is already installed in the Hack Club Slack workspace.
To use it:
go to slack and run commands starting with /
Please message the bot directly.
Example usage:
- /szenzei-ping
- /szenzei-catfact
- /szenzei-fact
- /szenzei-joke
- /szenzei-remind

  (Time, Remind Text)
  
- /szenzei-hello

Note: almost all commands require an input after the command, separated by a space.
setup (optional):

if you want to run your own version:


clone the repository:

git clone https://github.com/hossainmahmudchowdhury-boop/slack_bot_-szenzei-

cd https://github.com/hossainmahmudchowdhury-boop

npm install

set environment variables (create a .env file):

SLACK_BOT_TOKEN=your_token

SLACK_APP_TOKEN=your_token

run the bot:

node index.js

## What I learned from this project: 

I gained valuable knowledge about APIs, their functionality, SSH servers, and the hosting of code, as well as Python and backend systems. I developed a Slack bot using Node.js and Slack Bolt, learned to interact with external APIs and manage asynchronous requests, link various services (Slack, Python services, external APIs), and even deploy and host backend code on remote servers via SSH.

  ---
  ## Creator:
   made by: ZenZei!!
