const options = [...document.querySelectorAll('.candy-option')];
const selection = document.querySelector('.selection');
const dialog = document.querySelector('.order-dialog');
const candyDialog = document.querySelector('.candy-dialog');
const descriptionImage = document.querySelector('.candy-description-image');
const dialogMessage = document.querySelector('.dialog-message');
options.forEach((option) => {
  option.addEventListener('click', () => {
    options.forEach((item) => item.setAttribute('aria-pressed', String(item === option)));
    selection.textContent = `You picked: ${option.dataset.candy}!`;
    descriptionImage.src = option.dataset.description;
    descriptionImage.alt = `Description for ${option.dataset.candy}`;
    candyDialog.showModal();
  });
});
document.querySelector('.order-button').addEventListener('click', () => {
  const chosen = options.find((option) => option.getAttribute('aria-pressed') === 'true');
  dialogMessage.textContent = chosen
    ? `You picked ${chosen.dataset.candy}!`
    : 'Choose a candy above to get started.';
  dialog.showModal();
});

candyDialog.addEventListener('click', (event) => {
  if (event.target === candyDialog) candyDialog.close();
});
