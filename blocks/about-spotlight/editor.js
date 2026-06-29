(function (wp) {
  const { registerBlockType } = wp.blocks;
  const { __ } = wp.i18n;
  const {
    useBlockProps,
    RichText,
    MediaUpload,
    MediaUploadCheck,
    URLInput
  } = wp.blockEditor;

  const { Button, PanelBody, TextControl } = wp.components;
  const { Fragment, createElement: el } = wp.element;
  const { InspectorControls } = wp.blockEditor;

  function ImagePicker({ label, url, alt, onSelect, onRemove }) {
    return el(
      "div",
      { className: "aboutblock-editor__image-picker" },
      el("p", {}, label),

      url
        ? el("img", {
            src: url,
            alt: alt || "",
            style: {
              width: "100%",
              height: "auto",
              marginBottom: "8px"
            }
          })
        : null,

      el(
        MediaUploadCheck,
        {},
        el(MediaUpload, {
          onSelect,
          allowedTypes: ["image"],
          render: ({ open }) =>
            el(
              Button,
              {
                variant: "secondary",
                onClick: open
              },
              url ? __("Replace image", "midwest-ceramic-coating") : __("Choose image", "midwest-ceramic-coating")
            )
        })
      ),

      url
        ? el(
            Button,
            {
              variant: "link",
              isDestructive: true,
              onClick: onRemove
            },
            __("Remove image", "midwest-ceramic-coating")
          )
        : null
    );
  }

  registerBlockType("midwest-ceramic-coating/about-spotlight", {
    edit({ attributes = {}, setAttributes }) {
      const blockProps = useBlockProps({ className: "aboutblock" });

      const selectImage = (number) => (media) => {
        setAttributes({
          [`image${number}Url`]: media.url || "",
          [`image${number}Alt`]: media.alt || ""
        });
      };

      const removeImage = (number) => () => {
        setAttributes({
          [`image${number}Url`]: "",
          [`image${number}Alt`]: ""
        });
      };

      return el(
        Fragment,
        {},

        el(
          InspectorControls,
          {},
          el(
            PanelBody,
            {
              title: __("Buttons", "midwest-ceramic-coating"),
              initialOpen: true
            },
            el(TextControl, {
              label: __("Button 1 Text", "midwest-ceramic-coating"),
              value: attributes.buttonOneText || "",
              onChange: (value) => setAttributes({ buttonOneText: value })
            }),
            el("p", {}, __("Button 1 URL", "midwest-ceramic-coating")),
            el(URLInput, {
              value: attributes.buttonOneUrl || "",
              onChange: (value) => setAttributes({ buttonOneUrl: value })
            }),

            el(TextControl, {
              label: __("Button 2 Text", "midwest-ceramic-coating"),
              value: attributes.buttonTwoText || "",
              onChange: (value) => setAttributes({ buttonTwoText: value })
            }),
            el("p", {}, __("Button 2 URL", "midwest-ceramic-coating")),
            el(URLInput, {
              value: attributes.buttonTwoUrl || "",
              onChange: (value) => setAttributes({ buttonTwoUrl: value })
            })
          ),

          el(
            PanelBody,
            {
              title: __("Images", "midwest-ceramic-coating"),
              initialOpen: true
            },
            el(ImagePicker, {
              label: __("Image 1", "midwest-ceramic-coating"),
              url: attributes.imageOneUrl,
              alt: attributes.imageOneAlt,
              onSelect: selectImage("One"),
              onRemove: removeImage("One")
            }),
            el(ImagePicker, {
              label: __("Image 2", "midwest-ceramic-coating"),
              url: attributes.imageTwoUrl,
              alt: attributes.imageTwoAlt,
              onSelect: selectImage("Two"),
              onRemove: removeImage("Two")
            }),
            el(ImagePicker, {
              label: __("Image 3", "midwest-ceramic-coating"),
              url: attributes.imageThreeUrl,
              alt: attributes.imageThreeAlt,
              onSelect: selectImage("Three"),
              onRemove: removeImage("Three")
            })
          )
        ),

        el(
          "section",
          blockProps,

          el("span", {
            className: "aboutblock__corner aboutblock__corner--moving",
            "aria-hidden": "true"
          }),

          el(
            "div",
            { className: "aboutblock__inner" },

            el(
              "div",
              { className: "aboutblock__content" },

              el(RichText, {
                tagName: "h1",
                className: "aboutblock__title",
                value: attributes.heading || "",
                placeholder: __("Add heading…", "midwest-ceramic-coating"),
                allowedFormats: [
                  "core/bold",
                  "core/italic",
                  "core/text-color"
                ],
                onChange: (value) => setAttributes({ heading: value })
              }),

              el(RichText, {
                tagName: "p",
                className: "aboutblock__description",
                value: attributes.description || "",
                placeholder: __("Add description…", "midwest-ceramic-coating"),
                onChange: (value) => setAttributes({ description: value })
              }),

              attributes.buttonOneText || attributes.buttonTwoText
                ? el(
                    "div",
                    { className: "aboutblock__buttons" },
                    attributes.buttonOneText
                      ? el(
                          "span",
                          { className: "wp-element-button" },
                          attributes.buttonOneText
                        )
                      : null,
                    attributes.buttonTwoText
                      ? el(
                          "span",
                          { className: "aboutblock__button-secondary" },
                          attributes.buttonTwoText
                        )
                      : null
                  )
                : null
            ),

            el(
              "div",
              { className: "aboutblock__media" },

              attributes.imageOneUrl
                ? el(
                    "figure",
                    { className: "aboutblock__image aboutblock__image--one" },
                    el("img", {
                      src: attributes.imageOneUrl,
                      alt: attributes.imageOneAlt || ""
                    })
                  )
                : null,

              attributes.imageTwoUrl
                ? el(
                    "figure",
                    { className: "aboutblock__image aboutblock__image--two" },
                    el("img", {
                      src: attributes.imageTwoUrl,
                      alt: attributes.imageTwoAlt || ""
                    })
                  )
                : null,

              attributes.imageThreeUrl
                ? el(
                    "figure",
                    { className: "aboutblock__image aboutblock__image--three" },
                    el("img", {
                      src: attributes.imageThreeUrl,
                      alt: attributes.imageThreeAlt || ""
                    })
                  )
                : null
            )
          )
        )
      );
    },

    save() {
      return null;
    }
  });
})(window.wp);