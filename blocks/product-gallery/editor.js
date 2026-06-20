(function (wp) {
  const { registerBlockType } = wp.blocks;
  const { __ } = wp.i18n;
  const { useBlockProps, RichText, MediaUpload, MediaUploadCheck } = wp.blockEditor;
  const { Button } = wp.components;
  const el = wp.element.createElement;

  registerBlockType('midwest-ceramic-coating/product-gallery', {
    edit({ attributes = {}, setAttributes }) {
      const images = attributes.images || [];

      return el(
        'section',
        useBlockProps({ className: 'product-galleryblock' }),

        el(RichText, {
          tagName: 'h2',
          value: attributes.heading,
          placeholder: __('Add heading…', 'midwest-ceramic-coating'),
          onChange: (v) => setAttributes({ heading: v })
        }),

        el(MediaUploadCheck, {},
          el(MediaUpload, {
            multiple: true,
            gallery: true,
            value: images.map((img) => img.id),
            onSelect: (selected) => {
              setAttributes({
                images: selected.map((img) => ({
                  id: img.id,
                  url: img.url,
                  alt: img.alt || '',
                }))
              });
            },
            render: ({ open }) =>
              el(Button, { onClick: open, variant: 'primary' },
                images.length ? __('Edit Gallery', 'midwest-ceramic-coating') : __('Select Images', 'midwest-ceramic-coating')
              )
          })
        ),

        images.length > 0 &&
          el('div', { className: 'product-galleryblock__preview' },
            images.map((img) =>
              el('img', {
                key: img.id,
                src: img.url,
                alt: img.alt || ''
              })
            )
          )
      );
    },

    save() {
      return null;
    }
  });
})(window.wp);