export default {
	rpc: "https://polygon-mumbai-bor-rpc.publicnode.com",
	smartcontractAddress: "0xcAd1a06751Ad03FCDA2Ee4231b1d7223C972F34D",
	abi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"ValuesSet","type":"event"},{"inputs":[],"name":"getAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"string","name":"_name","type":"string"}],"name":"setValues","outputs":[],"stateMutability":"nonpayable","type":"function"}],
	abiStr: '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"ValuesSet","type":"event"},{"inputs":[],"name":"getAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"string","name":"_name","type":"string"}],"name":"setValues","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
	async writeSC () {
		const web3 = new Web3(web3Lib.rpc);
		const abi = web3Lib.abi;
		const addr = web3Lib.smartcontractAddress;

		const contract = new web3.eth.Contract(abi, addr);
		const account = Wallet1.wAddress;
					
		// if (!account) return;
		console.log("account", account)
		try {
			await contract.methods.setValues(23000000, "NEW M3").send({ from: "0x4de1D0f26E7C367C9523D6dD4D4f0e2322712412" })
																				.on('transactionHash', function(hash){
   																				console.log(hash)
																				});
			return 'done';
		} catch(e) {
			console.log(e);
			return e;
		}
	}
}