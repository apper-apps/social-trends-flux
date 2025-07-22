import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TrendChart = () => {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      const newPoints = Array.from({ length: 10 }, (_, i) => ({
        x: i * 40,
        y: 120 - Math.random() * 80,
        value: Math.floor(Math.random() * 1000) + 500
      }));
      setDataPoints(newPoints);
    }, 2000);

    // Initial data
    setDataPoints(Array.from({ length: 10 }, (_, i) => ({
      x: i * 40,
      y: 120 - Math.random() * 80,
      value: Math.floor(Math.random() * 1000) + 500
    })));

    return () => clearInterval(interval);
  }, []);

  const pathD = dataPoints.reduce((path, point, index) => {
    const command = index === 0 ? "M" : "L";
    return `${path} ${command} ${point.x} ${point.y}`;
  }, "");

  return (
    <div className="bg-dark-card rounded-lg p-4 glow-border-cyan">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-text-secondary font-medium">Real-time Trends</h4>
        <div className="text-neon-cyan font-bold text-xl">
          +25M conversations
        </div>
      </div>
      
      <div className="relative h-32">
        <svg width="100%" height="100%" className="overflow-visible">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F5FF" />
              <stop offset="100%" stopColor="#39FF14" />
            </linearGradient>
          </defs>
          
          {pathD && (
            <motion.path
              d={pathD}
              stroke="url(#lineGradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                filter: "drop-shadow(0 0 6px rgba(0, 245, 255, 0.6))"
              }}
            />
          )}
          
          {dataPoints.map((point, index) => (
            <motion.circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#00F5FF"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{
                filter: "drop-shadow(0 0 4px rgba(0, 245, 255, 0.8))"
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default TrendChart;