const { type } = require('os');
const arrayClone = require('./arrayClone')
const objectClone = require('./objectClone')


const deepClone = (data)=>{


        if(Array.isArray(data)){
            return arrayClone(data);
        }else if(typeof data === 'object'){
            return objectClone(data);
        }else{
            return data;
        }

}

module.exports = deepClone;