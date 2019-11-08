
const  memoizer = (func)=>{

  if(typeof(func) !== 'function') return null;

    var cache = {};
      return function(){
        var key = JSON.stringify(arguments);
        if (cache[key]){
          return cache[key];
        }
        else{
          val = func.apply(null, arguments);
          cache[key] = val;
          return val; 
        }
    }
  }
  

  module.exports = memoizer;
  
