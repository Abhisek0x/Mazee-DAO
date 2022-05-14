import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
	try {
		const editionDropAddress = await sdk.deployer.deployEditionDrop({
			name: "Maze Game Membership Cards",
			description: "A NFT to become a Maze Game Player",
			image: readFileSync("scripts/assets/maze.gif"),
			primary_sale_recipient: AddressZero,
		});

		const editionDrop = sdk.getEditionDrop(editionDropAddress);

		const metadata = await editionDrop.metadata.get();

		console.log(
			"✅ Successfully deployed editionDrop contract, address:",
			editionDropAddress
		);
		console.log("✅ editionDrop metadata:", metadata);
	} catch (error) {
		console.log("failed to deploy edition drop contract", error);
	}
})();
