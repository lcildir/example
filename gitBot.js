const { Reshuffle, CronConnector } = require("reshuffle");
const { GitHubConnector } = require("reshuffle-github-connector");
const { SlackConnector } = require("reshuffle-slack-connector");

const app = new Reshuffle();
// Cron config
const cronConnector = new CronConnector(app);
//Github Config
const githubConnector = new GitHubConnector(app, {
 token: 'e76425835f9b83e5a0c18f299c00dd9759da12e3',
 runtimeBaseUrl: 'https://github.com/',
});
const slackConnector = new SlackConnector(app, {
 token: 'xoxb-15283249781-1665628763922-GJUTKBIA6Sa7SfeuQdl6x8PM',
 signingSecret: 'af01bc3327a185d8a7e5baf460c9bd1d',
});

 // Code listed further down
 // will be inserted here

app.start();