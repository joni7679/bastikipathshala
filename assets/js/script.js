

const menuBtn = document.getElementById("menu-btn");


const form = document.getElementById('volunteerForm');
const successMessage = document.getElementById('successMessage');
const submitBtn = document.getElementById('submitBtn');

const errors = {
    name: document.getElementById('error-name'),
    email: document.getElementById('error-email'),
    phone: document.getElementById('error-phone'),
    message: document.getElementById('error-message'),
};

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validatePhone(phone) {
    return /^\+?[\d\s\-\(\)]+$/.test(phone);
}

function clearErrors() {
    for (const key in errors) {
        errors[key].textContent = '';
        errors[key].classList.add('hidden');
        const input = form.elements[key];
        input.classList.remove('border-red-300', 'focus-ring-red');
        input.classList.add('border-gray-300', 'focus-ring-orange');
    }
}

function validateForm() {
    clearErrors();
    let valid = true;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const phone = form.elements.phone.value.trim();
    const message = form.elements.message.value.trim();

    if (!name) {
        errors.name.textContent = 'Name is required';
        errors.name.classList.remove('hidden');
        form.elements.name.classList.add('border-red-300', 'focus-ring-red');
        form.elements.name.classList.remove('border-gray-300', 'focus-ring-orange');
        valid = false;
    }
    if (!email) {
        errors.email.textContent = 'Email is required';
        errors.email.classList.remove('hidden');
        form.elements.email.classList.add('border-red-300', 'focus-ring-red');
        form.elements.email.classList.remove('border-gray-300', 'focus-ring-orange');
        valid = false;
    } else if (!validateEmail(email)) {
        errors.email.textContent = 'Email is invalid';
        errors.email.classList.remove('hidden');
        form.elements.email.classList.add('border-red-300', 'focus-ring-red');
        form.elements.email.classList.remove('border-gray-300', 'focus-ring-orange');
        valid = false;
    }
    if (!phone) {
        errors.phone.textContent = 'Phone number is required';
        errors.phone.classList.remove('hidden');
        form.elements.phone.classList.add('border-red-300', 'focus-ring-red');
        form.elements.phone.classList.remove('border-gray-300', 'focus-ring-orange');
        valid = false;
    } else if (!validatePhone(phone)) {
        errors.phone.textContent = 'Phone number is invalid';
        errors.phone.classList.remove('hidden');
        form.elements.phone.classList.add('border-red-300', 'focus-ring-red');
        form.elements.phone.classList.remove('border-gray-300', 'focus-ring-orange');
        valid = false;
    }
    if (!message) {
        errors.message.textContent = 'Message is required';
        errors.message.classList.remove('hidden');
        form.elements.message.classList.add('border-red-300', 'focus-ring-red');
        form.elements.message.classList.remove('border-gray-300', 'focus-ring-orange');
        valid = false;
    } else if (message.length < 10) {
        errors.message.textContent = 'Message must be at least 10 characters';
        errors.message.classList.remove('hidden');
        form.elements.message.classList.add('border-red-300', 'focus-ring-red');
        form.elements.message.classList.remove('border-gray-300', 'focus-ring-orange');
        valid = false;
    }
    return valid;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateForm()) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Application';
        form.reset();
        successMessage.classList.remove('hidden');

        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    }, 1000);
});

// Clear errors on input
form.addEventListener('input', (e) => {
    const name = e.target.name;
    if (errors[name]) {
        errors[name].textContent = '';
        errors[name].classList.add('hidden');
        e.target.classList.remove('border-red-300', 'focus-ring-red');
        e.target.classList.add('border-gray-300', 'focus-ring-orange');
    }
});