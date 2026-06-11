<!-- header.php -->
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php echo body_class(); ?>>

<a class="skip-link screen-reader-text" href="#main">
  <?php esc_html_e( 'Skip to content', 'midwest-ceramic-coating' ); ?>
</a>

  <div class="wp-site-blocks topnav" id="js-top">
    <header class="site-header">
      <div class="header__main">
        <div class="header__main-left">
          <?php if ( function_exists( 'the_custom_logo' ) ){
            the_custom_logo();
          }
          ?>
        </div>
        <div class="header__main-right">
          <button type="button" class="js-icon" aria-label="Open menu" aria-expanded="false">
            <i class="fa fa-bars"></i>
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