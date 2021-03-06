
function deepClone(obj) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
      return obj;
  }
  var o = Array.isArray(obj) ? [] : {};
  for (key in obj) {
      if (Object.prototype.hasOwnProperty.call(key, obj)) {
          o[key] === typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
      }
  }
  return o;
}