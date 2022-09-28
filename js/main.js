// Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong! Make sure that ${selector} exists/is typed correctly.`
  );
};

// Change form and card data ----------------------------

// Card
const cardName = selectElement('#cardName');
const cardNumber = selectElement('#cardNumber');
const cardYear = selectElement('#cardYear');
const cardMonth = selectElement('#cardMonth');
const cardCvc = selectElement('#cardCvc');

// Form
const formName = selectElement('#name');
const formNumber = selectElement('#number');
const formYear = selectElement('#year');
const formMonth = selectElement('#month');
const formCvc = selectElement('#cvc');

// Errors
let errorName = false;
let errorNumber = false;
let errorDate = false;
let errorYear = false;
let errorMonth = false;
let errorCvc = false;

// Error functions

function mostrarError(hijo, frase, id) {
  const pError = document.createElement('p');
  hijo.parentElement.append(pError);
  pError.innerText = frase;
  pError.setAttribute('class', `error`);
  pError.setAttribute('id', id);
}

function ocultarError(hijo, id) {
  try {
    const pError = selectElement(`#${id}`);
    hijo.parentElement.removeChild(pError);
  } catch {}
}

// Event Listeners

formName.addEventListener('keyup', (event) => {
  // Validar
  // Solo letras
  // Quitar los espacios en los extremos
  // Regresar al estado inicial

  if (formName.value.length) {
    // Regresar al estado inicial

    // console.log(`El nombre ahora es: ${formName.value}`);

    const noLetras = /[^A-Za-z\s]/;
    let isOnlyLetters =
      formName.value.search(noLetras) === -1;

    if (isOnlyLetters) {
      // console.log(formName.parentElement);
      cardName.innerText = formName.value
        .trim()
        .replace(/\s+/, ' ');

      errorName = false;
      ocultarError(formName, 'errorName');
    } else {
      if (!errorName) {
        mostrarError(
          formName,
          'Solo se admiten letras',
          'errorName'
        );
        errorName = true;
      }
    }
  } else {
    cardName.innerText = 'Jane Appleseed';
    errorName = false;
    ocultarError(formName, 'errorName');
  }
});

const noNumbers = /\D/;

formNumber.addEventListener('keyup', (event) => {
  // Validar que sean solo numeros y que sean 16 agregar los espacios al escribir
  //  Agregar los espacios entre los numeros al escribir
  // Regresar al estado inicial

  if (formNumber.value.length) {
    const isOnlyNumbers =
      formNumber.value.search(noNumbers) === -1;
    if (isOnlyNumbers) {
      cardNumber.innerText = formNumber.value
        .trim()
        .replace(/\s+/, ' ')
        .split('')
        .map((element, index) => {
          return (index + 1) % 4 ? element : element + ' ';
        })
        .join('');
      errorNumber = false;
      ocultarError(formNumber, 'errorNumber');
    } else {
      if (!errorNumber) {
        errorNumber = true;
        mostrarError(
          formNumber,
          'Solo se admiten numeros',
          'errorNumber'
        );
      }
    }
  } else {
    cardNumber.innerText = '0000 0000 0000 0000';
    errorNumber = false;
    ocultarError(formNumber, 'errorNumber');
  }
});

formYear.addEventListener('keyup', (event) => {
  // Validar que sean solo numeros (1 al 12)
  // Regresar al estado inicial
  if (formYear.value.length) {
    // console.log(`El año ahora es: ${formYear.value}`);
    const isOnlyNumbers =
      formYear.value.search(noNumbers) === -1;

    if (isOnlyNumbers) {
      cardYear.innerText = formYear.value
        .trim()
        .replace(/\s+/, ' ');
      errorYear = false;
      ocultarError(formYear.parentElement, 'errorYear');
    } else {
      if (!errorYear) {
        errorYear = true;
        mostrarError(
          formYear.parentElement,
          'Solo se admiten numeros',
          'errorYear'
        );
      }
    }
  } else {
    cardYear.innerText = '00';
    errorYear = false;
    ocultarError(formYear.parentElement, 'errorYear');
  }
});

formMonth.addEventListener('keyup', (event) => {
  // Validar que sean solo numeros y que sean 16
  // Regresar al estado inicial
  if (formMonth.value.length) {
    const isOnlyNumbers =
      formMonth.value.search(noNumbers) === -1;

    if (isOnlyNumbers) {
      cardMonth.innerText = formMonth.value;
      errorMonth = false;
      ocultarError(formMonth.parentElement, 'errorMonth');
    } else {
      if (!errorMonth) {
        errorMonth = true;
        mostrarError(
          formMonth.parentElement,
          'Solo se admiten numeros',
          'errorMonth'
        );
      }
    }
  } else {
    cardMonth.innerText = '00';
    errorMonth = false;
    ocultarError(formMonth.parentElement, 'errorMonth');
  }
});

formCvc.addEventListener('keyup', (event) => {
  // Validar que sean solo numeros y que sean 16
  // Regresar al estado inicial

  if (formCvc.value.length) {
    const isOnlyNumbers =
      formCvc.value.search(noNumbers) === -1;
    if (isOnlyNumbers) {
      cardCvc.innerText = formCvc.value;
      errorCvc = false;
      ocultarError(formCvc, 'errorCvc');
    } else {
      if (!errorCvc) {
        errorCvc = true;
        mostrarError(
          formCvc,
          'Solo se admiten numeros',
          'errorCvc'
        );
      }
    }
  } else {
    cardCvc.innerText = '123';
    errorCvc = false;
    ocultarError(formCvc, 'errorCvc');
  }
});
