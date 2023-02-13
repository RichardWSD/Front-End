function findValues(n, capacity, kS, weights, values) {
  let i = n;
  let k = capacity;
  // console.log('Items that are part of the solution:');
  while (i > 0 && k > 0) {
    if (kS[i][k] !== kS[i - 1][k]) {
      console.log(
        `item${i} can be part of solution w,v: ${weights[i - 1]},${
          values[i - 1]
        }`
      );
      k -= weights[i - 1];
      i--;
    } else {
      i--;
    }
  }
}

/*
  总体思想是要求出放入第i个物品时最大价值是多少，那么先求减去该物品重量剩余重量的最大价值是多少，一直到第一个物品的价值
*/
export function knapSack(capacity, weights, values, n) {
  const kS = [];
  for (let x = 0; x <= n; x++) {
    kS[x] = [];
  }
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        kS[i][w] = 0;
      } else if (weights[i - 1] <= w) {
        const a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
        const b = kS[i - 1][w];
        kS[i][w] = a > b ? a : b; // max(a,b)
        // console.log(a + ' can be part of the solution');
      } else {
        // 当物品的重量超过约束重量时用之前该重量方案的值
        kS[i][w] = kS[i - 1][w];
      }
    }
    // console.log(kS[i].join());
  }
  // extra algorithm to find the items that are part of the solution
  findValues(n, capacity, kS, weights, values);
  return kS[n][capacity];
}
