let user = { name: "John", age: 30 };
user.talk = true;
console.log( "age" in user ); // true, user.age exists
console.log( "blabla" in user );
alert("talk" in user)
// -----------------------------------------------------
/*To walk over all keys of an object, there exists a special form of the loop: for..in.*/ 

let userId = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in userId) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}