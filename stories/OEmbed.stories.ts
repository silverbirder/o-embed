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
  <o-embed .src=${src} .height=${height} .proxy=${proxy}></o-embed>
`;

export const Regular = Template.bind({});
Regular.args = {
  src: 'https://twitter.com/silver_birder/status/1176375655237214209',
  height: '800px',
  proxy: 'https://silverbirder-cors-anywhere.herokuapp.com',
};
