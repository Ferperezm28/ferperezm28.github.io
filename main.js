let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #126154;">Desarrollo sitios web con enfoque en SEO y UX.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
