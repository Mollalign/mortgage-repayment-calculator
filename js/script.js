let resultHTML = document.querySelector('.dark-card');

let emptyResultHtml = `
<div class="internal-wrapper-1">
  <div class="image-container">
    <img src="assets/images/illustration-empty.svg">
  </div>
  <div class="result-text">Results shown here</div>
  <div class="discription-text">
    Complete the form and click “calculate repayments” to see what 
    your monthly repayments would be.
  </div>
</div>

<div class="devloper">Developed By: Mollalign Daniel</div>
`;

resultHTML.innerHTML = emptyResultHtml;

document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault();

  const amountInput = document.querySelector('.js-input-amount');
  const termInput = document.querySelector('.js-input-term');
  const rateInput = document.querySelector('.js-input-rate');
  const repaymentType = document.querySelector('input[name="mortgage-type"]:checked');

  const inputs = document.querySelectorAll('input');
  const selectors = document.querySelectorAll('.selector');
  const errorMessage = document.querySelectorAll('.error-message');
  
  let hasError = false; // Track if there are any validation errors

  // Function to handle validation for inputs and selectors
  const validateField = (field, errorElement) => {
    if (!field.value || (field.type === 'radio' && !repaymentType)) {
      field.classList.add('input-error'); // Add error class
      errorElement.style.display = 'block'; // Show error message
      hasError = true; // Set error flag
    } else {
      field.classList.remove('input-error'); // Remove error class
      errorElement.style.display = 'none'; // Hide error message
    }
  };

  // Validate all input fields
  validateField(amountInput, document.getElementById('amount-error'));
  validateField(termInput, document.getElementById('term-error'));
  validateField(rateInput, document.getElementById('rate-error'));
  
  // Validate mortgage type (Repayment or Interest-Only)
  if (!repaymentType) {
    document.getElementById('type-error').style.display = 'block';
    hasError = true;
  } else {
    document.getElementById('type-error').style.display = 'none';
  }

  // Automatically remove error class after 3 seconds if needed
  setTimeout(() => {
    inputs.forEach(input => input.classList.remove('input-error'));
    selectors.forEach(selector => selector.classList.remove('input-error'));
    errorMessage.forEach(error => {
      error.style.display = 'none';
    });
  }, 3000); // Change the timeout duration as needed

  // Only calculate if no errors
  if (!hasError) {
    calculateRepayments(
      parseFloat(amountInput.value),
      parseFloat(termInput.value),
      parseFloat(rateInput.value),
      repaymentType.value
    );

});


// Clear the input fields and reset the form after displaying the results
 let clearEl = document.querySelector('.');
 clearEl.addEventListener('click', (e) => {
   amountInput.value = '';
      termInput.value = '';
      rateInput.value = '';
      document.querySelectorAll('input[name="mortgage-type"]').forEach(radio => {
        radio.checked = false; // Uncheck radio buttons
      });

   resultHTML.innerHTML = emptyResultHtml;
   
 });
  



// Calculation logic
function calculateRepayments(amount, term, rate, type) {
  let result = '';
  const months = term * 12;
  const monthlyRate = rate / 100 / 12;
  let repayment;
  let interestOnly;

  if (type === 'repayment') {
    // Monthly repayment calculation for repayment mortgage
    repayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    result = repayment.toFixed(2);

    // Total repayment over the loan term
    const totalRepayment = (repayment * months).toFixed(2);

    resultHTML.innerHTML = `
      <div class="internal-wrapper-2">
        <div class="result-text-2">Your results</div>
        <div class="discription-text-2">
          Your results are shown below based on the information you provided. 
          To adjust the results, edit the form and click “calculate repayments” again.
        </div>
        <div class="result-container">
          <div class="text">Your monthly repayments</div>
          <div class="monthly-result">
            <span>£</span>
            <span>${result}</span>
          </div>
          <div class="text-2">Total you'll repay over the term</div>
          <div class="total-result">
            <span>£</span>
            <span>${totalRepayment}</span>
          </div>
        </div>
      </div>
      <div class="devloper">Developed By: Mollalign Daniel</div>
    `;
  } else if (type === 'interest-only') {
    // Interest-only calculation
    interestOnly = amount * monthlyRate;
    result = `${interestOnly.toFixed(2)}`;

    // Total interest-only repayment over the loan term
    const totalInterestOnly = (interestOnly * months).toFixed(2);

    resultHTML.innerHTML = `
      <div class="internal-wrapper-2">
        <div class="result-text-2">Your results</div>
        <div class="discription-text-2">
          Your results are shown below based on the information you provided. 
          To adjust the results, edit the form and click “calculate repayments” again.
        </div>
        <div class="result-container">
          <div class="text">Your interest-only payments</div>
          <div class="monthly-result">
            <span>£</span>
            <span>${result}</span>
          </div>
          <div class="text-2">Total interest you'll pay over the term</div>
          <div class="total-result">
            <span>£</span>
            <span>${totalInterestOnly}</span>
          </div>
        </div>
      </div>
      <div class="devloper">Developed By: Mollalign Daniel</div>
    `;
  }
}
