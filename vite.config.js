import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    path: {
        src: './src',
        dist: './dist',
        public: './public',
        assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
    }
})