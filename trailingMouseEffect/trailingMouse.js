function createTrailElement(x, y) {
    const trail = document.createElement('section');
    trail.classList.add('trail');
    // Subtract the offset from the y position
    trail.style.left = (x - 5) + 'px'; // Center the trail on the cursor
    trail.style.top = (y - 5 ) + 'px'; // Adjust for the vertical offset
    document.body.appendChild(trail);
  
    // Apply the rotation animation
    trail.style.animation = 'rotate 0.5s linear forwards';
  
    // Fade out the trail element after a short delay
    setTimeout(() => {
      trail.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(trail);
      }, 200); // Match the duration of the opacity transition
    }, 300); // Start fading out after 300ms
  }
  
  // Event listener for mouse movement
  document.addEventListener('mousemove', (e) => {
    createTrailElement(e.pageX, e.pageY);
  });
  