const { Storage } = require('@google-cloud/storage');

module.exports = class GCS {
  constructor() {
    this.storage = new Storage();
    this.bucketName = 'nico-best';
  }

  async getFilesList() {
    const bucket = this.storage.bucket(this.bucketName);
    // TODO: cache?
    return await bucket.getFiles();
  }

  async getRandomFile() {
    const [files] = await this.getFilesList();
    const file = files[Math.floor(Math.random() * files.length)];

    return { name: file.name, url: file.metadata.mediaLink };
  }
}

