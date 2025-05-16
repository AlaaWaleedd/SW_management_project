// Global variables to store user selections
let selectedDepartment = '';
let selectedDoctor = '';
let selectedDate = '';
let selectedTime = '';
let patientFirstName = '';
let patientLastName = '';
let patientEmail = '';
let patientPhone = '';

// Departments list
const departments = [
  "Dermatology",
  "Cardiology",
  "Neurology",
  "General Surgery",
  "Gastroenterology",
  "Ophthalmology",
  "Hematology",
  "Orthopedics",
  "Pediatrics",
  "Endocrinology",
];

// Doctors list with specialties
const doctors = [
  // Dermatology
  { name: "Dr. Sarah Ahmed", specialty: "Dermatology", rating: 4.9, years: 10, patients: 1000, availability: "Available Today" },
  { name: "Dr. Mohamed Saleh", specialty: "Dermatology", rating: 4.7, years: 8, patients: 850, availability: "Available Tomorrow" },
  { name: "Dr. Aisha Nabil", specialty: "Dermatology", rating: 4.8, years: 12, patients: 1200, availability: "Available Today" },
  { name: "Dr. Omar Khalid", specialty: "Dermatology", rating: 4.5, years: 7, patients: 900, availability: "Available Today" },
  { name: "Dr. Lina Samir", specialty: "Dermatology", rating: 4.6, years: 9, patients: 950, availability: "Available Tomorrow" },
  { name: "Dr. Youssef Tarek", specialty: "Dermatology", rating: 4.4, years: 6, patients: 800, availability: "Available Today" },

  // Cardiology
  { name: "Dr. Wael Mohamed", specialty: "Cardiology", rating: 4.7, years: 8, patients: 850, availability: "Available Today" },
  { name: "Dr. Huda Faris", specialty: "Cardiology", rating: 4.9, years: 11, patients: 1100, availability: "Available Tomorrow" },
  { name: "Dr. Samir Hasan", specialty: "Cardiology", rating: 4.6, years: 7, patients: 900, availability: "Available Today" },
  { name: "Dr. Amal Nasser", specialty: "Cardiology", rating: 4.8, years: 10, patients: 1200, availability: "Available Today" },
  { name: "Dr. Tariq Fadi", specialty: "Cardiology", rating: 4.5, years: 6, patients: 780, availability: "Available Tomorrow" },
  { name: "Dr. Rania Zaki", specialty: "Cardiology", rating: 4.7, years: 9, patients: 950, availability: "Available Today" },

  // Neurology
  { name: "Dr. Hassan Ali", specialty: "Neurology", rating: 4.6, years: 5, patients: 850, availability: "Available Today" },
  { name: "Dr. Samar Fahad", specialty: "Neurology", rating: 4.8, years: 12, patients: 1200, availability: "Available Tomorrow" },
  { name: "Dr. Khaled Mahmoud", specialty: "Neurology", rating: 4.7, years: 9, patients: 950, availability: "Available Today" },
  { name: "Dr. Laila Hani", specialty: "Neurology", rating: 4.9, years: 15, patients: 1300, availability: "Available Today" },
  { name: "Dr. Jamal Adel", specialty: "Neurology", rating: 4.5, years: 7, patients: 800, availability: "Available Tomorrow" },
  { name: "Dr. Nour Salim", specialty: "Neurology", rating: 4.6, years: 8, patients: 850, availability: "Available Today" },

  // General Surgery
  { name: "Dr. Layla Al-Sabah", specialty: "General Surgery", rating: 4.6, years: 9, patients: 850, availability: "Available Today" },
  { name: "Dr. Adel Youssef", specialty: "General Surgery", rating: 4.7, years: 11, patients: 1100, availability: "Available Tomorrow" },
  { name: "Dr. Rami Sami", specialty: "General Surgery", rating: 4.5, years: 8, patients: 900, availability: "Available Today" },
  { name: "Dr. Maha Khalil", specialty: "General Surgery", rating: 4.8, years: 13, patients: 1200, availability: "Available Today" },
  { name: "Dr. Tariq Omar", specialty: "General Surgery", rating: 4.6, years: 10, patients: 950, availability: "Available Tomorrow" },
  { name: "Dr. Dina Fawzi", specialty: "General Surgery", rating: 4.4, years: 7, patients: 800, availability: "Available Today" },

  // Gastroenterology
  { name: "Dr. Omar Khalid", specialty: "Gastroenterology", rating: 4.5, years: 8, patients: 780, availability: "Available Tomorrow" },
  { name: "Dr. Sana Hasan", specialty: "Gastroenterology", rating: 4.7, years: 12, patients: 1100, availability: "Available Today" },
  { name: "Dr. Nabil Saeed", specialty: "Gastroenterology", rating: 4.6, years: 10, patients: 900, availability: "Available Today" },
  { name: "Dr. Amal Naji", specialty: "Gastroenterology", rating: 4.8, years: 14, patients: 1200, availability: "Available Tomorrow" },
  { name: "Dr. Hassan Tariq", specialty: "Gastroenterology", rating: 4.5, years: 7, patients: 850, availability: "Available Today" },
  { name: "Dr. Yara Amin", specialty: "Gastroenterology", rating: 4.6, years: 9, patients: 900, availability: "Available Today" },

  // Ophthalmology
  { name: "Dr. Hana Zahran", specialty: "Ophthalmology", rating: 4.7, years: 11, patients: 920, availability: "Available Today" },
  { name: "Dr. Samah Ali", specialty: "Ophthalmology", rating: 4.8, years: 13, patients: 1000, availability: "Available Tomorrow" },
  { name: "Dr. Khalil Youssef", specialty: "Ophthalmology", rating: 4.5, years: 8, patients: 850, availability: "Available Today" },
  { name: "Dr. Dalia Kamal", specialty: "Ophthalmology", rating: 4.6, years: 10, patients: 900, availability: "Available Today" },
  { name: "Dr. Rasha Nader", specialty: "Ophthalmology", rating: 4.7, years: 12, patients: 950, availability: "Available Tomorrow" },
  { name: "Dr. Jamila Fathi", specialty: "Ophthalmology", rating: 4.4, years: 7, patients: 800, availability: "Available Today" },

  // Hematology
  { name: "Dr. Sami Rashid", specialty: "Hematology", rating: 4.8, years: 14, patients: 1000, availability: "Available Today" },
  { name: "Dr. Noura Hassan", specialty: "Hematology", rating: 4.7, years: 12, patients: 950, availability: "Available Tomorrow" },
  { name: "Dr. Omar Khalid", specialty: "Hematology", rating: 4.6, years: 10, patients: 900, availability: "Available Today" },
  { name: "Dr. Salma Farouk", specialty: "Hematology", rating: 4.5, years: 8, patients: 850, availability: "Available Today" },
  { name: "Dr. Fadi Nasser", specialty: "Hematology", rating: 4.7, years: 11, patients: 920, availability: "Available Tomorrow" },
  { name: "Dr. Layla Adel", specialty: "Hematology", rating: 4.6, years: 9, patients: 870, availability: "Available Today" },

  // Orthopedics
  { name: "Dr. Youssef Kamal", specialty: "Orthopedics", rating: 4.7, years: 13, patients: 1100, availability: "Available Today" },
  { name: "Dr. Dalia Saeed", specialty: "Orthopedics", rating: 4.8, years: 15, patients: 1200, availability: "Available Tomorrow" },
  { name: "Dr. Omar Fahd", specialty: "Orthopedics", rating: 4.5, years: 9, patients: 900, availability: "Available Today" },
  { name: "Dr. Rania Youssef", specialty: "Orthopedics", rating: 4.6, years: 11, patients: 950, availability: "Available Today" },
  { name: "Dr. Sami Nabil", specialty: "Orthopedics", rating: 4.4, years: 8, patients: 850, availability: "Available Tomorrow" },
  { name: "Dr. Salma Adel", specialty: "Orthopedics", rating: 4.7, years: 10, patients: 920, availability: "Available Today" },

  // Pediatrics
  { name: "Dr. Lina Mahmoud", specialty: "Pediatrics", rating: 4.9, years: 12, patients: 1150, availability: "Available Today" },
  { name: "Dr. Omar Sami", specialty: "Pediatrics", rating: 4.8, years: 10, patients: 1100, availability: "Available Tomorrow" },
  { name: "Dr. Fatima Ali", specialty: "Pediatrics", rating: 4.7, years: 9, patients: 1050, availability: "Available Today" },
  { name: "Dr. Khalid Nasser", specialty: "Pediatrics", rating: 4.6, years: 7, patients: 900, availability: "Available Today" },
  { name: "Dr. Sarah Youssef", specialty: "Pediatrics", rating: 4.5, years: 8, patients: 880, availability: "Available Tomorrow" },
  { name: "Dr. Jamila Fathi", specialty: "Pediatrics", rating: 4.7, years: 11, patients: 1000, availability: "Available Today" },

  // Endocrinology
  { name: "Dr. Nabil Hassan", specialty: "Endocrinology", rating: 4.7, years: 13, patients: 1100, availability: "Available Today" },
  { name: "Dr. Amal Fawzi", specialty: "Endocrinology", rating: 4.6, years: 12, patients: 1080, availability: "Available Tomorrow" },
  { name: "Dr. Omar Khalid", specialty: "Endocrinology", rating: 4.5, years: 10, patients: 900, availability: "Available Today" },
  { name: "Dr. Layla Sami", specialty: "Endocrinology", rating: 4.8, years: 15, patients: 1200, availability: "Available Today" },
  { name: "Dr. Tariq Nasser", specialty: "Endocrinology", rating: 4.4, years: 9, patients: 850, availability: "Available Tomorrow" },
  { name: "Dr. Sana Adel", specialty: "Endocrinology", rating: 4.6, years: 11, patients: 950, availability: "Available Today" },
];

// Function to generate Department selection cards dynamically
function generateDepartmentCards() {
  return departments.map((dept, index) => {
    const id = `dept-${index}`;
    return `
      <div class="radio-card">
        <input type="radio" name="service" id="${id}" value="${dept}">
        <label for="${id}">
          <div class="radio-card-text">${dept}</div>
        </label>
      </div>
    `;
  }).join('');
}

// Bind event listeners for department radios and update selectedDepartment
function bindDepartmentEvents() {
  document.querySelectorAll('input[name="service"]').forEach(radio => {
    radio.addEventListener('change', function () {
      selectedDepartment = this.value;
      console.log("Selected department:", selectedDepartment);
    });
  });
}

// Generate calendar grid HTML (Step 2)
function generateCalendarGrid() {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const availabilityLevels = ["high", "medium", "low"];
  let grid = '';
  weekdays.forEach(day => {
    grid += `<div class="calendar-weekday">${day}</div>`;
  });
  // Previous month's disabled days
  for (let day = 27; day <= 30; day++) {
    grid += `<div class="calendar-day disabled">${day}</div>`;
  }
  // Current month days
  for (let day = 1; day <= 31; day++) {
    const level = availabilityLevels[Math.floor(Math.random() * 3)];
    const selected = day === 10 ? "selected" : "";
    grid += `
      <div class="calendar-day available ${selected}">${day}
        <span class="availability-dot ${level}"></span>
      </div>
    `;
  }
  return grid;
}

// Generate time slots HTML (Step 2)
function generateTimeSlots() {
  const slots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
  ];
  const bookedSlots = ["09:00 AM", "09:30 AM", "12:00 PM", "12:30 PM", "03:00 PM"];
  const selectedSlot = "11:00 AM";

  return slots.map(slot => {
    let cls = "time-slot";
    if (bookedSlots.includes(slot)) cls += " booked";
    if (slot === selectedSlot) cls += " selected";
    return `<div class="${cls}">${slot}</div>`;
  }).join('');
}

// Bind calendar day click events and update selectedDate
function bindCalendarEvents() {
  document.querySelectorAll('.calendar-day').forEach(day => {
    if (!day.classList.contains('disabled')) {
      day.addEventListener('click', function () {
        document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
        this.classList.add('selected');
        selectedDate = this.textContent.trim();
        console.log("Selected date:", selectedDate);
      });
    }
  });

  // Bind time slot click events and update selectedTime
  document.querySelectorAll('.time-slot').forEach(slot => {
    if (!slot.classList.contains('booked')) {
      slot.addEventListener('click', function () {
        document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
        this.classList.add('selected');
        selectedTime = this.textContent.trim();
        console.log("Selected time:", selectedTime);
      });
    }
  });
}

// Render doctor cards filtered by selectedDepartment
function renderDoctorsForDepartment() {
  const container = document.getElementById('step3');
  const filtered = doctors.filter(doc => doc.specialty === selectedDepartment);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="form-section">
        <h3>Select a Doctor</h3>
        <p>No doctors available for ${selectedDepartment} at the moment.</p>
      </div>
      <div class="form-buttons">
        <button class="btn btn-outline btn-lg" onclick="showStep(2)">Back</button>
      </div>
    `;
    return;
  }

  const doctorCards = filtered.map(doc => `
    <div class="doctor-card">
      <div class="doctor-card-content">
        <div class="doctor-availability available">${doc.availability}</div>
        <div class="doctor-name">${doc.name}</div>
        <div class="doctor-specialty">${doc.specialty}</div>
        <div class="doctor-rating">
          <div class="doctor-rating-stars">${'★'.repeat(Math.floor(doc.rating))}${doc.rating % 1 >= 0.5 ? '½' : ''}</div>
          <div class="doctor-rating-number">${doc.rating.toFixed(1)}</div>
        </div>
        <div class="doctor-details">
          <div class="doctor-detail"><span>📅</span> ${doc.years}+ years</div>
          <div class="doctor-detail"><span>👨‍👩‍👧‍👦</span> ${doc.patients}+ patients</div>
        </div>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="form-section">
      <h3>Select a Doctor (${selectedDepartment})</h3>
      <div class="doctor-cards">${doctorCards}</div>
    </div>
    <div class="form-buttons">
      <button class="btn btn-outline btn-lg" onclick="showStep(2)">Back</button>
      <button class="btn btn-primary btn-lg" onclick="showStep(4)">Continue</button>
    </div>
  `;

  bindDoctorCardEvents();
}

// Bind click events to doctor cards and update selectedDoctor
function bindDoctorCardEvents() {
  document.querySelectorAll('.doctor-card').forEach(card => {
    card.addEventListener('click', function () {
      document.querySelectorAll('.doctor-card').forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
      selectedDoctor = this.querySelector('.doctor-name').textContent;
      console.log("Selected doctor:", selectedDoctor);
    });
  });
}

// Render Step 1: Department selection dynamically
function renderDepartmentStep() {
  const step1 = document.getElementById('step1');
  step1.innerHTML = `
    <div class="form-section">
      <h3>Select a Department</h3>
      <div class="radio-group">
        ${generateDepartmentCards()}
      </div>
    </div>
    <div class="form-buttons">
      <div></div>
      <button class="btn btn-primary btn-lg" onclick="showStep(2)">Continue</button>
    </div>
  `;
  bindDepartmentEvents();
}

// Render Step 2: Date and Time selection dynamically
function renderStep2() {
  const step2 = document.getElementById('step2');
  const month = "May 2025";

  step2.innerHTML = `
    <div class="form-section">
      <h3>Select Date</h3>
      <div class="calendar-container">
        <div class="calendar-header">
          <div class="calendar-month">${month}</div>
          <div class="calendar-nav">
            <button class="calendar-nav-btn">←</button>
            <button class="calendar-nav-btn">→</button>
          </div>
        </div>
        <div class="calendar-grid">
          ${generateCalendarGrid()}
        </div>
      </div>
    </div>

    <div class="form-section">
      <h3>Select Time</h3>
      <div class="time-slots">
        ${generateTimeSlots()}
      </div>
    </div>

    <div class="form-buttons">
      <button class="btn btn-outline btn-lg" onclick="showStep(1)">Back</button>
      <button class="btn btn-primary btn-lg" onclick="showStep(3)">Continue</button>
    </div>
  `;

  bindCalendarEvents();
}

// Render Step 5: Confirmation summary dynamically
function renderConfirmationSummary() {
  const step5 = document.getElementById('step5');

  // Capture patient info from inputs
  patientFirstName = document.getElementById('first-name').value.trim();
  patientLastName = document.getElementById('last-name').value.trim();
  patientEmail = document.getElementById('email').value.trim();
  patientPhone = document.getElementById('phone').value.trim();

  const fullName = `${patientFirstName} ${patientLastName}`;
  const formattedDate = `May ${selectedDate}, 2025`;

  step5.innerHTML = `
  <div class="form-section">
    <div class="summary-header">
      <h3>Appointment Summary</h3>
      <p>Please review your appointment details</p>
    </div>

    <div class="booking-summary">
      <div class="summary-items">
        <div class="summary-item">
          <div class="summary-label">Department:</div>
          <div class="summary-value">${selectedDepartment}</div>
        </div>
        <div class="summary-item">
          <div class="summary-label">Doctor:</div>
          <div class="summary-value">${selectedDoctor}</div>
        </div>
        <div class="summary-item">
          <div class="summary-label">Date:</div>
          <div class="summary-value">May ${selectedDate}, 2025</div>
        </div>
        <div class="summary-item">
          <div class="summary-label">Time:</div>
          <div class="summary-value">${selectedTime}</div>
        </div>
        <div class="summary-item">
          <div class="summary-label">Patient:</div>
          <div class="summary-value">${patientFirstName} ${patientLastName}</div>
        </div>
        <div class="summary-item">
          <div class="summary-label">Contact:</div>
          <div class="summary-value">${patientEmail}<br>${patientPhone}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="form-buttons">
    <button class="btn btn-outline btn-lg" onclick="showStep(4)">Back</button>
    <button class="btn btn-primary btn-lg" onclick="confirmBooking()">Confirm Booking</button>
  </div>
`;

}

// Main showStep function to switch between steps and trigger rendering
function showStep(step) {
  // Hide all steps
  document.querySelectorAll('.booking-form').forEach(form => form.classList.remove('active'));

  // Show the selected step
  const stepEl = document.getElementById('step' + step);
  stepEl.classList.add('active');

  // Update progress bar
  document.querySelectorAll('.progress-step').forEach((progressStep, index) => {
    if (index + 1 < step) {
      progressStep.classList.add('completed');
      progressStep.classList.remove('active');
    } else if (index + 1 === step) {
      progressStep.classList.add('active');
      progressStep.classList.remove('completed');
    } else {
      progressStep.classList.remove('active');
      progressStep.classList.remove('completed');
    }
  });

  // Scroll booking container into view
  document.querySelector('.booking-container').scrollIntoView({ behavior: 'smooth' });

  // Render step specific content and bind events
  if (step === 1) {
    renderDepartmentStep();
  } else if (step === 2) {
    renderStep2();
  } else if (step === 3) {
    renderDoctorsForDepartment();
  } else if (step === 5) {
    renderConfirmationSummary();
  }
}

// Confirmation booking alert and reset
  function confirmBooking() {
      const message = `Thank you, your appointment has been booked.`;
      document.getElementById('confirmationMessage').textContent = message;
      document.getElementById('confirmationModal').style.display = 'block';
    }

    document.addEventListener("DOMContentLoaded", function () {
      const closeModalBtn = document.getElementById('closeModal');
      const modal = document.getElementById('confirmationModal');

      closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        showStep(1);
      });

      window.addEventListener('click', function (event) {
        if (event.target === modal) {
          modal.style.display = 'none';
          showStep(1);
        }
      });
    });




// Initialize the booking process on page load
document.addEventListener('DOMContentLoaded', function () {
  showStep(1);
});


 closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
     window.location.href = 'Home-Page.html';
  });

// Close modal when clicking outside the modal content
window.onclick = function(event) {
  const modal = document.getElementById('confirmationModal');
 if (event.target === modal) {
      modal.style.display = 'none';
    window.location.href = 'Home-Page.html'; // Redirect to home page
    }
};


