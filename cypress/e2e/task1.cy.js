import SignupPage from "../pages/signup-page";

describe("Sign Up Page Tests", () => {
  const signupPage = new SignupPage();

  beforeEach(() => {});

  it("Verify country dropdown functionality on the sign-up page", () => {
    const COUNTRIES = require("../fixtures/countries.json");

    signupPage.visitSignUpPage();
    signupPage.acceptUserConsent();

    cy.log("verify default selected country: Germany");
    signupPage.verifyCountryDropdownPresent();
    signupPage.verifyCountryDefaultSelected(COUNTRIES.Germany);

    cy.log("verify all countries in dropdown");
    signupPage.openCountryDropdown();
    signupPage.verifyAllCountriesInDropdown(Object.values(COUNTRIES));

    cy.log("select Sweden and verify selected");
    signupPage.selectCountryFromDropdown(COUNTRIES.Sweden);
    signupPage.verifyCountrySelected(COUNTRIES.Sweden);

    cy.log("Open and close country dropdown");
    signupPage.toggleCountryDropdown();
  });
});
