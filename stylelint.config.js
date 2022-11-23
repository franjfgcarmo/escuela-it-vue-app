module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended-vue',
    'stylelint-config-html/vue',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
  ],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        'unit-allowed-list': ['em', 'rem', 's', 'vh', 'px', '%'],
        // Allow newlines inside class attribute values
        'string-no-newline': null,
        // Limit the number of universal selectors in a selector,
        // to avoid very slow selectors
        'selector-max-universal': 1,
        'max-nesting-depth': 5,
        'declaration-block-no-duplicate-properties': true,

        // disable the border: none blacklist
        //'declaration-property-value-blacklist': null,

        // ===
        // PRETTIER
        // ===
        // HACK: to compensate for https://github.com/shannonmoeller/stylelint-config-prettier/issues/4
        // Modifying setting from Standard: https://github.com/stylelint/stylelint-config-standard/blob/7b76d7d0060f2e13a331806a09c2096c7536b0a6/index.js#L6
        'at-rule-empty-line-before': [
          'always',
          {
            except: ['blockless-after-same-name-blockless', 'first-nested'],
            ignore: ['after-comment'],
            ignoreAtRules: ['else'],
          },
        ],

        'declaration-empty-line-before': [
          'always',
          {
            ignore: ['first-nested', 'after-declaration', 'after-comment'],
          },
        ],

        // ===
        // SCSS
        // ===
        'scss/dollar-variable-colon-space-after': 'always',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-no-missing-interpolation': true,
        'scss/dollar-variable-pattern': /^[a-z0-9-_]+$/,
        'scss/double-slash-comment-whitespace-inside': 'always',
        'scss/operator-no-newline-before': true,
        'scss/operator-no-unspaced': true,
        'scss/selector-no-redundant-nesting-selector': true,
        // Allow SCSS and CSS module keywords beginning with `@`
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep'],
          },
        ],
      },
    },
  ],
}
