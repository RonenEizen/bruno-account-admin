'use strict';

import mongoose from 'mongoose';

var Log = new mongoose.Schema({

});

var Role = new mongoose.Schema({

});

var Reservation = new mongoose.Schema({

});

var Order = new mongoose.Schema({

});

var FoodMenu = new mongoose.Schema({

});

var Customer = new mongoose.Schema({

});



var AccountSchema = new mongoose.Schema({
	isActive: 		{ type: Boolean, required: true },
	createdDate: 	{ type: Date, default: Date.now },
	logs: 				[Log],

	settings: 		{
		roles: 				[Role],
		businessInfo: {},
		delivery: 		{},
		reservation: 	{},
		integration: 	{},
		domain: 			{}
	},
	reservations: [Reservation],
	orders: 			[Order],
	foodMenus: 		[FoodMenu],
	customers: 		[Customer]
});



export default mongoose.model('Account', AccountSchema);
