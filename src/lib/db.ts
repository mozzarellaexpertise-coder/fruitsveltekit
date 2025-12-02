// svelte.config.js (The Workaround)
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        // Cast the adapter options to 'any' to stop the TypeScript error
        adapter: adapter({
            env: {
                private: ['DATABASE_URL']
            }
        } as any) // 🚨 ADD 'as any' HERE!
    }
};

export default config;