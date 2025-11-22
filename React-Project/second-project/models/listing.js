const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/a-person-with-a-bag-on-their-head-walking-down-a-foggy-street-X7UWW-RU_Xg",
        set: (v) => v ==="" ? "https://unsplash.com/photos/a-person-with-a-bag-on-their-head-walking-down-a-foggy-street-X7UWW-RU_Xg" : v,
    },
    timing: String,
    location: String,
    state: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;