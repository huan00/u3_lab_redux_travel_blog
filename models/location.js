const { Schema } = require('mongoose')

const Location = new Schema(
  {
    name: { type: String, require: true },
    city: { type: String, require: true },
    country: { type: String, require: true }
  },
  { timestamps: true }
)

module.exports = Location
