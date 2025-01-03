import mongoose from 'mongoose'
const Schema = mongoose.Schema

/**
 * Item Schema
 * @constant {Schema}
 */
const itemSchema = {
  name: {
    type: String,
    unique: true,
    select: true,
    trim: true
  },
  category: {
    type: String,
    unique: false,
    select: true,
    trim: true
  },
  brandname: {
    type: String,
    unique: false,
    select: true,
    trim: true
  },
  images: {
    //can accept an array of strings
    type: [String],
    unique: false,
    select: true,
    trim: true
  },
  __v: {
    type: Number,
    select: false
  }
}

module.exports = new Schema(itemSchema)