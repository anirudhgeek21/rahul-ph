// Burger menu functionality
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  console.log('Burger menu toggled'); // Debug log to check functionality
});

// Section reveal on scroll animation
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + window.innerHeight;

  sections.forEach(section => {
    if (section.offsetTop < scrollPos) {
      section.style.opacity = '1';  // Ensure opacity is set to 1
      section.style.transform = 'translateY(0)'; // Remove any translation
    }
  });
});

// Sign Up Form Validation
const signupForm = document.getElementById('signupForm');
const formFeedback = document.getElementById('formFeedback');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Basic validation
  if (!name || !email || !password) {
    formFeedback.textContent = 'Please fill in all fields.';
    return;
  }

  if (password.length < 6) {
    formFeedback.textContent = 'Password must be at least 6 characters long.';
    return;
  }

  formFeedback.style.color = 'green';
  formFeedback.textContent = 'Sign up successful!';
});

// Function to submit the readings and display them
function submitReadings() {
  // Get values from the input fields
  const soilSensor = document.getElementById('soilSensor').value;
  const temperature = document.getElementById('temperatureInput').value;
  const humidity = document.getElementById('humidityInput').value;
  const ph = document.getElementById('phInput').value;
  const tds = document.getElementById('tdsInput').value;

  // Display the values in the respective spans
  document.getElementById('soil-sensor').textContent = soilSensor || 'No Reading';
  document.getElementById('temperature').textContent = temperature || 'No Reading';
  document.getElementById('humidity').textContent = humidity || 'No Reading';
  document.getElementById('ph').textContent = ph || 'No Reading';
  document.getElementById('tds').textContent = tds || 'No Reading';
}



// Dummy sensor readings update (could be replaced by real data)
setInterval(() => {
  document.getElementById('soil-sensor').textContent = `${Math.random() * 100} %`;
  document.getElementById('temperature').textContent = `${Math.random() * 35} °C`;
  document.getElementById('humidity').textContent = `${Math.random() * 100} %`;
  document.getElementById('ph').textContent = `${Math.random() * 14} pH`;
  document.getElementById('tds').textContent = `${Math.random() * 500} ppm`;
  console.log('Sensor readings updated'); // Debug log to check updates
}, 3000);
