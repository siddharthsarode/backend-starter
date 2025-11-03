import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const config = {
	PORT: process.env.PORT || 3000,
	NODE_ENV: process.env.NODE_ENV || "development",
	MONGO_URL: process.env.MONGO_URL,
	JWT_SECRET: process.env.JWT_SECRET,
	JWT_EXPIRES: process.env.JWT_EXPIRES || "1h",
};

export default config;
