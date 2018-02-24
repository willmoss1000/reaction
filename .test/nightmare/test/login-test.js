const Nightmare = require("nightmare");
require('mocha-generators').install();
const { expect } = require("chai");

const nightmare = Nightmare({ show: true });
const protocol = "http";
const domain = "localhost";
const port = "3000";
let uri = `${protocol}://${domain}`

if (port) {
  uri += `:${port}`;
}


describe("login test", () => {
  it("should log the user in", function*() {
    this.timeout("30s");
    const toolbar = yield nightmare
      .viewport(1024, 728)
      .goto(uri)
      .wait("#reactionAppContainer > div > div.accounts > div > div > div.dropdown-toggle")
      .click("#reactionAppContainer > div > div.accounts > div > div > div.dropdown-toggle")
      .wait(200)
      .type(".email-edit-input", "admin@localhost")
      .type(".password-edit-input", "r3@cti0n")
      .click("#reactionAppContainer > div > div.accounts > div > div > div.accounts-dialog.accounts-layout.dropdown-menu.pull-right > div > div:nth-child(2) > form > div:nth-child(4) > button")
      .wait(2000)
      .evaluate(function () {
        return document.querySelector("#reactionAppContainer > div.reaction-toolbar > nav > div.rui.toolbar-group.left > span > label > div.control-label > span").innerText;
      });
    expect(toolbar).to.equal("Edit mode");
    // done();
      // .end();
      // .then(() => {
      //   // expect(link).to.equal("https://github.com/segmentio/nightmare");
      //   done();
      // });
  });
});
