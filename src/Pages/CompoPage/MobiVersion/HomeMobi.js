import React, { useEffect, useRef, useState, useCallback } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import bgref from '../../../components/Assest_Used/textures/Bg_Shades/CubeBgAbout.png';
import Homeback from '../WordMareque/HomeMobBack';
import Aboutcard from '../WordMareque/About';
import ErrorBoundary from '../../../components/ErrorBoundary';

// Lazy load THREE.js and Vanta
let THREE;
let vantaModule;

const Home = () => {
  const vantaRef = useRef(null);
  const [homebackVisible, setHomebackVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [vantaEffect, setVantaEffect] = useState(null);

  // Check if mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Handle scroll event with throttling
  const handleScroll = useCallback(() => {
    if (window.scrollY > 10) {
      setHomebackVisible(false);
    } else {
      setHomebackVisible(true);
    }
  }, []);

  // Initialize Vanta effect
  const initVanta = useCallback(async () => {
    if (!vantaRef.current) return;

    try {
      setIsLoading(true);
      
      // Only load THREE.js and Vanta if not already loaded
      if (!window.THREE) {
        const threeModule = await import('three');
        THREE = threeModule.default || threeModule;
        window.THREE = THREE;
      }
      
      if (!vantaModule) {
        vantaModule = await import('vanta/dist/vanta.birds.min');
      }

      // Disable body scroll when Vanta is active
      if (isMobile) {
        disableBodyScroll(document.body);
      }
      
      // Initialize with mobile-optimized settings
      const effect = vantaModule.default({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: isMobile,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: isMobile ? 0.8 : 1.0,
        scaleMobile: 0.8,
        backgroundColor: 0x0,
        color1: 0xff00ff,
        color2: 0x00ffff,
        colorMode: "variance",
        birdSize: isMobile ? 0.8 : 1.0,
        speedLimit: isMobile ? 2.0 : 3.0,
        separation: isMobile ? 30.00 : 50.00,
        alignment: isMobile ? 30.00 : 40.00,
        cohesion: isMobile ? 25.00 : 35.00,
        quantity: isMobile ? 2.0 : 3.0,
        backgroundAlpha: 0.5
      });
      
      setVantaEffect(effect);
      setIsLoading(false);
      
      return effect;
    } catch (error) {
      console.error('Error initializing Vanta.js:', error);
      setIsLoading(false);
      return null;
    }
  }, [isMobile]);

  // Handle scroll events with debounce
  useEffect(() => {
    const debouncedScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    let ticking = false;
    window.addEventListener('scroll', debouncedScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [handleScroll]);

  // Initialize and clean up Vanta effect
  useEffect(() => {
    let effect;
    let mounted = true;
    
    // Only initialize if not on mobile or if mobile supports WebGL
    const init = async () => {
      if (isMobile) {
        // Check WebGL support
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
          console.warn('WebGL not supported, skipping Vanta effect');
          return;
        }
      }
      
      effect = await initVanta();
    };
    
    init();
    
    // Cleanup function
    return () => {
      mounted = false;
      if (effect && effect.destroy) {
        try {
          effect.destroy();
        } catch (e) {
          console.warn('Error cleaning up Vanta:', e);
        }
      }
      
      if (isMobile) {
        enableBodyScroll(document.body);
      }
    };
  }, [initVanta, isMobile]);

  // Fallback background style
  const backgroundStyle = {
    ...styles.home,
    backgroundImage: isLoading ? `url(${bgref})` : 'none',
    backgroundColor: '#000',
  };

  return (
    <>
      {isLoading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          transition: 'opacity 0.5s ease',
          opacity: isLoading ? 1 : 0,
          pointerEvents: 'none'
        }}>
          <div style={{ color: '#fff', fontSize: '1.2rem' }}>Loading...</div>
        </div>
      )}
      
      <section style={backgroundStyle} id="home" ref={vantaRef}>
        <div style={{
            ...styles.homebackContainer,
            opacity: homebackVisible ? 1 : 0,
            visibility: homebackVisible ? 'visible' : 'hidden',
            pointerEvents: homebackVisible ? 'auto' : 'none'
          }}>
          <Homeback />
        </div>
        <Aboutcard />
      </section>
    </>
  );
};

// Inline styles for the component
const styles = {
  home: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    zIndex: 1,
    willChange: 'transform',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    transform: 'translateZ(0)',
  },
  homebackContainer: {
    transition: 'opacity 0.5s ease, visibility 0.5s ease',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    '&.hidden': {
      opacity: 0,
      visibility: 'hidden',
    },
    '&.visible': {
      opacity: 1,
      visibility: 'visible',
    }
  }
};

// Wrap the Home component with ErrorBoundary
export default function HomeWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}
