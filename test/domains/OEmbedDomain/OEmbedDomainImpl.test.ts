import { expect } from '@open-wc/testing';
import { OembedDomain } from '../../../src/domains/index.js';

describe('OEmbedDomain', () => {
  it('create instance', async () => {
    // Arrange
    const mockHtml = '<span>Hello</span>';

    // Act
    const actual = new OembedDomain({
      html: mockHtml,
      height: '0px',
      width: '0px',
    });

    // Assert
    expect(actual.html).to.be.equal(mockHtml);
  });
});
