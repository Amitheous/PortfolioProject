// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e){
  // UI Vars

  var price = document.getElementById('price');
  const interest = document.getElementById('interest');
  var tax = document.getElementById('tax');
  var dp = document.getElementById('dp');
  var months = document.getElementById('months');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  tax = parseFloat(tax.value) / 100;
  price = parseFloat(price.value);
  dp = parseFloat(dp.value);
  const principal = (price * (1+tax)) - dp;

  const calculatedInterest = parseFloat(interest.value) / 100 / 12; // Makes the rate from a percentage value to a decimal value
  months = parseFloat(months.value);

  // Compute monthly payment
  // Equation for monthly payment is A=P(r(1+r)^n)/(((1+r)^n)-1)
  const x = Math.pow(1 + calculatedInterest, months); // this is (1+r)^n
  const monthly = (principal*x*calculatedInterest)/(x-1);




  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (dp + (monthly * months)).toFixed(2); // monthly payment * amount of months to pay
    totalInterest.value = ((monthly * months)-(principal)).toFixed(2); // Takes total and subtracts principal

  results = document.querySelector('#results');
  results.style.display = 'block';

  } else {
    showError('Please check your numbers');
  }

  e.preventDefault();
}

// Show Error Function

function showError(error){
  // Create a div
  const errorDiv = document.createElement('div');

  // Get Elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add classes
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error function

function clearError(){
  document.querySelector('.alert').remove();
}