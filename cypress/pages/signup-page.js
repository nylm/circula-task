class SignupPage {
  constructor() {
    this.selectors = {
      acceptAllButton: '[data-testid="uc-accept-all-button"]',
      cookiesBanner: '[data-testid="uc-container"]',
      countryDropdownInput: "#registration-country-input",
      countryDropdownMenu: '[data-testid="autocomplete-menu-portal"]>ul',
      countrySelectOptions: '[id^="registration-country-item"]',
      shadowContent: '[id="usercentrics-root"]',
    };
  }

  visitSignUpPage() {
    cy.visit("/users/sign_up");
  }

  acceptUserConsent() {
    cy.get(this.selectors.shadowContent)
      .shadow()
      .find(this.selectors.acceptAllButton)
      .click({ position: "top" });

    cy.get(this.selectors.shadowContent).shadow().should("not.exist");
  }

  openCountryDropdown() {
    cy.get(this.selectors.countryDropdownInput).click();
  }

  toggleCountryDropdown() {
    this.openCountryDropdown();
    cy.get(this.selectors.countryDropdownMenu).should("be.visible");
    cy.get(this.selectors.countrySelectOptions).should("have.length", "15");
    this.openCountryDropdown();
    cy.get(this.selectors.countryDropdownMenu).should("not.exist");
  }

  verifyCountryDropdownPresent() {
    cy.get(this.selectors.countryDropdownInput).should("be.visible");
  }

  verifyCountryDefaultSelected(country) {
    cy.get(this.selectors.countryDropdownInput).should("have.value", country);
  }

  verifyAllCountriesInDropdown(countries) {
    countries.forEach((country) => {
      cy.contains(this.selectors.countrySelectOptions, country).should(
        "be.exist"
      );
    });
  }

  selectCountryFromDropdown(country) {
    cy.contains(this.selectors.countrySelectOptions, country).click();
  }

  verifyCountrySelected(country) {
    cy.get(this.selectors.countryDropdownInput).should("have.value", country);
  }
}

export default SignupPage;
