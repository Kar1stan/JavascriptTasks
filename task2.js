/**
 * Sort Users by quantity of their friends (listed in `friends` property).
 *
 * Input example:
 *   - Users:
 *    [
 *      { id: 1, name: 'John', friends: ['Mark', 'Dany'] },
 *      { id: 2, name: 'Ann', friends: [] },
 *      { id: 3, name: 'Mary', friends: ['Jay', 'Jack', 'Bobby'] },
 *      { id: 4, name: 'Illay', friends: ['Jay', 'Dany'] },
 *    ]
 *
 * Output example:
 *   [
 *      { id: 3, name: 'Mary', friends: ['Jay', 'Jack', 'Bobby'] },
 *      { id: 1, name: 'John', friends: ['Mark', 'Dany'] },
 *      { id: 4, name: 'Illay', friends: ['Jay', 'Dany'] },
 *      { id: 2, name: 'Ann', friends: [] },
 *    ]
 */
const sortUsersByFriendsQuantity = (users) => {
  //sort by higher to lower friends
  let res = users.sort((a, b) => b.friends.length - a.friends.length);
  //switch a to b if you want from lower to higher friends order
  return res;
};
  
  test("Verify users sorted by friends quantity", () => {
    // Input
    const users = [
      { id: 1, name: "Moore Hensley", friends: ["Sharron Pace"] },
      {
        id: 2,
        name: "Sharlene Bush",
        friends: ["Briana Decker", "Sharron Pace"],
      },
      {
        id: 3,
        name: "Ross Vazquez",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      },
      { id: 4, name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"] },
      { id: 5, name: "Carey Barr", friends: ["Jordan Sampson", "Eddie Strong"] },
      {
        id: 6,
        name: "Blackburn Dotson",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
      },
      {
        id: 7,
        name: "Sheree Anthony",
        friends: ["Goldie Gentry", "Briana Decker"],
      },
    ];
  
    const usersSortedByFriendsQuantity = sortUsersByFriendsQuantity(users);
  
    // Expected output
    const expectedOutput = [
      {
        id: 3,
        name: "Ross Vazquez",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      },
      {
        id: 2,
        name: "Sharlene Bush",
        friends: ["Briana Decker", "Sharron Pace"],
      },
      { id: 4, name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"] },
      { id: 5, name: "Carey Barr", friends: ["Jordan Sampson", "Eddie Strong"] },
      {
        id: 6,
        name: "Blackburn Dotson",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
      },
      {
        id: 7,
        name: "Sheree Anthony",
        friends: ["Goldie Gentry", "Briana Decker"],
      },
      { id: 1, name: "Moore Hensley", friends: ["Sharron Pace"] },
    ];
  
    expect(usersSortedByFriendsQuantity).toEqual(expectedOutput);
  });
  