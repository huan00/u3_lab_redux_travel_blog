const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    name: { type: String, require: false },
    comment: { type: String, require: true }
  },
  { timestamps: true }
)

module.exports = Comment
