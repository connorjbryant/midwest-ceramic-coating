<!-- footer.php -->
<?php

// Footer ACF fields live on the "site settings" page
$settings_page = get_page_by_path('site-settings');
$settings_id = $settings_page ? (int) $settings_page->ID : 0;

$phone_display = $settings_id ? (string) get_field('phone_display', $settings_id) : '';
$phone_tel     = $settings_id ? (string) get_field('phone_tel', $settings_id) : '';
$email         = $settings_id ? (string) get_field('email', $settings_id) : '';

?>
<footer>
    <div class="footer__main">
        <ul>
            <li>
                <p>&copy; <?php echo date('Y'); ?> <?php echo esc_html( get_bloginfo( 'name' ) ); ?> | <a class="has-policy" href="/privacy-policy">Privacy Policy</a></p>
            </li>
        </ul>
        <ul class="has-bubble">
            <li>
                <a href="<?php echo esc_url('tel:' . $phone_tel); ?>">
                    <i class="fa-solid fa-phone"></i>
                    <?php echo esc_html($phone_display); ?>
                </a>
            </li>
            <li>
                <a href="mailto:<?php echo esc_attr($email); ?>">
                    <i class="fa-solid fa-envelope"></i>
                    <?php echo esc_html($email); ?>
                </a>
            </li>
        </ul>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>