const arr = [1, 4, 2, 7, 3, 88, 4, 5, 9];

function sorting(arr) {
  if (arr.length === 0) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...sorting(left), pivot, ...sorting(right)];
}

console.log(sorting(arr));
