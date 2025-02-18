import { SharedArray } from 'k6/data';

export class ProxyManager {
  constructor(filePath) {
    this.proxies = new SharedArray('proxies', function () {
      return open(filePath).split('\n').filter(proxy => proxy.trim() !== '');
    });
  }

  getRandomProxy() {
    if (this.proxies.length === 0) {
      throw new Error('No hay proxies disponibles');
    }
    return `socks5://${this.proxies[Math.floor(Math.random() * this.proxies.length)]}`;
  }
}