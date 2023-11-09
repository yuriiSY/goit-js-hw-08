import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let data = {};

updateState();

form.addEventListener(
  'input',
  throttle(function (evnt) {
    evnt.preventDefault;
    data[evnt.target.name] = evnt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }, 500)
);

form.addEventListener('submit', function (evnt) {
  evnt.preventDefault();
  data = {
    email: evnt.currentTarget.elements.email.value,
    message: evnt.currentTarget.elements.message.value,
  };
  form.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(data);
});

function updateState() {
  let state = localStorage.getItem('feedback-form-state');
  if (state) {
    state = checkParse(state);
    form.elements.email.value = state.email;
    form.elements.message.value = state.message;
  }
}

function checkParse(state) {
  try {
    return JSON.parse(state);
  } catch (err) {
    console.log(err);
  }
}
