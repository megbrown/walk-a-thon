"use strict";

let $ = require('jquery');

let donorArr = [];

module.exports.addDonor = (userInfoObj) => {
	donorArr.push(userInfoObj);
	console.log(donorArr);
};