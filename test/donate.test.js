const Donate = require('../models/donate_model');
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
 
describe('Donate Testing', () => {

    //making the donation

    it("donation", async () => {
        const donate = {
 
            "event_id": "60f7e3d18f5f3716d4efb6f7",
            "email": "khadka@gmail.com",
            "donation_amount": "2000",
            "Remarks": "this is great",
           
 
        }
 
        return Donate.create(donate).then((result) => {
            expect(result.email).toEqual("khadka@gmail.com")
        })
    });

    
});