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
            
            "fullname" : "Test1111",
            "email": "test1211@gmail.com",
            "password":"test123114"
        }

        return User.create(user).then((result)=>{
            expect(result.fullname).toEqual("Test1111")
        })
    });

    //updating the user

    it("Update user", async ()=>{
        const status = await User.updateOne({"_id":"60e83de830f283310c121012"},{$set:{
            "fullname":"Sakriyaaaaaaa"
        }})
        
        expect(status.ok).toBe(1)

    })

    // deleting the user

    it("Delete user",async ()=>{
        var status = await User.deleteOne({"_id":"60e7ff14302a4748482751d5"})
        expect(status.ok).toBe(1)
    })
});


