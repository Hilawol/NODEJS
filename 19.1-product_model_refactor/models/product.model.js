const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate(value) {
      if (!value.length > 0) {
        throw new Error('Name can not be ampty.');
      }
    }
  },
  category: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!value.length > 0) {
        throw new Error('Product category can not be ampty.');
      }
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  details: {
    description: {
      type: String,
      required: true,
      trim: true,
      min: 10,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: Number,
      required: false,
      min: 0,
      default: 0,
    },
    images: {
      type: Array,
      required: true,
      validate(value) {
        if (value.length < 2) {
          throw new Error('must include at least two images');
        }
      }
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.length != 9 || !value.startsWith("0")) {
          throw new Error('Phone number must be 10 digits and start with 0');
        }
      }
    },
    dateAdded: {
      type: Date,
      required: false,
      unique: false,
      default: Date.now()
    }
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

