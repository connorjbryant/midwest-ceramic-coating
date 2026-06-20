<?php
if ( ! defined('ABSPATH') ) exit;

$heading = '';
if ( isset($attributes['heading']) ) {
  $heading = trim( (string) $attributes['heading'] );
}

$images = isset($attributes['images']) && is_array($attributes['images'])
  ? $attributes['images']
  : [];
?>
<section class="product-galleryblock">
  <?php if ( $heading !== '' ) : ?>
    <h2 class="product-gallerytitle"><?php echo esc_html( $heading ); ?></h2>
  <?php endif; ?>

  <?php if ( ! empty( $images ) ) : ?>
    <div class="splide product-galleryblock__slider" aria-label="<?php echo esc_attr( $heading ?: 'Product gallery' ); ?>">
      <div class="splide__track">
        <ul class="splide__list">
          <?php foreach ( $images as $image ) : ?>
            <?php
              $url = isset($image['url']) ? $image['url'] : '';
              $alt = isset($image['alt']) ? $image['alt'] : '';
            ?>
            <li class="splide__slide product-galleryblock__slide">
              <img src="<?php echo esc_url( $url ); ?>" alt="<?php echo esc_attr( $alt ); ?>">
            </li>
            <?php endforeach; ?>
        </ul>
      </div>
    </div>
  <?php endif ?>
</section>
