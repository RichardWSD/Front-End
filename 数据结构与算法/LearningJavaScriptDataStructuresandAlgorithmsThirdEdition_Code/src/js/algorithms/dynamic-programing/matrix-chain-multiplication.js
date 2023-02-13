/*
  看视频：https://www.youtube.com/watch?v=prx1psByp7U
*/
function printOptimalParenthesis(s, i, j) {
  if (i === j) {
    console.log(`A[${i}]`);
  } else {
    console.log('(');
    printOptimalParenthesis(s, i, s[i][j]);
    printOptimalParenthesis(s, s[i][j] + 1, j);
    console.log(')');
  }
}

export function matrixChainOrder(p) {
  const n = p.length - 1;
  const m = [];
  const s = [];
  for (let x = 1; x <= n; x++) {
    m[x] = [];
    m[x][x] = 0;
  }
  for (let y = 1; y <= n; y++) {
    // to help printing the optimal solution
    s[y] = []; // auxiliary
    for (let z = 1; z <= n; z++) {
      s[y][z] = 0;
    }
  }
  for (let d = 1; d <= n; d++) {
    for (let i = 1; i <= n - d; i++) {
      const j = i + d;
      m[i][j] = Number.MAX_SAFE_INTEGER;
      for (let k = i; k < j; k++) {
        // q = cost/scalar multiplications
        const q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
        if (q < m[i][j]) {
          m[i][j] = q;
          s[i][j] = k; // s[i,j] = Second auxiliary table that stores k
        }
      }
    }
  }
  console.log(m);
  console.log(s);
  printOptimalParenthesis(s, 1, n);
  return m[1][n];
}
