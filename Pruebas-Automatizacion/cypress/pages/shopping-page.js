import { LoginSelectors } from "../support/selectors/login/login-selectors";
import { ShoppingSelectors } from "../support/selectors/productos/shopping-selector";

export class ShoppingPage {

    static visit() { 
        cy.visit('https://venu.venapp.com/courses/');
        cy.get('body').should('be.visible');
        cy.log('Página de cursos cargado con éxito.');
    }

    static BuscarProducto(producto){

       cy.get(ShoppingSelectors.InputBuscar, { timeout: 10000 })
       .should('be.visible')
       .type(producto);

      cy.get(ShoppingSelectors.BotonBuscarLupa, { timeout: 10000 })
       .eq(0)
       .click();

      cy.wait(2000);
      cy.contains(ShoppingSelectors.tituloCarta , producto).should('exist');
      cy.log(`El producto ${producto} debería aparecer en los resultados.`);
 
}

  static BuscarSinProducto(producto){
    cy.get(ShoppingSelectors.InputBuscar, { timeout: 10000 })
    .should('be.visible')
    .type(producto);

   cy.get(ShoppingSelectors.BotonBuscarLupa, { timeout: 10000 })
    .eq(0)
    .click();

}

  static validarNoResultados() {
    cy.get(ShoppingSelectors.TextNoProducto, { timeout: 10000 })
    .should('include.text','No hay cursos disponibles con los filtros indicados, estamos trabajando para ofrecerte un catálogo más completo.');
    cy.log('No se encontraron resultados de productos, como se esperaba.');
  }


}