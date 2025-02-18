export const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword';
export const API_KEY = __ENV.API_KEY_K6;
export const EMAIL = __ENV.EMAIL_K6;
export const PASSWORD = __ENV.PASSWORD_K6;

export const HEADERS = {
  'Content-Type': 'application/json',
  'Origin': 'https://venapp.com',
  'Referer': 'https://venapp.com/login',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
};

export const options = {
  thresholds: {
    'http_req_duration': ['p(95)<800'], // 95% de solicitudes en menos de 800ms
    'http_req_failed': ['rate<0.05'],   // Menos del 5% de errores
  },
  stages: [
    { duration: '5s', target: 5 },
    { duration: '8s', target: 7 },
    { duration: '5s', target: 0 },
  ],
};

/*
log para probar si toma las los datos env
console.log(`API_KEY: ${__ENV.API_KEY_K6}`);
console.log(`EMAIL: ${__ENV.EMAIL_K6}`);
console.log(`PASSWORD: ${__ENV.PASSWORD_K6}`);
*/