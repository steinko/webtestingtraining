function cov_2n0pbclz7p() {
  var path = "/Users/steinko/development/cypresstaining/webtestingtraining/cypress/integration/web-test/ProfileForm.spec.js";
  var hash = "87fad24d402454f229344bcf10a9f4a2f0e9b8de";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/steinko/development/cypresstaining/webtestingtraining/cypress/integration/web-test/ProfileForm.spec.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 15,
          column: 2
        }
      },
      "1": {
        start: {
          line: 3,
          column: 9
        },
        end: {
          line: 3,
          column: 38
        }
      },
      "2": {
        start: {
          line: 5,
          column: 9
        },
        end: {
          line: 5,
          column: 46
        }
      },
      "3": {
        start: {
          line: 7,
          column: 9
        },
        end: {
          line: 7,
          column: 69
        }
      },
      "4": {
        start: {
          line: 8,
          column: 9
        },
        end: {
          line: 8,
          column: 70
        }
      },
      "5": {
        start: {
          line: 10,
          column: 9
        },
        end: {
          line: 10,
          column: 49
        }
      },
      "6": {
        start: {
          line: 12,
          column: 9
        },
        end: {
          line: 12,
          column: 74
        }
      },
      "7": {
        start: {
          line: 13,
          column: 9
        },
        end: {
          line: 13,
          column: 66
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 53
          },
          end: {
            line: 1,
            column: 54
          }
        },
        loc: {
          start: {
            line: 1,
            column: 59
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "87fad24d402454f229344bcf10a9f4a2f0e9b8de"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2n0pbclz7p = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2n0pbclz7p();
cov_2n0pbclz7p().s[0]++;
it.skip("should toggel display and hide of details", () => {
  cov_2n0pbclz7p().f[0]++;
  cov_2n0pbclz7p().s[1]++;
  cy.visit(Cypress.env('HOST'));
  cov_2n0pbclz7p().s[2]++;
  cy.findByText('Hide Details').click();
  cov_2n0pbclz7p().s[3]++;
  expect(cy.findByText("Display Details")).toBeInTheDocument();
  cov_2n0pbclz7p().s[4]++;
  expect(cy.findByText("Hide Details")).not.toBeInTheDocument();
  cov_2n0pbclz7p().s[5]++;
  cy.findByText("Display Details").click();
  cov_2n0pbclz7p().s[6]++;
  expect(cy.findByText("Display Details")).not.toBeInTheDocument();
  cov_2n0pbclz7p().s[7]++;
  expect(cy.findByText("Hide Details")).toBeInTheDocument();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2ZpbGVGb3JtLnNwZWMuanMiXSwibmFtZXMiOlsiaXQiLCJza2lwIiwiY3kiLCJ2aXNpdCIsIkN5cHJlc3MiLCJlbnYiLCJmaW5kQnlUZXh0IiwiY2xpY2siLCJleHBlY3QiLCJ0b0JlSW5UaGVEb2N1bWVudCIsIm5vdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWkEsRUFBRSxDQUFDQyxJQUFILENBQVEsMkNBQVIsRUFBcUQsTUFBTTtBQUFBO0FBQUE7QUFFbERDLEVBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLENBQVQ7QUFGa0Q7QUFJbERILEVBQUFBLEVBQUUsQ0FBQ0ksVUFBSCxDQUFjLGNBQWQsRUFBOEJDLEtBQTlCO0FBSmtEO0FBTWxEQyxFQUFBQSxNQUFNLENBQUNOLEVBQUUsQ0FBQ0ksVUFBSCxDQUFjLGlCQUFkLENBQUQsQ0FBTixDQUF5Q0csaUJBQXpDO0FBTmtEO0FBT2xERCxFQUFBQSxNQUFNLENBQUNOLEVBQUUsQ0FBQ0ksVUFBSCxDQUFjLGNBQWQsQ0FBRCxDQUFOLENBQXNDSSxHQUF0QyxDQUEwQ0QsaUJBQTFDO0FBUGtEO0FBU2xEUCxFQUFBQSxFQUFFLENBQUNJLFVBQUgsQ0FBYyxpQkFBZCxFQUFpQ0MsS0FBakM7QUFUa0Q7QUFXbERDLEVBQUFBLE1BQU0sQ0FBQ04sRUFBRSxDQUFDSSxVQUFILENBQWMsaUJBQWQsQ0FBRCxDQUFOLENBQXlDSSxHQUF6QyxDQUE2Q0QsaUJBQTdDO0FBWGtEO0FBWWxERCxFQUFBQSxNQUFNLENBQUNOLEVBQUUsQ0FBQ0ksVUFBSCxDQUFjLGNBQWQsQ0FBRCxDQUFOLENBQXNDRyxpQkFBdEM7QUFFUixDQWREIiwic291cmNlc0NvbnRlbnQiOlsiaXQuc2tpcChcInNob3VsZCB0b2dnZWwgZGlzcGxheSBhbmQgaGlkZSBvZiBkZXRhaWxzXCIsICgpID0+IHtcblx0XG4gICAgICAgICBjeS52aXNpdChDeXByZXNzLmVudignSE9TVCcpKVxuICAgICAgICAgXG4gICAgICAgICBjeS5maW5kQnlUZXh0KCdIaWRlIERldGFpbHMnKS5jbGljaygpXG5cbiAgICAgICAgIGV4cGVjdChjeS5maW5kQnlUZXh0KFwiRGlzcGxheSBEZXRhaWxzXCIpKS50b0JlSW5UaGVEb2N1bWVudCgpXG4gICAgICAgICBleHBlY3QoY3kuZmluZEJ5VGV4dChcIkhpZGUgRGV0YWlsc1wiKSkubm90LnRvQmVJblRoZURvY3VtZW50KClcblxuICAgICAgICAgY3kuZmluZEJ5VGV4dChcIkRpc3BsYXkgRGV0YWlsc1wiKS5jbGljaygpXG5cbiAgICAgICAgIGV4cGVjdChjeS5maW5kQnlUZXh0KFwiRGlzcGxheSBEZXRhaWxzXCIpKS5ub3QudG9CZUluVGhlRG9jdW1lbnQoKTtcbiAgICAgICAgIGV4cGVjdChjeS5maW5kQnlUZXh0KFwiSGlkZSBEZXRhaWxzXCIpKS50b0JlSW5UaGVEb2N1bWVudCgpXG4gICAgICAgICBcbn0pXG4iXX0=