import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";
import { Description } from "@ethersproject/properties";

const editionDrop = sdk.getEditionDrop(
	"0x579462787F3CeAf4d18Ba261e1b50e564772e071"
);

(async () => {
	try {
		await editionDrop.createBatch([
			{
				name: "Maze DAO Card",
				description: "This NFT gives access to Character Dao",
				image: readFileSync("scripts/assets/maze.gif"),
			},
		]);

		console.log("✅ Successfully created a new NFT in the drop!");
	} catch (error) {
		console.error("failed to create the new NFT", error);
	}
})();
