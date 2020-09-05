// ---------------------------------------------------------- //
// ------ 🧪 Tests for custom rules in .eslintrc.js 🧪 ------- //
// -- remove any of the eslint disable lines to test rules -- //
// ---------------------------------------------------------- //

/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unreachable */

// eslint-disable-next-line prefer-const
let x = "1";

// eslint-disable-next-line no-constant-condition
while (true) {
  console.log("hi");
}

// eslint-disable-next-line no-unreachable
import React from "react";

// arrow-parens
const foo = (bar) => bar.id;

class MethodDoesNotUseThis {
  // eslint-disable-next-line class-methods-use-this
  foo() {
    const bar = "hah";
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="the-input">The input</label>
        <input id="the-input" type="text" value="hi" />
      </>
    );
  }
}

let i = 0;
// eslint-disable-next-line no-plusplus
i++;
