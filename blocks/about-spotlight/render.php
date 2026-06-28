<?php
if ( ! defined('ABSPATH') ) exit;

$heading = '';
if ( isset($attributes['heading']) ) {
    $heading = trim( (string) $attributes['heading'] );
}
?>
<section class="aboutblock">
  <?php if ( $heading !== '' ) : ?>
    <h1 class="abouttitle"><?php echo esc_html( $heading ); ?></h1>
  <?php endif; ?>
</section>