jQuery(function ($) {
  $(".revealblock").each(function () {
    const $block = $(this);
    const $range = $block.find(".revealblock__range");
    const $after = $block.find(".revealblock__after");
    const $handle = $block.find(".revealblock__handle");
    const $hint = $block.find(".revealblock__hint");

    function updateReveal(value) {
      $after.css("clip-path", `inset(0 ${100 - value}% 0 0)`);
      $handle.css("left", `${value}%`);
      $hint.css("left", `${value}%`);
    }

    if (!$range.length || !$after.length || !$handle.length) {
      return;
    }

    $range.on("input change", function () {
      updateReveal($(this).val());
    });

    updateReveal($range.val() || 50);
  });
});