const User = require('../models/registration_model');
const mongoose = require("mongoose");

const url = 'mongodb://127.0.0.1:27017/covid_test';

beforeAll(async ()=>{
    await mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true
    });
});

afterAll(async ()=>{
    await mongoose.connection.close();
});

describe('Unit Testing', ()=>{
    it("register",async ()=>{
        const user = {
            "fullname" : "Test11",
            "email": "test12@gmail.com",
            "password":"test1234"
        }

        return User.create(user).then((result)=>{
            expect(result.fullname).toEqual("Test11")
        })
    });
});