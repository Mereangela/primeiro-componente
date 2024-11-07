import { PrimeiroComponentePage } from './app.po';

describe('primeiro-componente App', function() {
  let page: PrimeiroComponentePage;

  beforeEach(() => {
    page = new PrimeiroComponentePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
