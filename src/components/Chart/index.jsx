import { useRef, useEffect, useCallback } from "react";
import Chart from "chart.js/auto/auto.esm";
import "./index.css";

const StatsChart = ({
  type = "bar",
  width = "400px",
  height = "400px",
  data = {},
  options = {}
}) => {
  const containerRef = useRef();
  let chart = useRef(null);

  const createCanvas = useCallback((container) => {
    let canvas = container.querySelector("canvas");
    if (canvas) {
      return canvas;
    }

    canvas = document.createElement("canvas");
    canvas.id = "chart";
    container.appendChild(canvas);
    return canvas;
  }, []);

  useEffect(() => {
    const context = createCanvas(containerRef.current).getContext("2d");
    if (chart.current) chart.current.destroy();

    chart.current = new Chart(context, {
      type,
      data,
      options
    });
  }, [type, data, options, createCanvas]);

  return (
    <div
      style={{ height, width }}
      className="canvas-container"
      ref={containerRef}
    ></div>
  );
};

export default StatsChart;
