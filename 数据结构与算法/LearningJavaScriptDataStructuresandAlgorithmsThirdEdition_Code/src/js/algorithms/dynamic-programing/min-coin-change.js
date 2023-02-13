/*
  总体思想是要找零n的最小硬币数，那么先找n-1的最小硬币数，一直到1的最小硬币数
  跟爬楼梯是一样的思路
*/

export function minCoinChange(coins, amount) {
  const cache = [];

  const makeChange = (value) => {
    if (!value) {
      return [];
    }
    if (cache[value]) {
      return cache[value];
    }
    // 存储的是找零value的最小硬币数
    let min = [];
    let newMin;
    let newAmount;
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      newAmount = value - coin;
      if (newAmount >= 0) {
        newMin = makeChange(newAmount);
      }
      if (
        newAmount >= 0 &&
        // 前面已经找到一个最小硬币数方案 或 第一次找到这个方案的情况
        (newMin.length < min.length - 1 || !min.length) &&
        // 确实能找到 newAmount的最小硬币数方案 或 value本身就是最小硬币数方案
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin);
        // console.log('new Min ' + min + ' for ' + amount);
      }
    }
    return (cache[value] = min);
  };
  return makeChange(amount);
}
