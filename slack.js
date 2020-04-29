const { IncomingWebhook } = require('@slack/webhook');

module.exports = class SlackWebhook {
  constructor() {
    const url = process.env.SLACK_WEBHOOK_URL;
    this.webhook = new IncomingWebhook(url);
  }

  async sendImage(file) {
    const payload = {
      text: file.name,
      blocks: [
        {
          type: 'image',
          title: {
            type: 'plain_text',
            text: file.name
          },
          block_id: 'main_image',
          image_url: file.url,
          alt_text: file.name
        }
      ]};
    await this.webhook.send(payload);
  }
}

