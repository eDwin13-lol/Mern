const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    source: {
      type: String,
      enum: ['reddit', 'youtube'],
      required: true,
      index: true,
    },
    sourceId: {
      type: String,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    thumbnail: String,
    author: String,
    score: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
    description: String,
    metadata: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

PostSchema.index({ createdAt: -1 });
PostSchema.index({ source: 1, createdAt: -1 });

module.exports = mongoose.model('Post', PostSchema);
