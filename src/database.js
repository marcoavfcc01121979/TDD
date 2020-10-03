import mongoose from 'mongoose';
import config from 'config'

//const mongodURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/test'
const mongodbUrl = config.get('database.mongoUrl');


const connect = () => mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true
});

export default {
  connect,
  connection: mongoose.connection
};
