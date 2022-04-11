//we are creating a file that tells the controller where to find the database
require("dotenv").config();
module.exports = {
	database:'mongodb://localhost:27017/parkvilledb',
	secret: process.env.DATABASE_SECRET
}