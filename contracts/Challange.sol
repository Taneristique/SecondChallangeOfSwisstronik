// SPDX-License-Identifier: MIT
pragma solidity >=0.8.8;

/**
 * @title  Swisstronik Second Challange
 * @author Taneristique
 * @notice This contract initializes a private uint256 variable which is equal to 7 by default.
 * This variable can be modified and read by users by calling setNumber and getNumber functions.
*/

contract Challange{
    uint256 private number;
    constructor(){
        number = 7; //The number will be 7 by default 
    }
    
    function setNumber(uint256 _number)public{
        number=_number;
    }

    function getNumber()public view  returns(uint256) {
      return number;  
    } 

}