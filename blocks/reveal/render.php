<?php
if ( ! defined('ABSPATH') ) exit;

$heading = isset($attributes['heading']) ? trim((string) $attributes['heading']) : '';

$before_url = isset($attributes['beforeImageUrl']) ? esc_url($attributes['beforeImageUrl']) : '';
$before_alt = isset($attributes['beforeImageAlt']) ? esc_attr($attributes['beforeImageAlt']) : '';

$after_url = isset($attributes['afterImageUrl']) ? esc_url($attributes['afterImageUrl']) : '';
$after_alt = isset($attributes['afterImageAlt']) ? esc_attr($attributes['afterImageAlt']) : '';
?>

<section class="revealblock">
  <?php if ( $heading !== '' ) : ?>
    <h2 class="revealtitle"><?php echo esc_html($heading); ?></h2>
  <?php endif; ?>

  <?php if ( $before_url && $after_url ) : ?>
    <div class="revealblock__wrap">
      <div class="revealblock__image revealblock__before">
        <img src="<?php echo $before_url; ?>" alt="<?php echo $before_alt; ?>">
      </div>

      <div class="revealblock__image revealblock__after">
        <img src="<?php echo $after_url; ?>" alt="<?php echo $after_alt; ?>">
      </div>

      <div class="revealblock__hint" aria-hidden="true">Slide me</div>

      <div class="revealblock__handle" aria-hidden="true"></div>

      <input
        class="revealblock__range"
        type="range"
        min="0"
        max="100"
        value="50"
        aria-label="<?php esc_attr_e('Reveal comparison', 'midwest-ceramic-coating'); ?>"
      >
    </div>
  <?php endif; ?>
</section>