import sdk from "./1-initialize-sdk.js";
const token = sdk.getToken("0xe40F87C706778aE353C06EDA2c991bD9724fB5Dc");

(async () => {
	try {
		const amount = 1000000;

		await token.mint(amount);
		const totalSupply = await token.totalSupply();

		console.log(
			"✅ There now is",
			totalSupply.displayValue,
			"$MAZEEE in circulation"
		);
	} catch (error) {
		console.log("failed to initialise token", error);
	}
})();
