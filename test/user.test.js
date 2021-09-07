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
    
    //creating new user

    it("register",async ()=>{
        const user = {
            
            "fullname" : "Test11111111",
            "email": "test12111@gmail.com",
            "password":"test1231114"
        }

        return User.create(user).then((result)=>{
            expect(result.fullname).toEqual("Test11111111")
        })
    });

    //updating the user

    it("Update user", async ()=>{
        const status = await User.updateOne({"_id":"60e83de830f283310c121012"},{$set:{
            "fullname":"Sakriyaaaaaaaa"
        }})
        
        expect(status.ok).toBe(1)

    })

    // deleting the user

    it("Delete user",async ()=>{
        var status = await User.deleteOne({"_id":"60e83de830f283310c121012"})
        expect(status.ok).toBe(1)
    })
});


