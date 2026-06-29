jQuery(function($) {
    const $blocks = $(".aboutblock");

    if (!$blocks.length) return;

    function clamp(num, min, max) {
        return Math.min(Math.max(num, min), max);
    }

    function updateAboutCorners() {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const headerHeight = $(".site-header").outerHeight() || 0;
        const isMobile = $(window).width() <= 1024;

        $blocks.each(function() {
            const $block = $(this);
            const blockTop = $block.offset().top;
            const blockHeight = $block.outerHeight();

            const start = isMobile
                ? blockTop - windowHeight * 0.75
                : blockTop - headerHeight;

            const distance = isMobile
                ? blockHeight * 0.55
                : blockHeight * 0.65;

            let progress = clamp((scrollTop - start) / distance, 0, 1);

            if (progress >= 0.98) {
                progress = 1;
            }

            const pathProgress = isMobile
                ? clamp((progress - 0.08) / 0.35, 0, 1)
                : clamp((progress - 0.18) / 0.58, 0, 1);

            const pathOpacity = isMobile
                ? (progress > 0.08 && progress < 0.78 ? 1 : 0)
                : (progress > 0.18 && progress < 0.92 ? 1 : 0);

            $block.css({
                "--corner-progress": progress.toFixed(3),
                "--corner-path-progress": pathProgress.toFixed(3),
                "--corner-path-opacity": pathOpacity
            });
        });
    }

    updateAboutCorners();
    $(window).on("scroll resize orientationchange", updateAboutCorners);
});