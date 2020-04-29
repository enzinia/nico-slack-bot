const GCS = require('./gcs');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const storage = new GCS();

exports.start = async (req, res) => {
  const file = await storage.getRandomFile();

  res.send(file);
};

