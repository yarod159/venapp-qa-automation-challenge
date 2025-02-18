import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL, HEADERS , API_KEY,PASSWORD, EMAIL} from './config.js';

// Clase para manejar el login de usuarios
export class UserLogin {
  constructor(proxyManager) {
    this.proxyManager = proxyManager;
  }
 // Método para realizar el login
  loginUser() {
    const payload = JSON.stringify({
      email: EMAIL,
      password:PASSWORD,
      returnSecureToken: true,
    });

    let attempts = 0;
    const maxAttempts = 3;
    let success = false;

    while (attempts < maxAttempts && !success) {
      let proxyUrl = this.proxyManager.getRandomProxy(); // Obtener un proxy aleatorio

      try {
        const res = http.post(`${BASE_URL}?key=${API_KEY}`, payload, {
          headers: HEADERS,
          proxy: proxyUrl,
        });

        if (res.status === 200) {
          success = true;
          check(res, {
            '✔ Status 200 OK': (r) => r.status === 200,
            '⏳ Tiempo de respuesta < 500ms': (r) => r.timings.duration < 500,
            '🔑 Respuesta contiene token': (r) => r.json('idToken') !== undefined,
          });
        } else {
          console.error(`⛔ ERROR: Código de estado ${res.status}`);
          console.error(`📝 Respuesta: ${res.body}`);
          attempts++;
        }
      } catch (error) {
        console.error(`❌ Error de conexión con proxy ${proxyUrl}: ${error.message}`);
        attempts++;
      }
    }

    if (!success) {
      console.error('🚨 Todos los reintentos fallaron');
    }

    sleep(Math.random() * 2 + 1);
  }
}