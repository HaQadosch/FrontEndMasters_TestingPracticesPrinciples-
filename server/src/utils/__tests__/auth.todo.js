import { isPasswordAllowed, userToJSON } from '../auth'

describe(
  'isPasswordAllowed',
  _ => {
    const allowed = ['euntis5sneutd4.']
    const notAllowed = ['', 'ffffffffffff', '888888888']
    allowed.forEach(pwd => {
      test(`"${pwd}" should be allowed`, _ => {
        expect(isPasswordAllowed(pwd)).toBe(true)
      })
    })

    notAllowed.forEach(pwd => {
      test(`"${pwd}" should NOT be allowed`, _ => {
        expect(isPasswordAllowed(pwd)).toBe(false)
      })
    })
  }
)

// test('isPasswordAllowed only allows some passwords', () => {
//   // here's where I'll demo things for you :)
//   expect(isPasswordAllowed('')).toBe(false)
//   expect(isPasswordAllowed('ffffffffffff')).toBe(false)
//   expect(isPasswordAllowed('888888888')).toBe(false)
//   expect(isPasswordAllowed('euntis5sneutd4.')).toBe(true)
// })

test('userToJSON excludes secure properties', () => {
  const safeUser = {
    id: 'some-id',
    username: 'sarah'
  }
  const user = {
    ...safeUser,
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string'
  }
  const cleanedUser = userToJSON(user)
  expect(cleanedUser).toBe(safeUser)
})

/// ///// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=auth%20util&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
/// /////////////////////////////
