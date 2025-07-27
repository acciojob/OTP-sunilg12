document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.code');

  // Set focus on the first input when the page loads
  inputs[0].focus();

  inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      const value = e.target.value;

      if (/^\d$/.test(value)) {
        e.target.value = value;
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      } else {
        e.target.value = '';
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        if (e.target.value === '') {
          if (index > 0) {
            inputs[index - 1].focus();
          }
        } else {
          e.target.value = '';
        }
      }
    });

    input.addEventListener('paste', (e) => {
      e.preventDefault();
      const pasteData = e.clipboardData.getData('text').replace(/\D/g, '');
      const chars = pasteData.split('');

      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = chars[i] || '';
      }

      const nextIndex = Math.min(chars.length, inputs.length - 1);
      inputs[nextIndex].focus();
    });
  });
});