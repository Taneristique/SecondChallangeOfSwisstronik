const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Challange", function () {
  let challange=null;
  before("Deploy",
    async function deploy(){
      const challangeContract = await((await ethers.getContractFactory("Challange"))).deploy();
      challange = challangeContract;
    }
  );
  it("Read number",async()=>{
    expect(await challange.getNumber()).equal(7n);
  });
  it("Set number to 2^256-1",async()=>{
    const boundryNumber = 2n**256n-1n;
    await challange.setNumber(boundryNumber);
    expect(await challange.getNumber()).equal(boundryNumber);
  })
});
