function showStep(step) {
    // Hide all forms
    document.querySelectorAll('.booking-form').forEach(form => {
      form.classList.remove('active');
    });
    
    // Show selected form
    document.getElementById('step' + step).classList.add('active');
    
    // Update progress
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
    
    // Scroll to top of booking container
    document.querySelector('.booking-container').scrollIntoView({ behavior: 'smooth' });
  }
  
  function confirmBooking() {
    alert('Your appointment has been booked successfully! A confirmation email has been sent to your email address.');
    showStep(1);
  }
  
  // Event listeners for calendar days
  document.querySelectorAll('.calendar-day').forEach(day => {
    if (!day.classList.contains('disabled')) {
      day.addEventListener('click', function() {
        document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
        this.classList.add('selected');
      });
    }
  });
  
  // Event listeners for time slots
  document.querySelectorAll('.time-slot').forEach(slot => {
    if (!slot.classList.contains('booked')) {
      slot.addEventListener('click', function() {
        document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
        this.classList.add('selected');
      });
    }
  });
  
  // Event listeners for doctor cards
  document.querySelectorAll('.doctor-card').forEach(card => {
    card.addEventListener('click', function() {
      document.querySelectorAll('.doctor-card').forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
    });
  });
