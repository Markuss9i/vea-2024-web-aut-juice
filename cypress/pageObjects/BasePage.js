export class BasePage {
  static visit() {
    // return cy.visit(this.url);
    return cy.visit("localhost:3000");
  }
}
