import { AppPage } from './app.po';
import { browser, logging, element, by} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Recipe Book in Navbar', () => {
    page.navigateTo(); 
    const navbar = element(by.className('navbar-brand'))
    expect(navbar.getText()).toBe('Recipe Book')
    browser.sleep(2000); 
  });

  it('should navigate to New Recipe page', () => {
    page.navigateTo();
    browser.waitForAngularEnabled(true)
    page.newRecipeButton().click();
    expect(page.nameTextField().getText()).toBeFalsy();
    browser.sleep(2000);
  });

  it('should create a new Recipe', () => {
    page.navigateTo();
    browser.waitForAngularEnabled(true);
    page.newRecipeButton().click();
    page.enterNameField('AutoTest_momo');
    element(by.id('imagePath')).sendKeys('xyz');
    element(by.id('description')).sendKeys('AutoTest_testy Nepali food');
    element(by.xpath("//button[contains(text(),'Save')]")).click();
    const newlyAddedRecipe = element(by.xpath("//h4[contains(text(),'AutoTest_momo')]"));
    expect(newlyAddedRecipe.getText()).toEqual('AutoTest_momo');
    browser.sleep(2000);
  })



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
