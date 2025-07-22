import { useEffect, useRef } from "react";

const HeroParticles = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    // Create particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.width = Math.random() * 4 + 2 + "px";
      particle.style.height = particle.style.width;
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 6 + "s";
      particle.style.animationDuration = (Math.random() * 3 + 4) + "s";
      container.appendChild(particle);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div ref={particlesRef} className="particles" />;
};

export default HeroParticles;