import { v4wp } from '@kucrut/vite-for-wp';

export default {
	plugins: [
		v4wp( {
			input: {
				main: 'src/main.js',
                // sample extra entry point
				// sample_compontent: 'src/components/sample/sample.js',
			},
			outDir: 'dist',
		} ),
        {
            name: 'override-config',
            config: () => ({
                build: {
                    // ensure that manifest.json is not in ".vite/" folder
                    manifest: 'manifest.json',
                },
            }),
        },
	],
};