document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.code');

  inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      const value = e.target.value;
      if (/^\d$/.test(value)) {
        input.value = value;
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      } else {
        input.value = '';
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        if (input.value === '') {
          if (index > 0) {
            inputs[index - 1].focus();
          }
        } else {
          input.value = '';
        }
      }
    });
  });

  // Handle paste event on the container
  document.querySelector('.code-container').addEventListener('paste', (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const inputs = document.querySelectorAll('.code');
    pasteData.split('').forEach((char, i) => {
      inputs[i].value = char;
    });
    if (pasteData.length < 6) {
      inputs[pasteData.length].focus();
    } else {
      inputs[5].focus();
    }
  });
});
