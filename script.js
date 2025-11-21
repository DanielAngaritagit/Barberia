document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    const timeSelect = document.getElementById('time');
    const form = document.getElementById('booking-form');
    const feedback = document.getElementById('booking-feedback');

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;

    // Generate time slots
    function generateTimeSlots() {
        const slots = [];
        let startHour = 10;
        let startMinute = 0;
        const endHour = 21; // 9 PM

        while (startHour < endHour || (startHour === endHour && startMinute === 0)) {
            // Format time
            const hourStr = startHour.toString().padStart(2, '0');
            const minuteStr = startMinute.toString().padStart(2, '0');
            const timeString = `${hourStr}:${minuteStr}`;

            // Allow slots up to 21:00 (9:00 PM)
            if (startHour <= 21) {
                slots.push(timeString);
            }

            // Increment by 45 minutes
            startMinute += 45;
            if (startMinute >= 60) {
                startHour += Math.floor(startMinute / 60);
                startMinute = startMinute % 60;
            }
        }
        return slots;
    }

    function updateAvailableSlots() {
        const selectedDate = dateInput.value;
        const allSlots = generateTimeSlots();

        // Clear current options
        timeSelect.innerHTML = '<option value="">Selecciona una hora</option>';

        // Get booked slots from localStorage
        const bookings = JSON.parse(localStorage.getItem('barberBookings')) || {};
        const bookedSlotsForDate = bookings[selectedDate] || [];

        allSlots.forEach(slot => {
            const option = document.createElement('option');
            option.value = slot;
            option.textContent = formatTime(slot);

            if (bookedSlotsForDate.includes(slot)) {
                option.disabled = true;
                option.textContent += ' (Ocupado)';
            }

            timeSelect.appendChild(option);
        });
    }

    // Helper to format 24h to 12h AM/PM
    function formatTime(time24) {
        const [hours, minutes] = time24.split(':');
        const h = parseInt(hours);
        const ampm = h >= 12 ? 'PM' : 'AM';
        const h12 = h % 12 || 12;
        return `${h12}:${minutes} ${ampm}`;
    }

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const date = dateInput.value;
        const time = timeSelect.value;

        if (!time) {
            showFeedback('Por favor selecciona una hora.', 'error');
            return;
        }

        // Save booking
        const bookings = JSON.parse(localStorage.getItem('barberBookings')) || {};
        if (!bookings[date]) {
            bookings[date] = [];
        }

        // Double check availability
        if (bookings[date].includes(time)) {
            showFeedback('Lo sentimos, este turno ya fue reservado.', 'error');
            updateAvailableSlots();
            return;
        }

        bookings[date].push(time);
        localStorage.setItem('barberBookings', JSON.stringify(bookings));

        showFeedback(`¡Reserva confirmada para ${name} a las ${formatTime(time)}!`, 'success');
        form.reset();
        dateInput.value = today; // Reset date to today
        updateAvailableSlots();
    });

    function showFeedback(message, type) {
        feedback.textContent = message;
        feedback.className = `feedback ${type}`;
        feedback.style.display = 'block';

        setTimeout(() => {
            feedback.style.display = 'none';
        }, 5000);
    }

    // Event listeners
    dateInput.addEventListener('change', updateAvailableSlots);

    // Initial load
    updateAvailableSlots();
});
