const arr = [1, 4, 2, 7, 3, 88, 4, 5, 9];

function sorting(arr) {
  if (arr.length > 0) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i <= arr.length - 1; i--) {
    if (pivot > arr[i]) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...sorting(left), pivot, ...sorting(right)];
}

console.log(sorting(arr));
