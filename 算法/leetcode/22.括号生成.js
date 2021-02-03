/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let p = ['(', ')'];
  let pb = [n, n];
  let res = [];
  dfs(n, p, pb, '', res);
  return res;
};

function dfs(n, p, pb, str, res) {
  //截至条件
  if (str.length === 2 * n) {
    res.push(str);
    return;
  }

  //候选节点
  if (pb[0] > 0) {
    pb[0]--;
    dfs(n, p, pb, str + p[0], res);
    pb[0]++;
  }

  if (pb[1] > 0 && pb[0] !== pb[1]) {
    pb[1]--;
    dfs(n, p, pb, str + p[1], res);
    pb[1]++;
  }
}
// @lc code=end