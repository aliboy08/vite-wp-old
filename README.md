<h1>Vite + WP theme boilerplate</h1>

Add sample codes to your theme functions.php
```
include_once 'vite/vite-for-wp.php';
use FF\Vite;

add_action( 'wp_enqueue_scripts', function() {
    $dist = __DIR__ . '/vite/dist';
	Vite\enqueue_asset( $dist, 'src/main.js', [ 'handle' => 'main' ] );
});
```


