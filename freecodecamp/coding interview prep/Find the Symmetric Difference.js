/*
Find the Symmetric Difference
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which
 are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements.
 So to evaluate an expression involving symmetric differences among three elements (A △ B △ C),
 you must complete one operation at a time. Thus,
 for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference.
The returned array must contain only unique values (no duplicates).
*/

function sym(...args) {
  const mainArray = [...args];
  let dimensionalArray = [];
  let results = [];

  for (let i = 0; i < mainArray.length; i++) {
    let s = [...new Set(mainArray[i])];
    dimensionalArray.push(s);
  }

  let newArr = dimensionalArray.flat(1);

  let sortedArr = newArr.sort((a, b) => a - b);

  let countElementsInArray = sortedArr.reduce((acc, curr) => {
    const count = acc[curr] ?? 0;
    return {
      ...acc,
      [curr]: (count || 0) + 1,
    };
  }, {});

  for (let i in countElementsInArray) {
    if (countElementsInArray[i] <= 1 || countElementsInArray[i] === 3) {
      results.push(Number(i));
    }
  }
  return results;
}
