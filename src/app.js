// import path from "path";
import express from 'express';
// import mongoose from 'mongoose';
// import { credentials } from './configs/DatabaseConfig.js';
import routes from './api/routes/ExampleRoutes.js';

const PORT = process.env.PORT || 3000;

const app = express();
// const __dirname = path.resolve();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// async function start() {
// 	try {
// 		await mongoose.connect(
// 			`mongodb+srv://${credentials.name}:${credentials.password}.../${credentials.dbName}`,
// 			{
// 				useNewUrlParser: true,
// 			},
// 		);

// 	} catch (e) {
// 		console.log(e);
// 	}
// }

app.listen(PORT, () => {
	console.log('Server is running ...');
});
