<h1>Vite + WP theme boilerplate</h1>

Clone the repo to your theme directory
```
gh repo clone aliboy08/vite-wp
```

Run install
```
npm install --legacy-peer-deps
```


Add sample codes to your theme functions
```
include_once 'vite-wp/vite-for-wp.php';

add_action( 'wp_enqueue_scripts', function() {
    FF\Vite\load_file('main', 'src/main.js');
});
```

To start development
```
npm run dev
```


To bundle for production
```
npm run build
```
