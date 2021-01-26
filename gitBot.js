const { Reshuffle, CronConnector } = require("reshuffle");
const { GitHubConnector } = require("reshuffle-github-connector");
const { SlackConnector } = require("reshuffle-slack-connector");

const app = new Reshuffle();
// Cron config
const cronConnector = new CronConnector(app);
//Github Config
const githubConnector = new GitHubConnector(app, {
 token: '9e5f573d00ba0074516728cac215808758f8b38a',
 //runtimeBaseUrl: 'https://github.com/',
});

cronConnector.on({ expression: "32 * * * *" }, async (event, app) => {
 const { data } = await githubConnector.sdk().pulls.list({
   owner: 'lcildir',
   repo: 'example',
   state: "open",
 });
 data.forEach(async ({ html_url, requested_reviewers: reviewers }) => {
   //await messageHelper(reviewers, slackUsers, html_url, true);
   console.log(html_url);
 });
});

app.start();