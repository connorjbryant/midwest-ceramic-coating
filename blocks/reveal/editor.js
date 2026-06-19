(function (wp) {
  const { registerBlockType } = wp.blocks;
  const { __ } = wp.i18n;
  const { createElement: el } = wp.element;
  const { useBlockProps, RichText, MediaUpload, MediaUploadCheck } = wp.blockEditor;
  const { Button } = wp.components;

  registerBlockType('midwest-ceramic-coating/reveal', {
    edit({ attributes = {}, setAttributes }) {
      const blockProps = useBlockProps({ className: 'revealblock' });

      const pickImage = (key, media) => {
        setAttributes({
          [`${key}ImageId`]: media.id,
          [`${key}ImageUrl`]: media.url,
          [`${key}ImageAlt`]: media.alt || ''
        });
      };

      const imagePicker = (key, label) =>
        el('div', { className: 'revealblock-editor__picker' },
          el('p', {}, label),
          attributes[`${key}ImageUrl`] &&
            el('img', {
              src: attributes[`${key}ImageUrl`],
              alt: '',
              style: { maxWidth: '100%', height: 'auto' }
            }),
          el(MediaUploadCheck, {},
            el(MediaUpload, {
              onSelect: (media) => pickImage(key, media),
              allowedTypes: ['image'],
              value: attributes[`${key}ImageId`],
              render: ({ open }) =>
                el(Button, { variant: 'secondary', onClick: open },
                  attributes[`${key}ImageUrl`] ? __('Replace image', 'midwest-ceramic-coating') : __('Choose image', 'midwest-ceramic-coating')
                )
            })
          )
        );

      return el('section', blockProps,
        el(RichText, {
          tagName: 'h1',
          className: 'revealtitle',
          value: attributes.heading,
          placeholder: __('Add heading…', 'midwest-ceramic-coating'),
          onChange: (v) => setAttributes({ heading: v })
        }),
        imagePicker('before', __('Before Image', 'midwest-ceramic-coating')),
        imagePicker('after', __('After Image', 'midwest-ceramic-coating'))
      );
    },

    save() {
      return null;
    }
  });
})(window.wp);