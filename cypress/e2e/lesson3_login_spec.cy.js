const url = 'http://demo.applitools.com';
const username = 'lsabolic';
const password = 'pitbulllover1234';

function launchApplication(url) {
  cy.visit(url);
}

function enterUsername(username) {
  cy.get('input[id="username"]').type(username);
}

function enterPassword(password) {
  cy.get('input[id="password"]').type(password);
}

function clickLoginButton() {
  cy.contains('a', 'Sign in').click();
}

function verifyLoginSuccess() {
  cy.url().should('include', '/app.html');
}

describe('Login Test', () => {
  it('should successfully log in', () => {
    launchApplication(url);

    enterUsername(username);

    enterPassword(password);

    clickLoginButton();

    verifyLoginSuccess();
  });
});