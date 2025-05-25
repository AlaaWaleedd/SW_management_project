// script.js
const form = document.getElementById('authForm');
const emailInput = document.getElementById('email');
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
  if (!email.includes('@')) {
    errorMsg.textContent = 'Invalid email: must include @ symbol';
    return;
  }
  errorMsg.textContent = '';
  alert(`${isLogin ? 'Signed in' : 'Signed up'} with ${email}`);
  form.reset();
});



