# js-algorithms
Don't need to write complex function anymore to do computation. js-algorithms is trying to imlement all possible complex algorthms in javascript.

# How to use
```
npm install  @rahulmawari/js-algorithms --save

const algorithms = require('@rahulmawari/js-algorithms')
```

 **countDuplicates (Count the number of duplicate characters in a string )**
 
 
    ```
    const result = algorithms.countDuplicates("efecferfhehf")
    ```
 
 
 **editDistance (Calculate edit distance of two string using wagner fischer algorithm)**
    
    ```
    
    const result = algorithms.editDistance('aassd','ssssd')
    
    ```
**Memoizer(Use memoizer utility to cache result of a function)**
  
  ```
  const result  = algorithms.memoizer(func);
  
  ```
 
 **deepClone(fucntion that returns a deep cloned object with no reference to source object)**
 
 ```
 const result  = algorithms.deepClone(obj);
 
 ```
