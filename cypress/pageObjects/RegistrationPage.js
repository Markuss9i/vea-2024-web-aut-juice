export class RegistrationPage {
    static get url() {
        return "/#/register";
    }

    static get emailField(){
        return cy.get("input#emailControl");
    }

    static get passwordField(){
        return cy.get("input#passwordControl");
    }

    static get repeatPasswordField(){
        return cy.get("input#repeatPasswordControl");
    }

    static get securityMenu(){
        return cy.get('[name="securityQuestion"]');
    }

    static get securityQuestionPet(){
        return cy.get("#mat-option-9");
    }

    static get securityAnswerField(){
        return cy.get("input#securityAnswerControl");
    }

    static get registerButton(){
        return cy.get("button#registerButton");
    }



}