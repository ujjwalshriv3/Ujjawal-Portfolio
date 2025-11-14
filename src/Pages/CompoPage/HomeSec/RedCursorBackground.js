import React, { useEffect, useRef, useCallback } from 'react';

const RedCursorBackground = () => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const rotation = useRef({ x: 0, y: 0 });
  const animationId = useRef();
  const size = 15; // Size of the cube

  // Cube vertices (3D coordinates)
  const vertices = [
    [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
    [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
  ];

  // Cube edges (pairs of vertex indices)
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 0], // back face
    [4, 5], [5, 6], [6, 7], [7, 4], // front face
    [0, 4], [1, 5], [2, 6], [3, 7]  // connecting edges
  ];

  // Project 3D point to 2D
  const project = useCallback((point3D) => {
    // Simple perspective projection
    const fov = 500;
    const scale = fov / (fov + point3D[2]);
    return [
      point3D[0] * scale,
      point3D[1] * scale
    ];
  }, []);

  // Rotate point around X and Y axes
  const rotate = useCallback((point3D, rotX, rotY) => {
    // Rotate around X axis
    let x = point3D[0];
    let y = point3D[1] * Math.cos(rotX) - point3D[2] * Math.sin(rotX);
    let z = point3D[1] * Math.sin(rotX) + point3D[2] * Math.cos(rotX);
    
    // Rotate around Y axis
    let x2 = x * Math.cos(rotY) + z * Math.sin(rotY);
    let z2 = -x * Math.sin(rotY) + z * Math.cos(rotY);
    
    return [x2, y, z2];
  }, []);

  // Draw the cube
  const drawCube = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update rotation
    rotation.current.x += 0.01;
    rotation.current.y += 0.01;
    
    // Draw edges
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 2;
    
    edges.forEach(edge => {
      const [i1, i2] = edge;
      const v1 = [...vertices[i1]];
      const v2 = [...vertices[i2]];
      
      // Apply rotation
      const rotated1 = rotate(v1, rotation.current.x, rotation.current.y);
      const rotated2 = rotate(v2, rotation.current.x, rotation.current.y);
      
      // Apply projection
      const projected1 = project(rotated1);
      const projected2 = project(rotated2);
      
      // Draw line
      ctx.beginPath();
      ctx.moveTo(
        mousePos.current.x + projected1[0] * size, 
        mousePos.current.y + projected1[1] * size
      );
      ctx.lineTo(
        mousePos.current.x + projected2[0] * size, 
        mousePos.current.y + projected2[1] * size
      );
      ctx.stroke();
    });
    
    // Continue animation
    animationId.current = requestAnimationFrame(drawCube);
  }, [project, rotate]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Mouse move handler
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Start animation
    animationId.current = requestAnimationFrame(drawCube);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, [drawCube]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        mixBlendMode: 'screen' // This makes the red color blend nicely with the background
      }}
    />
  );
};

export default RedCursorBackground;
