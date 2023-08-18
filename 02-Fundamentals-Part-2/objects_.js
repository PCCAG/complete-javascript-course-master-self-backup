"use strict";
//objects (similar to dict in Python but class also
function l(m) {
  console.log(m);
}

const My = {
  Age: 18,
  Name: `AAAA`,
  BirthYear: 2003,
  Family: Array("sister", "father", "mother", "wife"),
  GetAge: function () {
    return this.Age; //self
  },
};
l(typeof My); //object
l(My);
l(typeof My.Age);
l(typeof My.Family);
l(`__________________`);
My.Age = 19;
l(My.Age);
l(typeof My.GetAge); //function
l(`__________________`);
//key [] put any expression can
l(My[`Age`]);
l(My[`GetAge`]());
l(typeof My[`Age`]);
l(typeof My[`GetAge`]);
l(`__________________`);
