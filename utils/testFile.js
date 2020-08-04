"use strict";

function f4() {
  console.log(this.a);
}

let obj1 = {
  a: 1,
  f4: f4,
};

let obj2 = {
  a: 2,
  obj1: obj1,
};

let obj3 = {
  a: 3,
  f4: obj1.f4,
};

obj1.f4();
