const GCS = require('./gcs');
const SlackWebhook = require('./slack');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const storage = new GCS();
const slackWebhook = new SlackWebhook();

exports.start = async (req, res) => {
  const file = await storage.getRandomFile();

  await slackWebhook.sendImage(file);

  res.sendStatus(200);
};

