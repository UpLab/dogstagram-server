import mongoose from 'mongoose';

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const dog = mongoose.model('dog', dogSchema);

export default dog;