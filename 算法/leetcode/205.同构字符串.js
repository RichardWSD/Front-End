/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/* var isIsomorphic = function(s, t) {
  if(!s || !t || s.length !== t.length) {
    return false
  }

  const map = {}
  for(let i = 0; i < s.length; i++) {
    const cur = map[s[i]]
    if(!cur) {
      map[s[i]] = t[i]
      const rCur = map[t[i]]
      if(!rCur) {
        map[t[i]] = s[i]
      } else if(map[t[i]] !== s[i]) {
        return false
      }
    }else if(cur !== t[i]) {
      return false
    }
  }
  return true
}; */

var isIsomorphic = function(s, t) {
  const s2t = {};
  const t2s = {};
  const len = s.length;
  for (let i = 0; i < len; ++i) {
      const x = s[i], y = t[i];
      if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x)) {
          return false;
      }
      s2t[x] = y;
      t2s[y] = x;
  }
  return true;
};

// @lc code=end

