import { browser, by, element } from 'protractor';

export class AppPage {
  url: string = 'https://recipe-book-7a044.web.app/recipes';

  navigateTo(): Promise<unknown> {
    return browser.get(this.url) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.id('navbarHeader')).getText() as Promise<string>;
  }

  newRecipeButton() {
    return element(by.xpath("//button[contains(text(),'New Recipe')]"));
  }

  nameTextField() {
    return element(by.id('name'));
  }

  imagePathTextField() {
    return element(by.id('imagePath'));
  }

  descriptionTextField() {
    return element(by.id('description'));
  }

  saveButton() {
    return element(by.xpath("//button[contains(text(),'Save')]"));
  }

  enterNameField(name: string) {
    this.nameTextField().sendKeys(name);
  }
 

}
