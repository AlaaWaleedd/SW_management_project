const form = document.getElementById('authForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('errorMsg');
const toggleFormBtn = document.getElementById('toggleForm');
const formTitle = document.getElementById('formTitle');

let isLogin = true;

toggleFormBtn.addEventListener('click', () => {
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? 'Sign In' : 'Sign Up';
  toggleFormBtn.textContent = isLogin ? 'Sign In' : 'Sign Up';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email.includes('@')) {
    errorMsg.textContent = 'Invalid email: must include @ symbol';
    return;
  }

  if (isLogin) {
    if (email === 'admin@gmail.com' && password === '1234') {
      window.location.href = '/Pages/admin-dashboard.html';
    } else if (email === 'doctor@gmail.com' && password === '1234') {
      window.location.href = '/Pages/Doctor-Dashboard.html';
    } else {
      window.location.href = '/Pages/Home-Page.html';
    }
  } else {
    alert(`Signed up with ${email}`);
  }

  errorMsg.textContent = '';
  form.reset();
});
