import { ShoppingSelectors } from "../../support/selectors/productos/shopping-selector";
import { LoginPage } from "../../pages/login-page";
import { ShoppingPage } from "../../pages/shopping-page"; 


describe('Busqueda del producto',()=>{

    beforeEach(() => {       
          ShoppingPage.visit()
      });
      
    it('Buscar un producto', function() {
            
       ShoppingPage.BuscarProducto('Publicidad');
  
    });

    it('producto no encontrado', () => {
      ShoppingPage.BuscarSinProducto('ProductoNoExistente');
      ShoppingPage.validarNoResultados();
    });



});
