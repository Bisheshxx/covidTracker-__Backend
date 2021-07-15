const Event = require('../models/event_model');
const mongoose = require("mongoose");
 
const url = 'mongodb://127.0.0.1:27017/event_test';
 
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});
 
afterAll(async () => {
    await mongoose.connection.close();
});
 
describe('Event Testing', () => {
    it("event_register", async () => {
        const event = {
 
            "title": "Covid-19",
            "description": "deadlyvirus",
            "image": "noimg.jpg",
            "venue": "world",
            "date": "17/11/2019"
 
        }
 
        return Event.create(event).then((result) => {
            expect(result.title).toEqual("Covid-19")
        })
    });
});