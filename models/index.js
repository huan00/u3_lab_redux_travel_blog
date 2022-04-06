const mongoose = require('mongoose')

const CommentSchema = require('./comments')
const PostSchema = require('./post')
const LocationSchema = require('./location')

const Comment = mongoose.model('comments', CommentSchema)
const Post = mongoose.model('posts', PostSchema)
const Location = mongoose.model('locations', LocationSchema)

module.exports = {
  Comment,
  Post,
  Location
}
