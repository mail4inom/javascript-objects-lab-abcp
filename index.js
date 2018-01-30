var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
return Object.assign({}, object, {[key]: value});
}
<<<<<<< HEAD

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var clone = Object.assign({}, object, [key]);
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}

// var obj = { foo: 'bar' }
//
// var newObj = Object.assign({}, obj)
//
// newObj // { foo: 'bar' }
//
// delete newObj.foo // true
//
// newObj // {}
//
// obj // { foo: 'bar' }
// ```
=======
>>>>>>> aa0f78d1d8f13c21af51906cd3cbdb8a5d0c71f0
