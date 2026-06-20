<!-- header.php -->
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<noscript>
  <div class="no-js-notice">JavaScript is disabled. Please enable it to use all of the website features.</div>
</noscript>

<a class="skip-link screen-reader-text" href="#main">
  <?php esc_html_e( 'Skip to content', 'midwest-ceramic-coating' ); ?>
</a>

  <div class="wp-site-blocks topnav" id="js-top">
    <header class="site-header">
      <div class="header__main">
        <div class="header__main-left">
          <?php
          $logo_id  = get_theme_mod( 'custom_logo' );
          $logo_url = $logo_id ? wp_get_attachment_image_url( $logo_id, 'full' ) : false;

          if ( $logo_url ) :
          ?>
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
              <img src="<?php echo esc_url( $logo_url ); ?>" alt="<?php bloginfo( 'name' ); ?>">
            </a>
          <?php else : ?>
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
              <img src="<?php echo esc_url( get_template_directory_uri() . '/images/mwcc-logo-theme.png' ); ?>" alt="<?php bloginfo( 'name' ); ?>">
            </a>
          <?php endif; ?>
        </div>
        <div class="header__main-right">
          <button type="button" class="js-icon" aria-label="Open menu" aria-expanded="false">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </button>
        </div>
        <?php
          wp_nav_menu( array(
            'theme_location'  => 'primary',
            'menu_class'      => 'nav-menu',
            'menu_id'         => 'primary-menu',
            'container'       => false,
            'depth'           => 4,
          ));
          ?>
      </div>
    </header>