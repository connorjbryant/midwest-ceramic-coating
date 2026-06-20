<?php
if ( ! defined('ABSPATH') ) exit;

$heading = '';
if ( isset($attributes['heading']) ) {
    $heading = trim( (string) $attributes['heading'] );
}
?>
<section class="product-galleryblock alignfull">
  <?php if ( $heading !== '' ) : ?>
    <h1 class="product-gallerytitle"><?php echo esc_html( $heading ); ?></h1>
  <?php endif; ?>
</section>
