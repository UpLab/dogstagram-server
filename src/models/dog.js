import mongoose from 'mongoose';

const dogSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    maxlength: 20,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  breed: {
    required: true,
    type: String,
    maxlength: 20,
  },
  dob: {
    required: true,
    type: String,
    maxlength: 10,
  },
  sex: {
    required: true,
    type: String,
    enum: ['male', 'female'],
  },
  status: {
    required: false,
    type: String,
    maxlength: 140,
  },
  image: {
    required: false,
    type: String,
  },
});

dogSchema.statics.create = async function ({ name, breed, dob, sex, status, image, userId }) {
  const dog = new Dog({ name, breed, dob, sex, status, image, userId });
  console.log(dog);
  dog.save();
  return dog;
};

dogSchema.methods.edit = async function ({ _id, name, breed, dob, sex, status, image }) {
  if (name) {
    this.name = name;
  }
  if (breed) {
    this.breed = breed;
  }
  if (dob) {
    this.dob = dob;
  }
  if (sex) {
    this.sex = sex;
  }
  if (status) {
    this.status = status;
  }
  if (image) {
    this.image = image;
  }
  if (status !== undefined) {
    this.status = status;
  }
  if (image !== undefined) {
    this.image = image;
  }

  const updated = await this.save();
  
  return updated;
};

const Dog = mongoose.model('dog', dogSchema);


export default Dog;
