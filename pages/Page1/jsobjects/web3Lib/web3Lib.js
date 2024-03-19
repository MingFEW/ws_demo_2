export default {
	rpc: "https://polygon-mumbai-bor-rpc.publicnode.com",
	smartcontractAddress: "0xcAd1a06751Ad03FCDA2Ee4231b1d7223C972F34D",
	abi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"ValuesSet","type":"event"},{"inputs":[],"name":"getAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"string","name":"_name","type":"string"}],"name":"setValues","outputs":[],"stateMutability":"nonpayable","type":"function"}],
	abiStr: '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"ValuesSet","type":"event"},{"inputs":[],"name":"getAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"string","name":"_name","type":"string"}],"name":"setValues","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
	async getName() {
		const contractAddr = "0xcAd1a06751Ad03FCDA2Ee4231b1d7223C972F34D";
		
		const web3 = new Web3(web3Lib.rpc);
		const contract = new web3.eth.Contract(web3Lib.abi, contractAddr);
	
		let res = '';
		try {
				res = await contract.methods.getName().call();
		} catch(e) {
				console.log(e);
		} 
		
		return res;
	},
	async getAmount() {
		const contractAddr = "0xcAd1a06751Ad03FCDA2Ee4231b1d7223C972F34D";

		const web3 = new Web3(web3Lib.rpc);
		const contract = new web3.eth.Contract(web3Lib.abi, contractAddr);

		let res = '';
		try {
				res = await contract.methods.getAmount().call();
		} catch(e) {
				console.log(e);
		} 

		return res.toString();
	},
}