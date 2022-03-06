import { html, TemplateResult } from 'lit';
import '../src/o-embed.js';

export default {
  title: 'OEmbed2',
  component: 'o-embed2',
  argTypes: {
    src: { control: 'text' },
    proxy: { control: 'text' },
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
}

const Template: Story<ArgTypes> = ({ src }: ArgTypes) => html`
  <o-embed2
    .src=${src}
  >
  </o-embed>
`;

export const Regular = Template.bind({});
Regular.args = {
  // src: 'https://publish.twitter.com/oembed?url=https://twitter.com/silver_birder/status/1475262255818473473',
  src: 'https://twitter.com/silver_birder/status/1475262255818473473',
};
