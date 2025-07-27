const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;

    // Allow only a single digit
    if (/^\d$/.test(value)) {
      inputs[index].value = value; // Ensure only 1 char
      if (index < inputs.length - 1) {
        inputs[index + 1].focus(); // Move to next
      }
    } else {
      inputs[index].value = ''; // Clear invalid input
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (inputs[index].value === '') {
        if (index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = ''; // Optionally clear previous
        }
      } else {
        inputs[index].value = ''; // Clear current
      }
    }
  });
});
