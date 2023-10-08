const hre = require("hardhat");

const { Bytecode } = require("hardhat/internal/hardhat-network/stack-traces/model");
async function accessNumber(){
    const contractAddress="0xa6cb0aE419915F1374f132B834a1E00ba94e412f"
    provider = new ethers.providers.JsonRpcProvider("https://json-rpc.testnet.swisstronik.com/")
    const [signer] = await hre.ethers.getSigners();

    return ethers.utils.defaultAbiCoder.decode(['uint32'], await provider.getStorageAt(contractAddress,0));
}
const _runFunction=async()=>{console.log(await accessNumber())}
_runFunction()