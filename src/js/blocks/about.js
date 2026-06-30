jQuery(function($) {
    // Null check for about block
    const $blocks = $(".aboutblock");
    if (!$blocks.length) return; // Exit early if no blocks exist

    // Clamp a number between min and max. Useful for tracking opacity from 0-1
    function clamp(num, min, max) {
        return Math.min(Math.max(num, min), max);
    }

    // Main function that updates corner animation based on scroll position
    function updateAboutCorners() {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const headerHeight = $(".site-header").outerHeight() || 0;
        const isMobile = $(window).width() <= 1024;

        $blocks.each(function() {
            const $block = $(this);
            const blockTop = $block.offset().top;
            const blockHeight = $block.outerHeight();

            // Calculate when the animation should start for this block
            const start = isMobile 
                ? blockTop - windowHeight * 0.35 
                : blockTop - headerHeight - 100;

            // How long the animation should run (as a percentage of block height)
            const distance = isMobile 
                ? blockHeight * 0.75 
                : blockHeight * 0.68;

            // Progress for the height of the dashed lines
            let progress = clamp((scrollTop - start) / distance, 0, 1);
            if (progress >= 0.96) progress = 1;

            // Dashed lines height
            const pathProgress = isMobile 
                ? clamp((progress - 0.25) / 0.50, 0, 1) 
                : clamp((progress - 0.20) / 0.60, 0, 1);

            // Dashed lines opacity - lasts longer on desktop
            let pathOpacity = 0;
            if (isMobile) {
                if (progress > 0.32 && progress < 0.88) pathOpacity = 0.5;
            } else {
                if (progress > 0.22 && progress < 0.92) pathOpacity = 0.5;  // Extended
            }

            // CSS custom variables dynamic updates
            $block.css({
                "--corner-progress": progress.toFixed(3),
                "--corner-path-progress": pathProgress.toFixed(3),
                "--corner-path-opacity": pathOpacity
            });
        });
    }

    // Reset all animation values to the initial hidden state
    function resetCorners() {
        $blocks.css({
            "--corner-progress": "0",
            "--corner-path-progress": "0",
            "--corner-path-opacity": "0"
        });
    }

    // Initial reset
    resetCorners();
    $(window).on('load', resetCorners);
    
    // Initial update with small delay to ensure accurate measurements
    setTimeout(() => {
        resetCorners();
        updateAboutCorners();
    }, 100);

    // Update animation on scroll, resize, and orientation change
    $(window).on("scroll resize orientationchange", updateAboutCorners);
});