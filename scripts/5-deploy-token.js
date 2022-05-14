import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

(async () => {
	try {
		const tokenAddress = await sdk.deployer.deployToken({
			name: "MazeDAO Governanace Token",
			symbol: "MAZEE",
			primary_sale_recipient: AddressZero,
		});
		console.log(
			"✅ Successfully deployed token module, address:",
			tokenAddress
		);
	} catch (error) {
		console.log("failed to deploy token module", error);
	}
})();
