input.addEventListener('paste', (e) => {
  e.preventDefault();
  const pasteData = e.clipboardData.getData('text').replace(/\D/g, '');
  pasteData.split('').forEach((char, i) => {
    if (index + i < inputs.length) {
      inputs[index + i].value = char;
    }
  });
  const lastIndex = index + pasteData.length - 1;
  if (lastIndex < inputs.length) {
    inputs[lastIndex].focus();
  } else {
    inputs[inputs.length - 1].focus();
  }
});
