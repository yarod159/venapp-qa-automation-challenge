import { LoginPage } from "../../pages/login-page";

describe('flujo de login',()=>{

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        LoginPage.visit()

    })


    it('Compruebe que el inicio de sesión se ha realizado correctamente con credenciales válidas. - Happy Path.', function() {
       
        LoginPage.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
       
    });

    it('Compruebe que el inicio de sesión no se produce sin correo electrónico.', function () { 
        LoginPage.enterPasswordLogin(Cypress.env('PASSWORD'));
        LoginPage.clickSignInButton();
        LoginPage.verifyMessage('Campo requerido');
       
    });

    it('Verificar que el login no es exitoso sin contraseña.', function () { 
        LoginPage.enterEmailLogin(Cypress.env('EMAIL'));
        LoginPage.clickSignInButton();
        LoginPage.verifyMessage('Debe ingresar la contraseña');
       
    });

    it('Compruebe que no se ha iniciado sesión con un correo electrónico no válido.', function () { 
        LoginPage.enterEmailLogin('pruebaTest@algo.com');
        LoginPage.enterPasswordLogin(Cypress.env('PASSWORD'));
        LoginPage.clickSignInButton();
        LoginPage.verifyMessage('Este email no está registrado como usuario');
        
    });

    it('Compruebe que no se ha iniciado sesión con una contraseña no válida.', function () { 
        LoginPage.enterEmailLogin(Cypress.env('EMAIL'));
        LoginPage.enterPasswordLogin('passwordIncorrecta');
        LoginPage.clickSignInButton();
        LoginPage.verifyMessage('Contraseña incorrecta');
        
    });


});