import sdk from "./1-initialize-sdk.js";

(async () => {
	try {
		const voteContractAddress = await sdk.deployer.deployVote({
			name: "Maze Voting DAO",
			voting_token_address: "0xe40F87C706778aE353C06EDA2c991bD9724fB5Dc",
			voting_delay_in_blocks: 0,
			voting_period_in_blocks: 6570,
			voting_quorom_fraction: 0,
			proposal_token_threshold: 0,
		});
		console.log(
			"✅ Successfully deployed vote contract, address:",
			voteContractAddress
		);
	} catch (error) {
		console.log("Failed to deploy vote contract", error);
	}
})();
