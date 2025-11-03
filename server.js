import app from "./src/app.js";
import config from "./src/config/config.js";
import connectToMongoDB from "./src/db/mongo.db.js";

const PORT = config.PORT || 3000;

connectToMongoDB();

app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
});
