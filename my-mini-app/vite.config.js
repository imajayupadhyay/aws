import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Get local network IP dynamically
import os from 'os';

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name in interfaces) {
    for (const iface of interfaces[name] || []) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '0.0.0.0';
}

export default defineConfig({
  plugins: [react()],
  server: {
    host: getLocalIP(), // Set local IP as host
    port: 5173, // You can change the port if needed
    strictPort: true,
  },
});
