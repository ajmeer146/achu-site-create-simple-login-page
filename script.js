// Simple login form interaction
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      // Basic client-side validation
      if (!email || !password) {
        alert('Please fill in all fields');
        return;
      }

      // Simple email format check
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
      }

      // Simulate login success
      alert('Login successful! Welcome back.');
      // In a real app, would submit form data to server
    });
  }
});