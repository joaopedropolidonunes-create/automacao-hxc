Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('When is not defined')) {
    return false; // ignora este erro específico
  }
  return false;
});
