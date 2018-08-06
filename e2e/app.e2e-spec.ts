import { SuperCardAngularPage } from './app.po';

describe('super-card-angular App', function() {
  let page: SuperCardAngularPage;

  beforeEach(() => {
    page = new SuperCardAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
