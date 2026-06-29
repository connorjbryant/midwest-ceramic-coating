<?php
if ( ! defined('ABSPATH') ) exit;

$heading = isset($attributes['heading']) ? trim((string) $attributes['heading']) : '';
$description = isset($attributes['description']) ? trim((string) $attributes['description']) : '';

$button_one_text = isset($attributes['buttonOneText']) ? trim((string) $attributes['buttonOneText']) : '';
$button_one_url  = isset($attributes['buttonOneUrl']) ? trim((string) $attributes['buttonOneUrl']) : '';

$button_two_text = isset($attributes['buttonTwoText']) ? trim((string) $attributes['buttonTwoText']) : '';
$button_two_url  = isset($attributes['buttonTwoUrl']) ? trim((string) $attributes['buttonTwoUrl']) : '';

$image_one_url = isset($attributes['imageOneUrl']) ? trim((string) $attributes['imageOneUrl']) : '';
$image_one_alt = isset($attributes['imageOneAlt']) ? trim((string) $attributes['imageOneAlt']) : '';

$image_two_url = isset($attributes['imageTwoUrl']) ? trim((string) $attributes['imageTwoUrl']) : '';
$image_two_alt = isset($attributes['imageTwoAlt']) ? trim((string) $attributes['imageTwoAlt']) : '';

$image_three_url = isset($attributes['imageThreeUrl']) ? trim((string) $attributes['imageThreeUrl']) : '';
$image_three_alt = isset($attributes['imageThreeAlt']) ? trim((string) $attributes['imageThreeAlt']) : '';
?>

<section class="aboutblock">
  <div class="aboutblock__inner">
    <div class="aboutblock__content">
      <span class="aboutblock__top-right-corner" aria-hidden="true"></span>
      <span class="aboutblock__moving-corner" aria-hidden="true"></span>
      <span class="aboutblock__bottom-corner-line" aria-hidden="true"></span>
      <div class="aboutblock__heading-wrap">
        <?php if ( $heading !== '' ) : ?>
          <h1><?php echo wp_kses_post( $heading ); ?></h1>
        <?php endif; ?>
      </div>

      <?php if ( $description !== '') : ?>
        <p><?php echo wp_kses_post($description); ?></p>
      <?php endif; ?>

      <?php if ( ($button_one_text && $button_one_url) || ($button_two_text && $button_two_url) ) : ?>
        <div class="aboutblock__buttons">
          <?php if ($button_one_text && $button_one_url) : ?>
            <a class="wp-block-button__link has-secondary-background-color has-background has-level-1-font-size has-custom-font-size wp-element-button" href="<?php echo esc_url($button_one_url); ?>">
              <?php echo esc_html($button_one_text); ?>
            </a>
          <?php endif; ?>

          <?php if ( $button_two_text && $button_two_url ) : ?>
            <a class="wp-block-button__link has-secondary-background-color has-background has-level-1-font-size has-custom-font-size wp-element-button" href="<?php echo esc_url($button_two_url); ?>">
              <?php echo esc_html($button_two_text); ?>
            </a>
          <?php endif; ?>
        </div>
      <?php endif; ?>
    </div>

    <?php if ( $image_one_url || $image_two_url || $image_three_url ) : ?>
      <div class="aboutblock__media">
        <?php if ( $image_one_url ) : ?>
          <figure class="aboutblock__image aboutblock__image--one">
            <img src="<?php echo esc_url($image_one_url); ?>" alt="<?php echo esc_attr($image_one_alt); ?>">
          </figure>
        <?php endif; ?>

        <?php if ( $image_two_url ) : ?>
          <figure class="aboutblock__image aboutblock__image--two">
            <img src="<?php echo esc_url($image_two_url); ?>" alt="<?php echo esc_attr($image_two_alt); ?>">
          </figure>
        <?php endif; ?>

        <?php if ( $image_three_url ) : ?>
          <figure class="aboutblock__image aboutblock__image--three">
            <img src="<?php echo esc_url($image_three_url); ?>" alt="<?php echo esc_attr($image_three_alt); ?>">
          </figure>
        <?php endif; ?>
      </div>
    <?php endif; ?>
  </div>
</section>