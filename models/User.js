const mongoose = require('../db/connection');

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
			//ret is the returned mongoose document
			transform: (_doc, ret) => {
				delete ret.password;
				return ret;
			},
		},
	}
);
module.exports = mongoose.model('User', userSchema);
