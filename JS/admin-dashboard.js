// admin-script.js

// Simulated data
const userCount = 148;
const appointmentCount = 63;
const onlineDoctors = 9;
const recentActivity = [
  "User JohnDoe booked an appointment",
  "Admin updated doctor availability",
  "New user registered: mary_lee@example.com",
  "Appointment with Dr. Smith completed",
];

document.getElementById("userCount").textContent = userCount;
document.getElementById("appointmentCount").textContent = appointmentCount;
document.getElementById("onlineDoctors").textContent = onlineDoctors;

const activityLog = document.getElementById("activityLog");
recentActivity.forEach(activity => {
  const li = document.createElement("li");
  li.textContent = activity;
  activityLog.appendChild(li);
});
document.getElementById("logoutBtn").addEventListener("click", () => {
  window.location.href = "/Pages/Home-Page.html"; // Adjust the path as needed
});

