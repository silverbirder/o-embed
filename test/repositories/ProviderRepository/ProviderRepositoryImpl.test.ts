import { ProviderRepository } from '../../../src/repositories/index.js';

describe('ProviderRepositoryImpl', () => {
  it('invoke', async () => {
    // Arrange
    const repository = new ProviderRepository('');
    // Act
    const a = await repository.invoke('');

    // Assert
    console.log(a);
  });
});
