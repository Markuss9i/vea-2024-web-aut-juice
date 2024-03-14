export class ProfilePage {
    static get url() {
        return "/profile";
    }

    static get emailField() {
        return cy.get('input[name="email"]').invoke('val');
    }

}
