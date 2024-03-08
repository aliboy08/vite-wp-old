<h1>Vite + WP theme boilerplate</h1>

Clone the repo to your theme folder
```
gh repo clone aliboy08/vite-wp
```


Add sample codes to your theme functions
```
include_once 'vite-wp/vite-for-wp.php';
use FF\Vite;

add_action( 'wp_enqueue_scripts', function() {
    $dist = __DIR__ . '/vite/dist';
    Vite\enqueue_asset( $dist, 'src/main.js', [ 'handle' => 'main' ] );
});
```
