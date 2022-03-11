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
  src: 'http://hatenablog.com/oembed?url=http://staff.hatenablog.com/entry/2014/08/29/141633',
  height: '200px',
  proxy: 'https://silverbirder-cors-anywhere.herokuapp.com',
};
