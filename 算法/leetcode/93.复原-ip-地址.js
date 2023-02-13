/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let solution = [];
  function makeIP(result) {
    if (result.length >= 4) {
      if (result.join("").length === s.length) {
        const ip = result.join(".");
        if (!solution.includes(ip)) {
          solution.push(ip);
        }
      }
      return;
    }

    for (let i = 1; i <= 3; i++) {
      let newSeg = s.substr(result.join("").length, i);
      if (`${+newSeg}`.length !== newSeg.length || +newSeg > 255) {
        continue;
      }
      result.push(newSeg);
      makeIP(result);
      // 如果只想找到一个满足的ip的情况
      // if (makeIP(result)) {
      //   return true;
      // }
      // cancel
      result.pop();
    }

    // return false;
  }

  makeIP([]);
  return solution;
};
// @lc code=end
