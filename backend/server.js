const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

// MongoDB Atlas connection URL
const mongoURL = 'mongodb+srv://registration:registration@cluster0.sd2bhdx.mongodb.net/?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(mongoURL, { useUnifiedTopology: true });

// Connect to MongoDB and initialize GridFSBucket
let gfs;

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    const db = mongoose.connection.db;
    gfs = new mongoose.mongo.GridFSBucket(db);

    // Start the server only after the MongoDB connection and GridFSBucket initialization
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log('\x1b[35m%s\x1b[0m', `Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if connection fails
  });

// Mongoose model for video metadata
const Video = mongoose.model(
  'Video',
  new mongoose.Schema({
    videoId: String,
    title: String,
    description: String,
    author: String,
  })
);

// Configure multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Apply the cors middleware
app.use(cors());

// Endpoint to handle file upload
app.post('/upload', upload.single('video'), async (req, res) => {
  const videoFile = req.file;
  if (!videoFile) {
    return res.status(400).send('No video file found');
  }

  try {
    // Create a writable stream to GridFS
    const writestream = gfs.openUploadStream(videoFile.originalname, {
      metadata: {
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
      },
    });

    // Pipe the file buffer to the writable stream
    videoFile.stream.pipe(writestream);

    writestream.on('finish', async (file) => {
      // Create a new video record in the database
      const newVideo = new Video({
        videoId: file._id.toString(),
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
      });

      await newVideo.save();

      console.log('Video uploaded successfully:', newVideo);

      return res.status(200).send('Video uploaded successfully');
    });

    writestream.on('error', (err) => {
      console.error('Error uploading video:', err);
      return res.status(500).send('Error uploading video');
    });
  } catch (err) {
    console.error('Error uploading video:', err);
    return res.status(500).send('Error uploading video');
  }
});
