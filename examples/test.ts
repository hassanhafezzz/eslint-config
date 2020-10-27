// ---------------------------------------------------------- //
// ------ 🧪 Tests for custom rules in .eslintrc.js 🧪 ------- //
// -- remove any of the eslint disable lines to test rules -- //
// ---------------------------------------------------------- //

type User = {
  name: string;
  age: number;
};

const user: User = { name: "hassan" };

// eslint-disable-next-line prefer-const
let x = "1";

// eslint-disable-next-line no-constant-condition
while (true) {
  console.log("hi");
}

let i = 0;
// eslint-disable-next-line no-plusplus
i++;
