/* To use lodash library in the project
<head>
  <script src='https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js'></script>
  <!-- Make sure that you load lodash before the file that uses it. -->
  <script src='file-that-uses-lodash.js'></script>
</head>
*/

// To implement ten methods in the lodash library
// 1. Specify the functionality of the method we are implementing
// 2. Ideate a game plan for how to implement this functionality in code
// 3. Implement our game plan
// 4. Test our code to ensure it works as expected

// create a new variable called _ that is initialized to an empty object
const _ = {
    /* clamp(number,lower,upper){
      if(number < lower){
          return lower;
      }else if(number > upper){
          return upper;
      }else{
          return number;
      }
    }, */
   clamp(number,lower,upper){
        lowerClampedValue = Math.max(number,lower);
        clampedValue = Math.min(lowerClampedValue,upper);
        return clampedValue;
    },
   inRange(number,start,end){
      if(end == undefined){
         end = start;
         start = 0
      }else{
         let temp = start;
         start = Math.min(temp,end);
         end = Math.max(temp,end);
      }
      let isInRange = (number >= start) && (number < end);
      return isInRange;
    },
    //slightly modified verion of words() : no pattern parameter,just consider space-seperated 
   words(string){
      return string.split(' ');
    },
   pad(string ,length){
      if(string.length < length){
         let diff = length - string.length;
         let paddingLength = Math.floor(diff / 2);
         let space = ' ';
         let paddedString = space.repeat(paddingLength) + string + space.repeat(paddingLength);
         if(diff % 2 == 0){
            return paddedString;
         }else{
            paddedString = paddedString.concat(space);
            return paddedString;
         }
      }else{
         return string;
      }
   },
   has(object,key){
      let hasValue = ((object.key != undefined ) && (object.hasOwnProperty(key)));
      return hasValue;
   },
   invert(object){
      let invertedObject = {};
      for (const [key, value] of Object.entries(object)) {
        Object.defineProperty(invertedObject,value,{value:key})
      }
      return invertedObject;
   },
   findKey(object,predicate){
      for(const property in object){
         let value = object[property];
         predicateReturnValue = predicate(value);
         if(predicateReturnValue){
            return property;
         }
      }
      return undefined;
   },
   /*
   drop(array,number){
      if (number == undefined){
          array.shift();
      }else{
         for(let i = number; i > 0; i--){
            array.shift();
         }
      }
      return array;
   }
   */
  drop(array,number){
     if(number == undefined){number = 1;}
     return array.slice(number);   
  },
  /*
  dropWhile(array,predicate){
   for(let i = 0; i < array.length;i++){
     if(!predicate(array[i],i,array)){
       return array.slice(i);
     }
   }
   return array;
 }
 */
   dropWhile(array,predicate){
     let dropNumber = array.findIndex((element,index)  => {
     return !predicate(element,index,array);
     });
     let droppedArray = this.drop(array,dropNumber);
     return droppedArray;
   },
   chunk(array,size){
     if(size == undefined){
     size = 1;
   }
     let arrayChunks = [];
     for(let i = 0; i < array.length;i += size){
       arrayChunk = array.slice(i,i + size);
       arrayChunks.push(arrayChunk);
     }
   return arrayChunks;
}

};
