import sdk from "./1-initialize-sdk.js";

const vote = sdk.getVote("0x9261a0F7Fe834B67a7AE3A2977c9507d342B5e26");

const token = sdk.getToken("0xe40F87C706778aE353C06EDA2c991bD9724fB5Dc");

(async () => {
	try {
		await token.roles.grant("minter", vote.getAddress());
		console.log(
			"Successfully gave vote contract permissions to act on token contract"
		);
	} catch (error) {
		console.log(
			"failed to grant vote contract permissions on token contract",
			error
		);
		process.exit(1);
	}

	try {
		const ownedTokenBalance = await token.balanceOf(process.env.WALLET_ADDRESS);

		const ownedAmount = ownedTokenBalance.displayValue;
		const percent90 = (Number(ownedAmount) / 100) * 90;

		await token.transfer(vote.getAddress(), percent90);
		console.log(
			"✅ Successfully transferred " + percent90 + " tokens to vote contract"
		);
	} catch (error) {
		console.error("failed to transfer tokens to vote contract", error);
	}
})();
