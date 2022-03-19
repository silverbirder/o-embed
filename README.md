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
