const express = require('express');
const router = express.Router();
const event = require('../models/event_model');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload')