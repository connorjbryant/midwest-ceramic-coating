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
    <h2 data-aos="fade-down" class="product-gallerytitle"><?php echo esc_html( $heading ); ?></h2>
  <?php endif; ?>

  <?php if ( ! empty( $images ) ) : ?>

    <!-- Visible only when JavaScript is disabled -->
    <noscript>
      <div class="product-galleryblock__noscript">
        <div class="product-galleryblock__noscript-grid">
          <?php foreach ($images as $image) :
            $url = isset($image['url']) ? $image['url'] : '';
            $alt = isset($image['alt']) ? $image['alt'] : '';
          ?>
          <figure class="product-galleryblock__noscript-item">
            <img src="<?php echo esc_url($url); ?>" alt="<?php echo esc_attr($alt); ?>">
            <?php if ($alt) : ?>
              <figcaption><?php echo esc_html($alt); ?></figcaption>
            <?php endif; ?>
          </figure>
          <?php endforeach; ?>
        </div>
      </div>
    </noscript>

    <!-- Normal JavaScript powered slider -->
    <div data-aos="fade-down" class="splide product-galleryblock__slider" aria-label="<?php echo esc_attr( $heading ?: 'Product gallery' ); ?>">
      <div class="splide__track">
        <ul class="splide__list">
          <?php foreach ( $images as $image ) : ?>
            <?php
              $url = isset($image['url']) ? $image['url'] : '';
              $alt = isset($image['alt']) ? $image['alt'] : '';
            ?>
            <li class="splide__slide product-galleryblock__slide">
              <a href="<?php echo esc_url( $url ); ?>" class="glightbox product-galleryblock__lightbox" data-gallery="product-gallery">
                <img src="<?php echo esc_url( $url ); ?>" alt="<?php echo esc_attr( $alt ); ?>">
              </a>
            </li>
            <?php endforeach; ?>
        </ul>
      </div>
    </div>
  <?php endif ?>
</section>
