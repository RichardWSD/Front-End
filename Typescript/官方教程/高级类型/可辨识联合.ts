// 每个接口都有 kind属性但有不同的字符串字面量类型。 kind属性称做 可辨识的特征或 标签
interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}

// 注意，目前各个接口间是没有联系的。 下面我们把它们联合到一起：
type Shape = Square | Rectangle | Circle;

// 现在我们使用可辨识联合:
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}