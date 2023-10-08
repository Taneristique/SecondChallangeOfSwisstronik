# Swisstronik Developer Challenge 2

## Contract Addresses Of Challange Contract
Swisstronik : 0xa6cb0aE419915F1374f132B834a1E00ba94e412f <br>
Mumbai : 0x1d7C29a84F3472A8335ef5715770E9bDAB584ff6

## How It Works? 
By default challange contract creates a variable named number and assigns it to 7 when it is deployed for the first time to blockchain. The value of this variable can be read by calling getNumber() or modified by calling setNumber(uint256).
However, users can also access to the value of the variable in  Mumbai and Swisstronik testnets by calling the RPC method eth.getStorageAt() as an alternative to getNumber() and the scripts GetStorageOnMumbai.js and GetStorageOnSwisstronik.js do it for users.
In order to call them run following commands on terminal:<br> 
npx hardhat run  scripts/GetStorageOnMumbai.js<br> 
npx hardhat run  scripts/GetStorageOnSwisstronik.js 

## Prerequisities 
1.Metamask must be already installed for running this project.In case it is not installed,here is how to install : https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask <br>
2.Node.js and NPM must be already installed for running this project.In case it is not installed,here is how to install : https://docs.npmjs.com/downloading-and-installing-node-js-and-npm<br>
3.The project won't work if no infura api key provided, therefore user must be already registered and created a project. Here is infura documentation in case user hasn't registered yet : https://docs.infura.io/getting-started

## Installation
1.Clone this repo by running following script on your terminal:<br>
git clone "https://github.com/Taneristique/SecondChallangeOfSwisstronik.git"<br>
2.Go to repo on your computer and install dependencies by running following script on your terminal:<br>
npm install <br>
3.Rename example.env as .env<br>
4.Fill .env by benefiting your infura and metamask accounts.<br>
5.Installation is completed,you are now ready to run the scripts in this project👍


