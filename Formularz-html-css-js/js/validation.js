/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
const form = document.getElementById('form');
const first_name = document.getElementById('first-name');
const last_name = document.getElementById('last-name');
const email = document.getElementById('email');

const checkbox1 = document.getElementById('frontend-checkbox');
const checkbox2 = document.getElementById('backend-checkbox');
const checkbox3 = document.getElementById('mobile-checkbox');
const checkbox4 = document.getElementById('graphics-checkbox');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    validateCheckboxes();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isValidName = name => {
    const re = /^[A-ZŻŹĆĄŚĘŁÓŃ][a-z0-9_-]{0,50}$/;              
    return re.test(String(name));
};


const validateInputs = () => {
    const first_name_value = first_name.value.trim();
    const last_name_value = last_name.value.trim();
    const email_value = email.value.trim();

    if (first_name_value === '') {
        setError(first_name, 'Musisz podać swoje imię');
    } else if (!isValidName(first_name_value)) {
        setError(first_name, 'Imie musi zaczynać się od dużej litery');
    } else {
        setSuccess(first_name);
    }

    if (last_name_value === '') {
        setError(last_name, 'Musisz podać swoje nazwisko');
    } else if (!isValidName(last_name_value)) {
        setError(last_name, 'Nazwisko musi zaczynać się od dużej litery');
    } else {
        setSuccess(last_name); 
    }

    if (email_value === '') {
        setError(email, 'Musisz podać adres email');
    } else if (!isValidEmail(email_value)) {
        setError(email, 'Podaj poprawny adres email');
    } else {
        setSuccess(email);
    }
};

const validateCheckboxes = () => {
    if (checkbox1.checked || checkbox2.checked || checkbox3.checked || checkbox4.checked) {
        document.getElementById("checkbox-error").textContent = '';
    } else {
        document.getElementById("checkbox-error").textContent = 'Zapomniałeś zaznaczyć czym się interesujesz';
    }
};
