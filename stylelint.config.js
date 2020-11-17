module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-plugin-stylus/standard'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['global', 'local']
    }],
    'stylus/declaration-colon': ['always'],
    'stylus/semicolon': ['always'],
    'stylus/hash-object-property-comma': ['always', { trailing: 'never' }],
    'stylus/media-feature-colon': ['always'],
    'stylus/pythonic': ['never'],
    'stylus/selector-list-comma': ['always']
  }
}
