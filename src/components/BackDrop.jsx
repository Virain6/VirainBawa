import React, { useEffect, useRef } from "react";
import p5 from "p5";

export default function BackgroundSketch() {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let points = [];
      let textGraphics;

      function generateGrid() {
        points = [];

        let spacing;
        if (p.width <= 600) {
          spacing = 15;
        } else if (p.width <= 1400) {
          spacing = 15;
        } else {
          spacing = 25;
        }

        let textSize;
        if (p.width <= 600) {
          textSize = 150;
        } else if (p.width <= 1400) {
          textSize = 200;
        } else {
          textSize = 300;
        }

        textGraphics = p.createGraphics(p.width, p.height);
        textGraphics.pixelDensity(1);
        textGraphics.background(0);
        textGraphics.textAlign(p.CENTER, p.CENTER);
        textGraphics.textSize(textSize);
        textGraphics.fill(255);
        textGraphics.text("V.B.", p.width / 2, p.height / 2);
        textGraphics.loadPixels();

        for (let x = 0; x < p.width; x += spacing) {
          for (let y = 0; y < p.height; y += spacing) {
            const idx = 4 * (y * p.width + x);
            const brightness = textGraphics.pixels[idx];
            const isInText = brightness > 128;

            points.push({
              base: p.createVector(x, y),
              pos: p.createVector(x, y),
              inText: isInText,
            });
          }
        }
      }

      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        generateGrid();
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
        generateGrid();
      };

      p.draw = () => {
        p.clear();
        p.noStroke();

        const repulsionRadius = 100;
        const maxOffset = 20;

        for (const pt of points) {
          const d = p.dist(p.mouseX, p.mouseY, pt.pos.x, pt.pos.y);

          if (d < repulsionRadius) {
            const pushStrength = p.map(d, 0, repulsionRadius, 0.5, 0);
            const angle = p.atan2(pt.pos.y - p.mouseY, pt.pos.x - p.mouseX);

            const newX = pt.pos.x + Math.cos(angle) * pushStrength * 20;
            const newY = pt.pos.y + Math.sin(angle) * pushStrength * 20;

            const offset = p.dist(newX, newY, pt.base.x, pt.base.y);
            if (offset < maxOffset) {
              pt.pos.x = newX;
              pt.pos.y = newY;
            }
          } else {
            pt.pos.x = p.lerp(pt.pos.x, pt.base.x, 0.5);
            pt.pos.y = p.lerp(pt.pos.y, pt.base.y, 0.5);
          }

          // Always use dark mode colors
          if (pt.inText) {
            p.fill(255); // white text dots
          } else {
            p.fill(120); // gray background dots
          }

          p.circle(pt.pos.x, pt.pos.y, pt.inText ? 4 : 2);
        }
      };
    };

    const myP5 = new p5(sketch, sketchRef.current);
    return () => {
      myP5.remove();
    };
  }, []);

  return <div ref={sketchRef} className="fixed inset-0 z-0" />;
}
