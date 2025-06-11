import React, { useEffect, useRef } from 'react';

const FallingLeaves = ({ 
  numLeaves = 20, 
  windMaxSpeed = 12, 
  lightLeafImage = "images/leaf.svg",
  darkLeafImage = "images/leaf-night.svg", 
  isDarkMode = false
}) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    class LeafScene {
      constructor(el) {
        this.viewport = el;
        this.world = document.createElement('div');
        this.leaves = [];
        
        this.options = {
          numLeaves: numLeaves,
          wind: {
            magnitude: 1.2,
            maxSpeed: windMaxSpeed,
            duration: 300,
            start: 0,
            speed: 0
          },
        };

        this.width = this.viewport.offsetWidth;
        this.height = this.viewport.offsetHeight;
        this.timer = 0;
      }

      _resetLeaf(leaf) {
        leaf.x = this.width * 2 - Math.random() * this.width * 1.75;
        leaf.y = -10;
        leaf.z = Math.random() * 200;
        
        if (leaf.x > this.width) {
          leaf.x = this.width + 10;
          leaf.y = Math.random() * this.height / 2;
        }
        
        if (this.timer === 0) {
          leaf.y = Math.random() * this.height;
        }

        leaf.rotation.speed = Math.random() * 10;
        const randomAxis = Math.random();
        
        if (randomAxis > 0.5) {
          leaf.rotation.axis = 'X';
        } else if (randomAxis > 0.25) {
          leaf.rotation.axis = 'Y';
          leaf.rotation.x = Math.random() * 180 + 90;
        } else {
          leaf.rotation.axis = 'Z';
          leaf.rotation.x = Math.random() * 360 - 180;
          leaf.rotation.speed = Math.random() * 3;
        }

        leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
        leaf.ySpeed = Math.random() + 1.5;

        return leaf;
      }

      _updateLeaf(leaf) {
        const leafWindSpeed = this.options.wind.speed(this.timer - this.options.wind.start, leaf.y);
        const xSpeed = leafWindSpeed + leaf.xSpeedVariation;
        
        leaf.x -= xSpeed;
        leaf.y += leaf.ySpeed;
        leaf.rotation.value += leaf.rotation.speed;

        let transform = `translateX(${leaf.x}px) translateY(${leaf.y}px) translateZ(${leaf.z}px) rotate${leaf.rotation.axis}(${leaf.rotation.value}deg)`;
        
        if (leaf.rotation.axis !== 'X') {
          transform += ` rotateX(${leaf.rotation.x}deg)`;
        }

        leaf.el.style.transform = transform;
        leaf.el.style.webkitTransform = transform;
        leaf.el.style.MozTransform = transform;
        leaf.el.style.oTransform = transform;

        if (leaf.x < -10 || leaf.y > this.height + 10) {
          this._resetLeaf(leaf);
        }
      }

      _updateWind() {
        if (this.timer === 0 || this.timer > (this.options.wind.start + this.options.wind.duration)) {
          this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
          this.options.wind.duration = this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
          this.options.wind.start = this.timer;

          const screenHeight = this.height;

          this.options.wind.speed = function(t, y) {
            const a = this.magnitude / 2 * (screenHeight - 2 * y / 3) / screenHeight;
            return a * Math.sin(2 * Math.PI / this.duration * t + (3 * Math.PI / 2)) + a;
          };
        }
      }

      init() {
        for (let i = 0; i < this.options.numLeaves; i++) {
          const leaf = {
            el: document.createElement('div'),
            x: 0,
            y: 0,
            z: 0,
            rotation: {
              axis: 'X',
              value: 0,
              speed: 0,
              x: 0
            },
            xSpeedVariation: 0,
            ySpeed: 0,
            path: {
              type: 1,
              start: 0,
            },
            image: 1
          };

          // Style the leaf element
          const currentLeafImage = isDarkMode ? darkLeafImage : lightLeafImage;
          leaf.el.style.position = 'absolute';
          leaf.el.style.top = '0';
          leaf.el.style.left = '0';
          leaf.el.style.width = '20px';
          leaf.el.style.height = '20px';
          leaf.el.style.backgroundImage = `url(${currentLeafImage})`;
          leaf.el.style.backgroundRepeat = 'no-repeat';
          leaf.el.style.backgroundSize = '100%';
          leaf.el.style.transformStyle = 'preserve-3d';
          leaf.el.style.backfaceVisibility = 'visible';

          this._resetLeaf(leaf);
          this.leaves.push(leaf);
          this.world.appendChild(leaf.el);
        }

        this.world.className = 'leaf-scene';
        this.world.style.position = 'absolute';
        this.world.style.top = '0';
        this.world.style.left = '0';
        this.world.style.bottom = '0';
        this.world.style.width = '100%';
        this.world.style.transformStyle = 'preserve-3d';
        this.world.style.perspective = '400px';
        this.world.style.webkitPerspective = '400px';
        this.world.style.MozPerspective = '400px';
        this.world.style.oPerspective = '400px';

        this.viewport.appendChild(this.world);
      }

      render() {
        this._updateWind();
        for (let i = 0; i < this.leaves.length; i++) {
          this._updateLeaf(this.leaves[i]);
        }
        this.timer++;
        this.animationId = requestAnimationFrame(() => this.render());
      }

      destroy() {
        if (this.animationId) {
          cancelAnimationFrame(this.animationId);
        }
        if (this.world && this.world.parentNode) {
          this.world.parentNode.removeChild(this.world);
        }
      }

      resize() {
        this.width = this.viewport.offsetWidth;
        this.height = this.viewport.offsetHeight;
      }
    }

    const leafScene = new LeafScene(containerRef.current);
    sceneRef.current = leafScene;
    
    leafScene.init();
    leafScene.render();

    const handleResize = () => {
      leafScene.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      leafScene.destroy();
    };
  }, [numLeaves, windMaxSpeed, lightLeafImage, darkLeafImage, isDarkMode]);

  // Update leaf images when dark mode changes
  useEffect(() => {
    if (sceneRef.current && sceneRef.current.leaves) {
      const currentLeafImage = isDarkMode ? darkLeafImage : lightLeafImage;
      sceneRef.current.leaves.forEach(leaf => {
        leaf.el.style.backgroundImage = `url(${currentLeafImage})`;
      });
    }
  }, [isDarkMode, lightLeafImage, darkLeafImage]);

  return (
    <div
      ref={containerRef}
      className="falling-leaves"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Allow clicks to pass through
        overflow: 'hidden'
      }}
    />
  );
};

export default FallingLeaves;