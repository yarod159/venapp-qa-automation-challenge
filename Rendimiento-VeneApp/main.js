import { options } from './config.js';
import { ProxyManager } from './proxyManager.js';
import { UserLogin } from './userLogin.js';

export { options };

const proxyManager = new ProxyManager('./proxies.txt'); // Cargar proxies

const userLogin = new UserLogin(proxyManager); // Crear instancia de UserLogin

export default function () {
  userLogin.loginUser(); // Ejecutar login
}

/**
 * Nota: para correr el programa debe ser por terminal, ir a la carpeta donde esta el codigo 
 * y luego llenar los siguiente datos 
 * 
 * $env:API_KEY_K6=" your_api_key "
   $env:EMAIL_K6="test@exampl.com"
   $env:PASSWORD_K6="password123"
   k6 run main.js
 */