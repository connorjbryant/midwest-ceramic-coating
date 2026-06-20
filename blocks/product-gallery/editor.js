(function (wp) {
  const { registerBlockType } = wp.blocks;
  const { __ } = wp.i18n;
  const { useBlockProps, RichText } = wp.blockEditor;

  registerBlockType('midwest-ceramic-coating/product-gallery', {
    edit({ attributes = {}, setAttributes }) {
      return wp.element.createElement(
        'section',
        useBlockProps({ className: 'product-galleryblock' }),
        wp.element.createElement(RichText, {
          tagName: 'h1',
          value: attributes.heading,
          placeholder: __('Add heading…', 'midwest-ceramic-coating'),
          onChange: (v) => setAttributes({ heading: v })
        })
      );
    },
    save() { return null; } // server-rendered
  });
})(window.wp);
