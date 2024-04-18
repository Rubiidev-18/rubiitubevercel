const user = {
  name: "ajay",
  printname: function () {
    console.log(this.name);
  },
};

// console.log({ ...user, name: "patil" });

const newUser = {
  name: "pawar",
};

user.printname.call(newUser)
