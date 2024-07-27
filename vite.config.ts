import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/OMNEEFx/', // Ajoutez cette ligne, remplacez 'OMNEEFx' par le nom de votre dépôt

})
