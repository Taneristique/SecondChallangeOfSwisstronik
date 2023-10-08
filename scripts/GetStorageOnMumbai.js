require("dotenv").config();
const ethers = require("ethers");
let provider=null;
async function accessNumber(){
    provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.infura.io/v3/${process.env.ApiKey}`);
    return ethers.utils.defaultAbiCoder.decode(['uint32'], await provider.getStorageAt("0x1d7C29a84F3472A8335ef5715770E9bDAB584ff6",0));
}
const _runFunction=async()=>{console.log(await accessNumber())}
_runFunction()