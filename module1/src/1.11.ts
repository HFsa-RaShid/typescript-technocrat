{
  // ternary operator || optional || nullish coalescing

  const age: number = 15;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("Not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log(isAdult);

  // nullish coalescing operator
  // null or undefined ===> decision making  otherwise use ternary

  // const isAuthenticated = null;
  // const result1 = isAuthenticated ?? 'Guest'
  // console.log({result1});

  const isAuthenticated = undefined;
  const result1 = isAuthenticated ?? "Guest";
  console.log({ result1 });

  type Student = {
    name: string;
    age: number;
    contact?: string;
    gender: string;
    address: {
      city: string;
      road: string;
      permanent?: string;
    };
  };

  const student1: Student = {
    name: "Hafsa",
    age: 22,
    contact: "2135436",
    gender: "female",
    address: {
      city: "Barishal",
      road: "C & B",
    },
  };

  const result = student1?.address?.permanent ?? "No Permanent Address";
  console.log({ result });
}
