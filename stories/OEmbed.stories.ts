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
  height: string;
  proxy: string;
}

const Template: Story<ArgTypes> = ({ src, height, proxy }: ArgTypes) => html`
  <o-embed .src=${src} .height=${height} .proxy=${proxy}>
    <p slot="loading">Loading...</p>
    <p slot="error">Error</p>
  </o-embed>
`;
const proxy = 'https://silverbirder-cors-anywhere.herokuapp.com';

export const Twitter = Template.bind({});
Twitter.args = {
  src: 'https://twitter.com/silver_birder/status/1176375655237214209',
  height: '900px',
  proxy,
};

export const Youtube = Template.bind({});
Youtube.args = {
  src: 'https://www.youtube.com/watch?v=YBwgkr_Sbx0',
  proxy,
};

export const Speakerdeck = Template.bind({});
Speakerdeck.args = {
  src: 'https://speakerdeck.com/silverbirder/micro-frontends-on-kubernetes-trial',
  height: '500px',
  proxy,
};
