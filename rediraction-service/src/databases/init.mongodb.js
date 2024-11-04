'use strict';
const mongoose = require('mongoose');
const { host, port, name } = require('../configs/mongodb.config');
class Database {
	constructor() {
		this.connect();
	}

	connect() {
		const connectString = `mongodb://${host}:${port}/${name}`;
		mongoose
			.connect(connectString)
			.then(() => {
				console.log(
                   'Database connection successful'
                );
			
			})
			.catch((err) => {
				console.error(
                    'Database connection error'
				);
			});
	}

	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}
		return Database.instance;
	}
}

const instanceDB = Database.getInstance();
module.exports = instanceDB;