import { html, TemplateResult } from 'lit';
import '../src/o-embed.js';

export default {
  title: 'OEmbed',
  component: 'o-embed',
  argTypes: {
    src: { control: 'text' },
    proxy: { control: 'text' },
    height: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  src?: string;
  proxy?: string;
  height?: string;
}

const Template: Story<ArgTypes> = ({ src, height }: ArgTypes) => html`
  <o-embed .src=${src} .height=${height}> </o-embed>
`;

export const Regular = Template.bind({});
Regular.args = {
  // src: 'https://publish.twitter.com/oembed?url=https://twitter.com/silver_birder/status/1475262255818473473',
  height: '750px',
  // src: 'https://twitter.com/silver_birder/status/1475262255818473473',
  src: 'http://hatenablog.com/oembed?url=http://staff.hatenablog.com/entry/2014/08/29/141633',
};
