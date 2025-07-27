document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.code');

  inputs.forEach((input, index) => {
    // Move to next input on valid number
    input.addEventListener('input', (e) => {
      const value = e.target.value;
      if (/^\d$/.test(value)) {
        input.value = value; // keep only the digit
        if (index < inputs.length - 1) {
          inputs[index + 1].focus(); // move to next box
        }
      } else {
        input.value = ''; // clear if not a digit
      }
    });

    // Handle backspace to move focus back
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        if (input.value === '') {
          if (index > 0) {
            inputs[index - 1].focus();
          }
        } else {
          input.value = ''; // clear current value
        }
      }
    });
  });

  // Handle full OTP paste
  document.querySelector('.code-container').addEventListener('paste', (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const inputs = document.querySelectorAll('.code');

    pasteData.split('').forEach((char, i) => {
      if (i < inputs.length) {
        inputs[i].value = char;
      }
    });

    // Focus the next empty input or last one
    const nextIndex = Math.min(pasteData.length, inputs.length - 1);
    inputs[nextIndex].focus();
  });
});
