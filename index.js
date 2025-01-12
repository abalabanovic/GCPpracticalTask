const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

const bucketName = process.env.BUCKET_NAME;

exports.processMessage = async (event, context) => {
  const message = Buffer.from(event.data, 'base64').toString();
  const fileName = `message-${context.eventId}.txt`;

  try {
    const bucket = storage.bucket(bucketName);
    const file = bucket.file(fileName);
    await file.save(message);

    console.log(`Saved message to ${fileName} in bucket ${bucketName}`);
  } catch (err) {
    console.error('Error writing to storage:', err);
  }
};