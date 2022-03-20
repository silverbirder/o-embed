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
    <p slot="notFound">Not Found</p>
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

export const Hatena = Template.bind({});
Hatena.args = {
  src: 'https://silverbirder180.hatenablog.com/entry/2020/05/04/182921',
  height: '500px',
  proxy,
};

export const NotFoundProvider = Template.bind({});
NotFoundProvider.args = {
  src: 'https://example.com/',
  height: '500px',
  proxy,
};
