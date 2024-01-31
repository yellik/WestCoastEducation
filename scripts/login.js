async function submitForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create an object with the login data
    const loginData = { email, password };

    // Send a POST request to the JSON server
    try {
      const response = await fetch('http://your-json-server-url/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // Handle successful login (e.g., redirect to a dashboard)
        alert('Login successful! Redirecting to the dashboard...');
        // Example: Redirect to the dashboard page
        location.href = '/dashboard.html';
      } else {
        // Handle login error (e.g., show an error message)
        alert('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle other errors here
    }
  }