const Nightmare = require("nightmare");
const chai = require("chai");
const expect = chai.expect;

describe("login test", () => {
  it("should log the user in", function(done) {
    this.timeout("30s");

    const nightmare = Nightmare({ show: true });
    nightmare
      .viewport(1024, 728)
      .goto("http://localhost:80")
      .wait(5000)
      .wait("#reactionAppContainer > div > div.accounts > div > div > div.dropdown-toggle")
      .click("#reactionAppContainer > div > div.accounts > div > div > div.dropdown-toggle")
      .wait(200)
      .type(".email-edit-input", "admin@localhost")
      .type(".password-edit-input", "r3@cti0n")
      .click(
        "#reactionAppContainer > div > div.accounts > div > div > div.accounts-dialog.accounts-layout.dropdown-menu.pull-right > div > div:nth-child(2) > form > div:nth-child(4) > button"
      )
      .wait(15000)
      .end()
      .then(link => {
        //expect(link).to.equal("https://github.com/segmentio/nightmare");
        done();
      });
  });
});
