import { html, TemplateResult } from 'lit';
import '../src/o-embed.js';
import { OEmbedRepository } from '../src/repositories/index.js';
import { OEmbedRepositoryInterface } from '../src/types.js';

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
  repository: OEmbedRepositoryInterface;
}

const Template: Story<ArgTypes> = ({
  src,
  height,
  repository,
}: ArgTypes) => html`
  <o-embed .src=${src} .height=${height} .repository=${repository}></o-embed>
`;

export const Regular = Template.bind({});
Regular.args = {
  src: 'http://hatenablog.com/oembed?url=http://staff.hatenablog.com/entry/2014/08/29/141633',
  height: '200px',
  repository: new OEmbedRepository(
    'https://silverbirder-cors-anywhere.herokuapp.com'
  ),
};
