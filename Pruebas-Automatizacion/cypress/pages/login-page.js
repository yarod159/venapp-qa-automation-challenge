import { LoginSelectors } from "../support/selectors/login/login-selectors";

export class LoginPage {

    static visit() {
        console.log("🔵 Visitando la página de login...");
        cy.log("Visitando la página de login...");
        cy.visit('https://venapp.com/auth/login');
        cy.wait(500);
    }

    static login(email, passw) {
        console.log(`🔵 Intentando iniciar sesión con: ${email} / ${passw}`);
        cy.log(`Intentando iniciar sesión con: ${email}`);

        cy.wait(500);
        this.enterEmailLogin(email);
        this.enterPasswordLogin(passw);
        this.clickSignInButton();
    }

    static enterEmailLogin(email) {
        console.log(`✉️ Introduciendo email: ${email}`);
        cy.log(`Introduciendo email: ${email}`);

        cy.get(LoginSelectors.loginContainerEmail, { timeout: 10000 })
          .clear()
          .type(email);
    }

    static enterPasswordLogin(passw) {
        console.log("🔒 Introduciendo contraseña...");
        cy.log("Introduciendo contraseña...");

        cy.get(LoginSelectors.loginContainerPassw, { timeout: 10000 })
          .clear()
          .type(passw);
    }

    static clickSignInButton() {
        console.log("🟢 Haciendo clic en el botón de iniciar sesión");
        cy.log("Haciendo clic en el botón de iniciar sesión");

        cy.get(LoginSelectors.signInButton, { timeout: 10000 })
          .contains('Iniciar sesión')
          .click();
    }

    static verifyMessage(message) {
        console.log(`🧐 Verificando mensaje: ${message}`);
        cy.log(`Verificando mensaje: ${message}`);

        cy.get(LoginSelectors.messageLogin, { timeout: 10000 })
          .should('contain.text', message);
    }
}
