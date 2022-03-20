import { html, TemplateResult } from 'lit';
import '../src/o-embed.js';

export default {
  title: 'OEmbed',
  component: 'o-embed',
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
}

interface ArgTypes {
  src: string;
  proxy: string;
  height?: string;
  weight?: string;
  provider?: string;
}

const Template: Story<ArgTypes> = ({
  src,
  proxy,
  height,
  weight,
  provider,
}: ArgTypes) => html`
  <o-embed
    .src=${src}
    .height=${height}
    .weight=${weight}
    .proxy=${proxy}
    .provider=${provider}
  >
    <p slot="loading">Loading...</p>
    <p slot="notFound">Not Found</p>
    <p slot="error">Error</p>
  </o-embed>
`;
const proxy = 'https://silverbirder-cors-anywhere.herokuapp.com';
const provider =
  'https://gist.githubusercontent.com/Silver-birder/4575171d72cd1b0293c7de0913edb6f9/raw/oEmbedProviders.json';

export const Twitter = Template.bind({});
Twitter.args = {
  src: 'https://twitter.com/openwc/status/1427617679427440643',
  proxy,
  height: '450px',
  weight: '',
  provider: '',
};

export const Youtube = Template.bind({});
Youtube.args = {
  src: 'https://www.youtube.com/watch?v=YBwgkr_Sbx0',
  proxy,
  height: '',
  weight: '',
  provider: '',
};

export const Speakerdeck = Template.bind({});
Speakerdeck.args = {
  src: 'https://speakerdeck.com/silverbirder/micro-frontends-on-kubernetes-trial',
  proxy,
  height: '500px',
  weight: '',
  provider: '',
};

export const Hatena = Template.bind({});
Hatena.args = {
  src: 'https://silverbirder180.hatenablog.com/entry/2020/05/04/182921',
  proxy,
  height: '200px',
  weight: '',
  provider,
};

export const NotFound = Template.bind({});
NotFound.args = {
  src: 'https://example.com/',
  proxy,
  height: '',
  weight: '',
  provider: '',
};

export const NoRequired = Template.bind({});
NoRequired.args = {
  src: 'https://example.com',
  proxy: '',
  height: '',
  weight: '',
  provider: '',
};
