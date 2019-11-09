const { type }  = require('os')
const objectClone = require('./objectClone');

const arrayClone = (arr)=>{

    
    const result = arr.map((val)=>{
        if(Array.isArray(val)){
            return arrayClone(val);
        }else if(typeof val === 'object'){
            return objectClone(val);
        }else{
            return val;
        }
    })
    return result;
}
module.exports =  arrayClone;