require('dotenv').config();

const axios = require("axios");
const api_key = process.env.GOOGLE_MAPS_API_KEY;
console.log(api_key);

function restaurantsLocation(userLat, userLog) {
  return axios.get(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLat},${userLog}&radius=6000&type=restaurant&keyword=burger&key=AIzaSyAg6Nm4Yu6w2hfIuI3stQZcdZMuPO0XlUM`
  );
}

function restaurantsDetails(place_id) {
  return axios.get(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=AIzaSyAg6Nm4Yu6w2hfIuI3stQZcdZMuPO0XlUM`
  )
}

module.exports = {
  restaurantsLocation,
  restaurantsDetails,
};
