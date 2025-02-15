// Navbar Toggle
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = ' #192452';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Copy Email Functionality
// Load Confetti Library
const loadConfetti = () => {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
  document.body.appendChild(script);
};

loadConfetti(); // Load confetti on page load

document.getElementById("copyEmailBtn").addEventListener("click", function () {
  const email = "aryan.gupta16105@gmail.com"; // Replace with your actual email
  navigator.clipboard.writeText(email).then(() => {
    let button = document.getElementById("copyEmailBtn");
    button.textContent = "Copied!";

    // Trigger Confetti Effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Reset back to "📋 Copy Email" after 2 seconds
    setTimeout(() => {
      button.textContent = "📋 Copy Email";
    }, 2000);
  }).catch((err) => {
    console.error("Failed to copy email: ", err);
  });
});


// Download Resume Functionality
document.getElementById("downloadResumeBtn").addEventListener("click", function() {
	const link = document.createElement("a");
	link.href = resumeUrl;
	link.download = "Resume.pdf"; // Set the file name
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);

	// Change button text to "✅ Done!" temporarily
	let button = document.getElementById("downloadResumeBtn");
	button.textContent = "Done!";
	
	setTimeout(() => {
		button.textContent = "Download Resume";
	}, 2000);
	
});
// Select all service items
const serviceItems = document.querySelectorAll(".service-item");

function revealServices() {
    serviceItems.forEach((item) => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;

        if (itemPosition < screenPosition) {
            item.classList.add("show");
        }
    });
}

// Run the function on scroll
window.addEventListener("scroll", revealServices);

// Initial check in case elements are already visible
revealServices();


// Select all service items

