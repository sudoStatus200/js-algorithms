const { type }  = require('os')
const arrayClone = require('./arrayClone');


const objectClone= (obj)=>{
    let resultObj= {};
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            if(Array.isArray(obj[key])){
                resultObj[key] = arrayClone(obj[key]);
            }else if(typeof val === 'object'){
                resultObj[key] = objectClone(obj[key]);
            }else{
                resultObj[key] = obj[key];
            }
        }
    }
return resultObj;
}




module.exports =  objectClone;