<?php
/**
 * About Block - Render Template
 */

// Get all attributes with defaults
$heading          = isset($attributes['heading']) ? trim((string) $attributes['heading']) : '';
$description      = isset($attributes['description']) ? trim((string) $attributes['description']) : '';
$button_one_text  = isset($attributes['buttonOneText']) ? trim((string) $attributes['buttonOneText']) : '';
$button_one_url   = isset($attributes['buttonOneUrl']) ? trim((string) $attributes['buttonOneUrl']) : '';
$button_two_text  = isset($attributes['buttonTwoText']) ? trim((string) $attributes['buttonTwoText']) : '';
$button_two_url   = isset($attributes['buttonTwoUrl']) ? trim((string) $attributes['buttonTwoUrl']) : '';

$image_one_url    = isset($attributes['imageOneUrl']) ? trim((string) $attributes['imageOneUrl']) : '';
$image_one_alt    = isset($attributes['imageOneAlt']) ? trim((string) $attributes['imageOneAlt']) : '';
$image_two_url    = isset($attributes['imageTwoUrl']) ? trim((string) $attributes['imageTwoUrl']) : '';
$image_two_alt    = isset($attributes['imageTwoAlt']) ? trim((string) $attributes['imageTwoAlt']) : '';
$image_three_url  = isset($attributes['imageThreeUrl']) ? trim((string) $attributes['imageThreeUrl']) : '';
$image_three_alt  = isset($attributes['imageThreeAlt']) ? trim((string) $attributes['imageThreeAlt']) : '';
?>

<div class="aboutblock wp-block-aboutblock">
  <div class="aboutblock__inner">
    <!-- Content Side -->
    <div class="aboutblock__content">
      <!-- Animated Corners Container -->
      <div class="aboutblock__moving-corner">
        <div class="aboutblock__top-right-corner"></div>
        <div class="aboutblock__left-dashed"></div>
        <div class="aboutblock__bottom-corner-line"></div>
        <div class="aboutblock__bottom-left-corner"></div>
      </div>

      <?php if (!empty($heading)) : ?>
        <h1><?php echo wp_kses_post($heading); ?></h1>
      <?php endif; ?>

      <?php if (!empty($description)) : ?>
        <p><?php echo wp_kses_post($description); ?></p>
      <?php endif; ?>

      <?php if (!empty($button_one_text) || !empty($button_two_text)) : ?>
        <div class="aboutblock__buttons">
          <?php if (!empty($button_one_text) && !empty($button_one_url)) : ?>
            <a href="<?php echo esc_url($button_one_url); ?>" 
              class="wp-block-button__link has-secondary-background-color has-background has-level-1-font-size has-custom-font-size wp-element-button">
              <?php echo esc_html($button_one_text); ?>
            </a>
          <?php endif; ?>

          <?php if (!empty($button_two_text) && !empty($button_two_url)) : ?>
            <a href="<?php echo esc_url($button_two_url); ?>" 
              class="wp-block-button__link has-secondary-background-color has-background has-level-1-font-size has-custom-font-size wp-element-button">
              <?php echo esc_html($button_two_text); ?>
            </a>
          <?php endif; ?>
        </div>
      <?php endif; ?>
    </div>

    <!-- Media Side -->
    <div class="aboutblock__media">
      <?php if (!empty($image_one_url)) : ?>
        <figure class="aboutblock__image aboutblock__image--one">
          <img src="<?php echo esc_url($image_one_url); ?>" alt="<?php echo esc_attr($image_one_alt); ?>">
        </figure>
      <?php endif; ?>

      <?php if (!empty($image_two_url)) : ?>
        <figure class="aboutblock__image aboutblock__image--two">
          <img src="<?php echo esc_url($image_two_url); ?>" alt="<?php echo esc_attr($image_two_alt); ?>">
        </figure>
      <?php endif; ?>

      <?php if (!empty($image_three_url)) : ?>
        <figure class="aboutblock__image aboutblock__image--three">
          <img src="<?php echo esc_url($image_three_url); ?>" alt="<?php echo esc_attr($image_three_alt); ?>">
        </figure>
      <?php endif; ?>
    </div>
  </div>
</div>