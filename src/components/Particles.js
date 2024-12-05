import React, { useEffect, useRef } from 'react';

const Particles = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Track mouse movement
    const handleMouseMove = (event) => {
      mouseRef.current = {
        x: event.clientX,
        y: event.clientY
      };
    };

    // Create particle class
    class Particle {
      constructor() {
        this.reset();
        this.maxSpeed = Math.random() * 1 + 0.5;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 2; // Increased particle size
        this.speedX = (Math.random() - 0.5) * 1.2; // Slightly increased speed
        this.speedY = (Math.random() - 0.5) * 1.2;
        this.life = Math.random() * 0.5 + 0.5;
        this.opacity = Math.random() * 0.6 + 0.4; // Increased base opacity
        this.hue = Math.random() * 60 - 30;
        this.createGradient();
      }

      createGradient() {
        const isDarkMode = document.documentElement.classList.contains('dark');
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );

        // Ensure opacity is a valid number between 0 and 1
        const currentOpacity = Math.max(0, Math.min(1, this.opacity * this.life));

        if (isDarkMode) {
          gradient.addColorStop(0, `hsla(${210 + this.hue}, 100%, 70%, ${currentOpacity})`);
          gradient.addColorStop(0.5, `hsla(${210 + this.hue}, 100%, 60%, ${currentOpacity * 0.6})`);
          gradient.addColorStop(1, 'hsla(210, 100%, 50%, 0)');
        } else {
          gradient.addColorStop(0, `hsla(${190 + this.hue}, 100%, 40%, ${currentOpacity * 0.8})`);
          gradient.addColorStop(0.5, `hsla(${190 + this.hue}, 100%, 30%, ${currentOpacity * 0.6})`);
          gradient.addColorStop(1, 'hsla(190, 100%, 20%, 0)');
        }

        this.gradient = gradient;
      }

      update() {
        // Mouse interaction
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 0.02;
          const angle = Math.atan2(dy, dx);
          
          // Repel from mouse
          this.speedX -= Math.cos(angle) * force;
          this.speedY -= Math.sin(angle) * force;
        }

        // Apply speed limits
        const currentSpeed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
        if (currentSpeed > this.maxSpeed) {
          const ratio = this.maxSpeed / currentSpeed;
          this.speedX *= ratio;
          this.speedY *= ratio;
        }

        // Update position
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges with damping
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX *= -0.8;
          this.x = this.x < 0 ? 0 : canvas.width;
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY *= -0.8;
          this.y = this.y < 0 ? 0 : canvas.height;
        }

        // Update life and reset if needed
        this.life -= 0.001;
        if (this.life <= 0) {
          this.reset();
          this.life = Math.random() * 0.5 + 0.5;
        }

        this.createGradient();
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.gradient;
        ctx.fill();
      }
    }

    // Initialize particles
    const init = () => {
      particlesRef.current = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 10000); // Increased particle density
      for (let i = 0; i < numberOfParticles; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particlesRef.current.forEach((particle, index) => {
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const dx = particle.x - particlesRef.current[j].x;
          const dy = particle.y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = Math.max(0, Math.min(1, (1 - distance / 120) * 0.3 * particle.life * particlesRef.current[j].life));
            const isDarkMode = document.documentElement.classList.contains('dark');
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            
            if (isDarkMode) {
              ctx.strokeStyle = `rgba(160, 200, 255, ${opacity})`;
            } else {
              ctx.strokeStyle = `rgba(70, 130, 180, ${opacity})`;
            }
            
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Event listeners
    window.addEventListener('resize', () => {
      setCanvasSize();
      init();
    });
    window.addEventListener('mousemove', handleMouseMove);

    // Initial setup
    setCanvasSize();
    init();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default Particles;
