import "dotenv/config";
import { say } from "cowsay";

console.log(
	say({
		text: `Je m'apelle ${process.env.NAME} du campus ${process.env.CAMPUS}!`,
		e: "oO",
		T: "U ",
	}),
);
