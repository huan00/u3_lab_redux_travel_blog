const { Schema } = require('mongoose')

const Post = new Schema(
  {
    image: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: Schema.Types.ObjectId, ref: 'locations' },
    likes: { type: Number, required: false },
    comments: [{ type: Schema.Types.ObjectId, ref: 'comments' }]
  },
  { timestamps: true }
)
module.exports = Post
