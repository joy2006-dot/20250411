let bears = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#f4d58d'); // 修改背景颜色为 #f4d58d

  // Generate 40 bears with random positions, sizes, colors, and rotation angles
  for (let i = 0; i < 40; i++) {
    bears.push({
      x: random(width),
      y: random(height),
      size: random(30, 100),
      color: color(random(255), random(255), random(255), 50), // 透明度设为 50
      shape: int(random(3)), // 随机选择形状类型（0: 圆形, 1: 矩形, 2: 三角形）
      angle: random(TWO_PI), // 随机旋转角度
    });
  }
}

function draw() {
  background('#f4d58d'); // 修改背景颜色为 #f4d58d

  // Draw each bear
  for (let bear of bears) {
    fill(bear.color);
    noStroke();
    let size = bear.size + map(mouseX, 0, width, 20, 100);

    // 使用 push 和 pop 保存和恢复绘图状态
    push();
    translate(bear.x, bear.y); // 将原点移动到形状的位置
    rotate(bear.angle); // 旋转形状

    // 根据 shape 属性绘制不同的形状
    if (bear.shape === 0) {
      ellipse(0, 0, size); // 圆形
    } else if (bear.shape === 1) {
      rect(-size / 2, -size / 2, size, size); // 矩形
    } else if (bear.shape === 2) {
      triangle(
        0, -size / 2,
        -size / 2, size / 2,
        size / 2, size / 2
      ); // 三角形
    }

    pop(); // 恢复绘图状态
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
