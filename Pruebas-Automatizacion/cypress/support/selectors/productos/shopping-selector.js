export const ShoppingSelectors = {


    InputBuscar:'input[placeholder="Buscar Cursos"]',
    BotonNavbarCurso: 'Cursos',
    BotonBuscarLupa:'button[type="submit"]',
    ResultadoBusqueda: i => `:nth-child(${i}) > .single-courses-box > .courses-content > h3 > .course-title`,
    tituloCarta: '.course-title',
    TextNoProducto:'.courses-area > .container > :nth-child(1) > :nth-child(3)',
    



}