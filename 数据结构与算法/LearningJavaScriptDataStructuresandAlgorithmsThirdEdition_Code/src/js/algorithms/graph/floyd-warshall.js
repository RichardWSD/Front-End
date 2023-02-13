export const floydWarshall = graph => {
  const dist = [];
  const { length } = graph;
  for (let x = 0; x < length; x++) {
    dist[x] = [];
    for (let y = 0; y < length; y++) {
      if (x === y) {
        dist[x][y] = 0;
      } else if (!isFinite(graph[x][y])) {
        dist[x][y] = Infinity;
      } else {
        dist[x][y] = graph[x][y];
      }
    }
  }
  for (let k = 0; k < length; k++) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
};
