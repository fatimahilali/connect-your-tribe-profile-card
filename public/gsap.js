/**
 * @file gsap.js
 * @description Dit script voegt een 360° draai-animatie toe aan de profielfoto met behulp van GSAP. 
 * @author Fatima el Hilali
 */

// GSAP-timeline aanmaken
const timeline = gsap.timeline();

/**
 * Voegt een eindeloze 360° draai-animatie toe aan de profielfoto.
 * De animatie draait  en blijft oneindig herhalen.
 */
timeline.to(".profile-photo", {
  rotationY: 360,  // Roteert de afbeelding 
  duration: 15,    // Duur van de rotatie 
  repeat: -1,      // Herhaalt de animatie oneindig
  ease: "linear",  // Constante snelheid zonder versnelling of vertraging
});
