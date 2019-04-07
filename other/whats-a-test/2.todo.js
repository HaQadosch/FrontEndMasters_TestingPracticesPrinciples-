// writing an assertion library
/*

Now let's implement our own assertion library.
Create a function called `expect` that accepts an "actual"
and returns an object of assertions.

💰 I want to be able to use it like so:

> expect(actual).toBe(expected)

Then run this code with `node 2.todo`

> Make sure you're in the right directory!

 */

const { sum, subtract } = require('./math')

let result, expected

const expect = actual => ({
  toBe: expected => {
    if (actual !== expected) {
      throw new Error(`${result} is not equal to ${expected}`)
    }
  }
})

result = sum(3, 7)
expected = 10
expect(result).toBe(expected)

result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)
