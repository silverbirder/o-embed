// import { OembedType } from '../../types.js';
import { ProviderRepositoryInterface } from './ProviderRepositoryInterface.js';

export class ProviderRepositoryImpl implements ProviderRepositoryInterface {
  proxy: String = '';

  provider: String = 'https://oembed.com/providers.json';

  constructor(proxy: String) {
    this.proxy = proxy;
  }

  async invoke(src: String): Promise<any> {
    const json = await (
      await fetch(`${this.proxy}/${this.provider}`, {
        headers: { Origin: 'null' },
      })
    ).json();
    // コードリファクタリング
    return json.filter(
      (j: any) =>
        j.endpoints.filter(
          (e: any) =>
            e?.schemes?.filter((s: any) => {
              const re = new RegExp(s);
              return re.test(src.toString());
            }).length > 0
        ).length > 0
    );
  }
}
