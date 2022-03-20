[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Silver-birder/o-embed)
[![codecov](https://codecov.io/gh/Silver-birder/o-embed/branch/main/graph/badge.svg?token=52D9NYB4TO)](https://codecov.io/gh/Silver-birder/o-embed)
[![storybook](https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg)](https://www.chromatic.com/library?appId=6235dbeee943ba003aa9a965)

# \<o-embed>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Usage

```html
<script type="module">
  import { OEmbed } from 'https://cdn.skypack.dev/@silverbirder/o-embed';

  window.customElements.define("o-embed", OEmbed);
</script>

<o-embed
  src="https://twitter.com/silver_birder/status/1176375655237214209"
  proxy="https://silverbirder-cors-anywhere.herokuapp.com"
  height="900px"
></o-embed>
```

## Installation

```bash
npm i @silverbirder/o-embed
```
