import express from 'express';
import 'dotenv/config'; //Connects to the .env file
import helmet from "helmet"; //Sets headers like CORS policy and certain security settings 
const app = express();
const port = process.env.PORT;
app.use(helmet());

app.get('/', (req, res) => {
	res.send('GeeksforGeeks');
})

app.listen(port, () => {
	console.log(`Running on PORT ${port}`);
})
