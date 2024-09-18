const mongoose = require("mongoose");
const initData= require("C:/Users/Omkar/Desktop/MAJORPROJECT/init/data.js");
const Listing = require("C:/Users/Omkar/Desktop/MAJORPROJECT/models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() => {
    console.log("connected to db");
})
.catch((err) => {
    console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data =  initData.data.map((obj) => ({
        ...obj, owner: '66e66b12324a61a4d40f3f9f'
    }));
    await Listing.insertMany(initData.data);
    console.log("data was inserted");
}

initDB();