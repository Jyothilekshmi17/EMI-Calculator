    function calculateEMI() {
      const P = parseFloat(document.getElementById("loanAmount").value);
      const annualRate = parseFloat(document.getElementById("interestRate").value);
      const n = parseInt(document.getElementById("loanMonths").value);
      const resultDiv = document.getElementById("result");

      if (P <= 0 || annualRate <= 0 || n <= 0 || isNaN(P) || isNaN(annualRate) || isNaN(n)) {
        resultDiv.innerHTML = `<div class="error">⚠️ Please enter valid positive numbers.</div>`;
        return;
      }

      const r = annualRate / (12 * 100);
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = emi * n;
      const totalInterest = totalPayment - P;

         resultDiv.innerHTML = `
  <div class="results-wrapper">
    <div class="result-box">
      <div class="label">💳 Monthly EMI</div>
      <div class="value">₹${emi.toFixed(2)}</div>
    </div>
    <div class="result-box">
      <div class="label">💰 Total Payment</div>
      <div class="value">₹${totalPayment.toFixed(2)}</div>
    </div>
    <div class="result-box">
      <div class="label">📈 Total Interest</div>
      <div class="value">₹${totalInterest.toFixed(2)}</div>
    </div>
  </div>
`;

    }

    function toggleDarkMode() {
      document.body.classList.toggle('dark');
    }
 
