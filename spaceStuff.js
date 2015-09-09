//notes for class
//
//constructor
function Profile(theFirstName, theLastName, theJob) { 
 this.firstName = theFirstName; 
 this.lastName = theLastName;
 this.job = theJob;

}

Profile.prototype.fullName = function () { 
  return this.firstName + ' ' + this.lastName;
}

var spaceShip = {
  color: "purple",
  launch: function () { 
     console.log("5,4,3,2,1 lift of");
  }
}
var hello = {
  howMany: 5
}
if(hello.howMany === 5)  { 
    console.log("hello world!");
}else { 
  confirm("you suck"); 
} 
var whoami = {
  name:"yonas", 
  lastName: "berhe"
}

if (whoami.length === 2 ) { 
   console.log( "hello world" ); 
}

else { 
  console.log( "b###" );
}



