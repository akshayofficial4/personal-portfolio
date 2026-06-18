"use client";

import Particles from "./Particles";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        particleColors={["#ffffff", "#f97316"]}
        particleCount={80}
        particleSpread={8}
        speed={0.1}
        particleBaseSize={80}
        moveParticlesOnHover={false}
        alphaParticles
      />
    </div>
  );
};

export default Background;
