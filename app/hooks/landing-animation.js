import { useEffect } from 'react';
import { gsap } from 'gsap';

const useGsapAnimations = () => {
  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline();

    // Animate the H1 first
    tl.fromTo(
      '#animated-h1',
      { opacity: 0, y: -50 }, // Initial state
      { 
        opacity: 1, // End state for opacity
        y: 0, // End state for vertical position
        duration: 0.75, // Duration of the animation
        ease: 'power3.out', // Easing function
        delay: 0.25, // Delay before animation starts
      }
    );

    // Animate the Left and Right SVGs together
    tl.fromTo(
      '#left-svg',
      { opacity: 0, x: -50 }, // Initial state: invisible and off-screen to the left
      { 
        opacity: 1, // End state for opacity
        x: 0, // End state for horizontal position
        duration: 0.75, // Duration of the animation
        ease: 'power3.out', // Easing function
      },
      '-=0.5' // Start this animation 0.5 seconds before the H1 animation finishes
    )
    .fromTo(
      '#right-svg',
      { opacity: 0, x: 50 }, // Initial state: invisible and off-screen to the right
      { 
        opacity: 1, // End state for opacity
        x: 0, // End state for horizontal position
        duration: 0.75, // Duration of the animation
        ease: 'power3.out', // Easing function
      },
      '-=0.75' // Start this animation 0.75 seconds before the H1 animation finishes
    );

    // Animate the Hero Description after SVGs
    tl.fromTo(
      '#hero-description',
      { opacity: 0, y: 30 }, // Initial state (starting from below the page)
      { 
        opacity: 1, // End state
        y: 0, // End position
        duration: 0.75, // Duration of the animation
        ease: 'power3.out', // Easing function
        delay: 0.25, // Delay before animation starts
      }
    );

    // Animate the Waitlist Button last
    tl.fromTo(
      '#waitlist-btn',
      { opacity: 0, y: 30 }, // Initial state (starting from below the page)
      { 
        opacity: 1, // End state
        y: 0, // End position
        duration: 0.75, // Duration of the animation
        ease: 'power3.out', // Easing function
        delay: 0.25, // Delay before animation starts
      }
    );

  }, []);
};

export default useGsapAnimations;
