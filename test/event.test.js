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

    //event registration

    it("event_register", async () => {
        const event = {
 
            "title": "Covid-199",
            "description": "deadlyvirus9",
            "image": "noimg.jpg",
            "venue": "world9",
            "date": "17/19/2019"
 
        }
 
        return Event.create(event).then((result) => {
            expect(result.title).toEqual("Covid-199")
        })
    });

    //updating the event

    it("Update event", async ()=>{
        const status = await Event.updateOne({"_id":"60f7e3d18f5f3716d4efb6f7"},{$set:{
            "title":"appleeee"
        }})
        
        expect(status.ok).toBe(1)

    })

    //deleting the event

    it("Delete event",async ()=>{
        var status = await Event.deleteOne({"_id":"60f7cae634f6625378078b06"})
        expect(status.ok).toBe(1)
    })
});