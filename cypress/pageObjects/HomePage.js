import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton(){
    return cy.get("button#navbarAccount");
  }

  static get loginButton(){
    return cy.get("button#navbarLoginButton");
  }

  static get profileMenuOption(){
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get search(){
    return cy.get("#searchQuery");
  }

  static get inputSearch(){
    return cy.get("input#mat-input-0");
  }

  //3
  static get itemLemon(){
    return cy.get("[aria-label='Click for more information about the product']");
  }

  static get itemValidation(){
    return cy.get("[class='ng-star-inserted']");
  }

  //4
  static get itemLemonJuice(){
    return cy.get("[alt='Lemon Juice (500ml)']");
  }

  // static get itemLemonJuiceValidation(){
  //   return cy.get("[class='ng-star-inserted']");
  // }

  //5
  static get itemEggfruitJuice(){
    return cy.get("[alt='Eggfruit Juice (500ml)']");
  }

  static get closeItemButton(){
    return cy.get("button[aria-label='Close Dialog']");
  }

  static get itemStrawberryJuice(){
    return cy.get("[alt='Strawberry Juice (500ml)']");
  }

  static get itemExpandReview(){
    return cy.get("[aria-label='Expand for Reviews']");
  }

  static get commentValidation(){
    return cy.get("div.comment");
  }
}
