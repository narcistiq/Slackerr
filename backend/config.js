// Mongo db connection ////////////////////////////////////
require('dotenv').config();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGO_URI;
import { userSchema } from './models/userSchema.js';
import { applicationScheme } from './models/applicationSchema.js';

mongoose.connect(mongoURI).
    catch(error => handleError(error));

const user = mongoose.model('user', userSchema)