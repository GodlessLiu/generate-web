module.exports = {
	extends: [
        "stylelint-config-standard",
        "stylelint-config-standard-scss",
    ],
    rules:{
        'scss/at-rule-no-unknown': [
            true,
            {
              ignoreAtRules: [
                'apply',
                'layer',
                'responsive',
                'screen',
                'tailwind',
                'variants',
              ],
            },
          ],
    }
};