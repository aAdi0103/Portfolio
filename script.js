// JavaScript for Moving and Blinking Stars Effect
        const canvas = document.getElementById('particles');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Create stars with random positions, sizes, and speeds
        function createStars() {
            const numStars = 200; // Number of stars
            const stars = [];

            for (let i = 0; i < numStars; i++) {
                const size = Math.random() * 2 + 1; // Random size for each star
                const x = Math.random() * canvas.width; // Random X position
                const y = Math.random() * canvas.height; // Random Y position
                const opacity = Math.random(); // Random opacity for initial state
                const speedX = Math.random() * 0.5 - 0.25; // Random horizontal speed
                const speedY = Math.random() * 0.5 - 0.25; // Random vertical speed
                stars.push({ x, y, size, opacity, fade: Math.random() * 0.02 + 0.01, speedX, speedY });
            }

            return stars;
        }

        // Draw the stars on the canvas
        function drawStars(stars) {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame

            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
            });
        }

        // Animate stars to create the blinking and moving effect
        function animateStars() {
            const stars = createStars();

            function updateStars() {
                stars.forEach(star => {
                    // Update opacity for blinking effect
                    star.opacity += star.fade;

                    // Reverse fade direction if the opacity exceeds bounds
                    if (star.opacity >= 1 || star.opacity <= 0) {
                        star.fade = -star.fade;
                    }

                    // Update position for moving effect
                    star.x += star.speedX;
                    star.y += star.speedY;

                    // Make stars wrap around the edges
                    if (star.x > canvas.width) star.x = 0;
                    if (star.x < 0) star.x = canvas.width;
                    if (star.y > canvas.height) star.y = 0;
                    if (star.y < 0) star.y = canvas.height;
                });

                drawStars(stars); // Redraw the stars
                requestAnimationFrame(updateStars); // Continue the animation
            }

            updateStars();
        }

        animateStars(); // Start the star animation
        const phrases = ["MERN Stack Developer", "Programmer", "DSA Enthusiast"];
    const typingText = document.getElementById("typing-text");
    const cursor = document.getElementById("cursor");

    let currentPhraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false; // Tracks if we're typing or deleting

    function typeEffect() {
        const currentPhrase = phrases[currentPhraseIndex];

        if (isDeleting) {
            // Erase the text
            typingText.textContent = currentPhrase.slice(0, charIndex--);
        } else {
            // Type the text
            typingText.textContent = currentPhrase.slice(0, charIndex++);
        }

        // Adjust typing speed
        let typingSpeed = isDeleting ? 50 : 100;

        // If the word is fully typed out
        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 1000; // Pause before deleting
            isDeleting = true;
        }

        // If the word is fully deleted
        if (isDeleting && charIndex < 0) {
            isDeleting = false;
            charIndex = 0;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to next phrase
        }

        // Call the function again after a delay
        setTimeout(typeEffect, typingSpeed);
    }

    // Blinking cursor effect
    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
    }, 500);

    // Start the typing effect
    typeEffect();

    // Get elements for skill icons and the skill details box
    const frontendSkillIcon = document.getElementById("frontendSkillIcon");
    const backendSkillIcon = document.getElementById("backendSkillIcon");
    const databaseSkillIcon = document.getElementById("databaseSkillIcon");
    const otherSkillIcon = document.getElementById("otherSkillIcon");

    const skillsDetailsBox = document.getElementById("skillsDetailsBox");
    const skillTitle = document.getElementById("skillTitle");
    const skillsContent = document.getElementById("skillsContent");

    // Skill details for each section with icons inside boxes
    const frontendSkills = ` 
        <div class="skill-box max-md:h-[5vh] max-md:p-2 bg-white text-black p-4  rounded-lg shadow-md mb-4 flex items-center gap-1 max-md:mb-1">
 <img class="w-[3vw]" src="./assets/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail-removebg-preview.png" alt="">             <p class="font-semibold">HTML5</p>
        </div>
        <div class="skill-box max-md:h-[5vh] max-md:p-2 bg-white text-black p-4 rounded-lg shadow-md mb-4 flex items-center gap-1 max-md:mb-1">
            <img class="w-[3vw]" src="./assets/png-transparent-website-web-internet-css-style-css3-technology-social-media-logos-i-flat-colorful-icon-removebg-preview.png" alt="">  
            <p class="font-semibold">CSS3</p>
        </div>
       <div class="skill-box max-md:h-[5vh] max-md:p-2 bg-white text-black p-4 rounded-lg shadow-md mb-4 flex items-center gap-2 max-md:mb-1">
    <i class="ri-javascript-fill text-3xl" style="color: #F7DF1E;"></i>
    <p class="font-semibold">JavaScript</p>
</div>

        <div class="skill-box max-md:h-[5vh] max-md:p-2 bg-white text-white p-4 rounded-lg shadow-md mb-4 flex items-center gap-1 max-md:mb-1">
                        <img class="w-[6vw]" src="./assets/reactjs_logo_icon_170805-removebg-preview.png" alt="">

            <p class="text-black font-semibold">React.js</p>
        </div>
        <div class="skill-box max-md:h-[5vh] max-md:p-2 bg-white text-black p-4 rounded-lg shadow-md mb-4 flex items-center gap-1 max-md:mb-1">
                        <img class="w-[2vw]" src="./assets/png-transparent-tailwind-css-hd-logo-removebg-preview.png" alt="">

            <p class="text-black font-semibold">Tailwind CSS</p>
        </div>
    `;
    
    const backendSkills = `
        <div class="skill-box h-[10vh] max-md:h-[5vh] max-md:p-2 bg-white text-black px-5  rounded-lg shadow-md flex items-center gap-3  max-md:mb-1">
       <img class="w-[3vw] max-md:w-[5vw]" src="./assets/png-transparent-node-js-javascript-web-server-scalable-graphics-chrome-v8-vue-js-angle-text-logo-thumbnail-removebg-preview.png" alt="">
            <p class="mb-1 font-semibold max-md:text-sm">Node.js</p>
        </div>
        <div class="skill-box h-[10vh] max-md:h-[5vh] max-md:p-2 bg-white text-black p-4 rounded-lg shadow-md mb-4 flex items-center max-md:mb-1">
            <img class="w-[4vw] max-md:w-[5vw]" src="./assets/png-transparent-mean-solution-stack-express-js-node-js-javascript-github-text-trademark-logo-thumbnail-removebg-preview.png" alt="">
            <p class="mb-1 font-semibold max-md:text-sm">Express.js</p>
        </div>
        <div class="skill-box h-[10vh] max-md:h-[5vh] max-md:p-2 bg-white text-black p-4 rounded-lg shadow-md flex items-center gap-4 max-md:gap-1 max-md:text-sm">
             <img class="w-[4vw]" src="./assets/images-removebg-preview.png" alt="">
            <p class="mb-1 font-semibold max-md:text-xs">RESTful APIs</p>
        </div>
        <div class="skill-box bg-white max-md:h-[5vh] max-md:p-2 text-black p-4 rounded-lg shadow-md mb-4 flex items-center gap-4">
                            <img class="w-[4vw]" src="./assets//1_cHpUS6AlO15e1CfMe6W-6g.png" alt="">

            <p class="font-semibold max-md:text-xs">JWT for Authentication</p>
        </div>
    `;
    
    const databaseSkills = `
        <div class="skill-box max-md:h-[5vh] max-md:p-2 bg-zinc-200 text-white p-4 rounded-lg shadow-md mb-4 flex items-center gap-4 max-md:mb-1 max-md:gap-1">
            <img class="w-[3vw]"  src="./assets/png-clipart-black-and-brown-mongo-db-logo-mongodb-logo-icons-logos-emojis-tech-companies-removebg-preview.png" alt="">
            <p class="text-black font-semibold max-md:text-sm">MongoDB (NoSQL)</p>
        </div>
        <div class="skill-box max-md:h-[5vh] max-md:p-2 bg-yellow-600 text-white p-4 rounded-lg shadow-md mb-4 max-md:mb-1 flex items-center gap-4">
                        <img class="w-[2vw]" src="./assets/3161158-removebg-preview.png" alt="">

            <p>SQL Queries</p>
        </div>
        <div class="skill-box max-md:h-[5vh] max-md:p-2 bg-blue-600 text-white p-4 rounded-lg shadow-md mb-4 flex items-center gap-4">
             <img class="w-[3vw]" src="./assets/images-removebg-preview (1).png" alt="">
            <p class="text-white font-semibold">MySQL (Relational)</p>
        </div>
        
    `;
    const otherSkills = `
        <div class="skill-box bg-white text-white p-4 rounded-lg shadow-md mb-4 flex items-center gap-2">
                            <img class="w-[5vw]" src="./assets/images__1_-removebg-preview.png" alt="">
            <p class="mb-1 font-semibold text-black">Socket.IO</p>
        </div>
        <div class="skill-box bg-yellow-600 text-white p-4 rounded-lg shadow-md mb-4 flex items-center gap-4 max-md:w-[20vw]">
                            <img class="w-[8vw] max-md:w-[16vw]" src="./assets/images__2_-removebg-preview.png" alt="">

        </div>
        <div class="skill-box bg-white text-white px-3 rounded-lg shadow-md mb-4 flex items-center gap-4 max-md:w-[16vw]">
                            <img class="w-[8vw] max-md:w-[12vw]" src="./assets/images__3_-removebg-preview.png" alt="">

        </div>
        <div class="skill-box max-md:w-[20vw] bg-white text-white px-3 py-3 rounded-lg shadow-md mb-4 flex items-center gap-4">
                            <img class="w-[8vw] max-md:w-[16vw]" src="./assets/images__4_-removebg-preview.png" alt="">

        </div>
        <div class="skill-box max-md:text-sm bg-white text-black px-3 py-3 rounded-lg shadow-md mb-4 flex items-center gap-4">
                                <img class="w-[2vw] max-md:w-[4vw]" src="./assets/9118467-removebg-preview.png" alt="">
                                    <p class="text-xs">Data Structures Algorithms</p>


        </div>
    `;

    // Function to display skill details
    function displaySkills(title, content) {
        skillTitle.innerHTML = title;
        skillsContent.innerHTML = content;
        skillsDetailsBox.classList.remove("hidden");
    }

    // Event Listeners to show skills when clicking on skill icons
    frontendSkillIcon.addEventListener("click", () => displaySkills("Frontend Skills", frontendSkills));
    backendSkillIcon.addEventListener("click", () => displaySkills("Backend Skills", backendSkills));
    databaseSkillIcon.addEventListener("click", () => displaySkills("Database Skills", databaseSkills));
    otherSkillIcon.addEventListener("click", () => displaySkills("Other Skills", otherSkills));

    // Display Backend skill details by default on page load
    window.addEventListener('load', () => {
        displaySkills("Frontend Skills", frontendSkills);
    });


  // Get buttons and project sections
// Select buttons
const frontendBtn = document.getElementById('frontendBtn');
const backendBtn = document.getElementById('backendBtn');
const fullstackBtn = document.getElementById('fullstackBtn');

// Select sections
const frontendSection = document.querySelector('#tranding\\ frontendProjects');
const backendSection = document.querySelector('#tranding\\ backendProjects');
const fullstackSection = document.querySelector('#tranding\\ fullstackprojects');

// Default visibility
frontendSection.classList.remove('hidden');
backendSection.classList.add('hidden');
fullstackSection.classList.add('hidden');

// Add event listeners to buttons
frontendBtn.addEventListener('click', () => {
    frontendSection.classList.remove('hidden');
    backendSection.classList.add('hidden');
    fullstackSection.classList.add('hidden');
});

backendBtn.addEventListener('click', () => {
    frontendSection.classList.add('hidden');
    backendSection.classList.remove('hidden');
    fullstackSection.classList.add('hidden');
});

fullstackBtn.addEventListener('click', () => {
    frontendSection.classList.add('hidden');
    backendSection.classList.add('hidden');
    fullstackSection.classList.remove('hidden');
});


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

    // Select the text element by its ID
    document.addEventListener("DOMContentLoaded", function () {
        gsap.from("#animatedText", {
          duration: 2,           // Duration of the animation (1 second)
          y: "100%",             // Start position from 100% below its container
          opacity: 0,            // Start with 0 opacity (invisible)
          ease: "power3.out" ,
          delay:2.2,    // Easing for smooth animation
        });
      });


      
var TrandingSlider = new Swiper('.tranding-slider', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	loop: true,
	slidesPerView: 'auto',
	coverflowEffect: {
	  rotate: 0,
	  stretch: 0,
	  depth: 100,
	  modifier: 2.5,
	},
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	}
  });
  
     // Automatically hide the loader after animation
// Automatically hide the loader after animation
setTimeout(() => {
    document.getElementById('loader').style.animation = 'fade-out 1s forwards';
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
    }, 1000);
  }, 2000);
  

    const main = document.getElementById("main");
    const cursorNew = document.getElementById("cursormain");
    
    // Ensure mouse coordinates align with the custom cursor
    main.addEventListener("mousemove", (e) => {
        const rect = main.getBoundingClientRect(); // Get bounding box of #main
        const mouseX = e.clientX - rect.left; // Mouse X relative to #main
        const mouseY = e.clientY - rect.top;  // Mouse Y relative to #main
          
        gsap.to(cursorNew, {
            x: mouseX - 600,  // Subtract a number, not a string
            y: mouseY,  // Subtract a number, not a string
            duration: 1, // Faster animation to reduce lag
            ease: "power3.out", // Smooth easing
        });
        
    });
    
