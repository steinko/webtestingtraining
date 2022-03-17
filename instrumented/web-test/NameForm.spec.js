function cov_2mvo0b3yyv() {
  var path = "/Users/steinko/development/cypresstaining/webtestingtraining/cypress/integration/web-test/NameForm.spec.js";
  var hash = "7977735b6da0193caf3275e9776202aa263da954";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/steinko/development/cypresstaining/webtestingtraining/cypress/integration/web-test/NameForm.spec.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 12,
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
          line: 4,
          column: 9
        },
        end: {
          line: 4,
          column: 49
        }
      },
      "3": {
        start: {
          line: 5,
          column: 9
        },
        end: {
          line: 5,
          column: 40
        }
      },
      "4": {
        start: {
          line: 6,
          column: 9
        },
        end: {
          line: 8,
          column: 11
        }
      },
      "5": {
        start: {
          line: 7,
          column: 16
        },
        end: {
          line: 7,
          column: 66
        }
      },
      "6": {
        start: {
          line: 9,
          column: 9
        },
        end: {
          line: 9,
          column: 45
        }
      },
      "7": {
        start: {
          line: 9,
          column: 39
        },
        end: {
          line: 9,
          column: 43
        }
      },
      "8": {
        start: {
          line: 10,
          column: 9
        },
        end: {
          line: 10,
          column: 57
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 42
          },
          end: {
            line: 1,
            column: 43
          }
        },
        loc: {
          start: {
            line: 1,
            column: 48
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 6,
            column: 31
          },
          end: {
            line: 6,
            column: 32
          }
        },
        loc: {
          start: {
            line: 6,
            column: 44
          },
          end: {
            line: 8,
            column: 10
          }
        },
        line: 6
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 9,
            column: 33
          },
          end: {
            line: 9,
            column: 34
          }
        },
        loc: {
          start: {
            line: 9,
            column: 39
          },
          end: {
            line: 9,
            column: 43
          }
        },
        line: 9
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
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7977735b6da0193caf3275e9776202aa263da954"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2mvo0b3yyv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2mvo0b3yyv();
cov_2mvo0b3yyv().s[0]++;
it("should enter John in the Name field", () => {
  cov_2mvo0b3yyv().f[0]++;
  cov_2mvo0b3yyv().s[1]++;
  cy.visit(Cypress.env('HOST'));
  cov_2mvo0b3yyv().s[2]++;
  cy.findByLabelText('Name:').type('John');
  cov_2mvo0b3yyv().s[3]++;
  cy.findByText("Submit").click();
  cov_2mvo0b3yyv().s[4]++;
  cy.on('window:alert', message => {
    cov_2mvo0b3yyv().f[1]++;
    cov_2mvo0b3yyv().s[5]++;
    expect(message).toBe('A name was submitted: John');
  });
  cov_2mvo0b3yyv().s[6]++;
  cy.on('window:confirm', () => {
    cov_2mvo0b3yyv().f[2]++;
    cov_2mvo0b3yyv().s[7]++;
    return true;
  });
  cov_2mvo0b3yyv().s[8]++;
  cy.findAllByDisplayValue('John').should('exist');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hbWVGb3JtLnNwZWMuanMiXSwibmFtZXMiOlsiaXQiLCJjeSIsInZpc2l0IiwiQ3lwcmVzcyIsImVudiIsImZpbmRCeUxhYmVsVGV4dCIsInR5cGUiLCJmaW5kQnlUZXh0IiwiY2xpY2siLCJvbiIsIm1lc3NhZ2UiLCJleHBlY3QiLCJ0b0JlIiwiZmluZEFsbEJ5RGlzcGxheVZhbHVlIiwic2hvdWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWkEsRUFBRSxDQUFDLHFDQUFELEVBQXdDLE1BQU07QUFBQTtBQUFBO0FBRXZDQyxFQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixDQUFUO0FBRnVDO0FBR3ZDSCxFQUFBQSxFQUFFLENBQUNJLGVBQUgsQ0FBbUIsT0FBbkIsRUFBNEJDLElBQTVCLENBQWlDLE1BQWpDO0FBSHVDO0FBSXZDTCxFQUFBQSxFQUFFLENBQUNNLFVBQUgsQ0FBYyxRQUFkLEVBQXdCQyxLQUF4QjtBQUp1QztBQUt2Q1AsRUFBQUEsRUFBRSxDQUFDUSxFQUFILENBQU0sY0FBTixFQUF1QkMsT0FBRCxJQUFhO0FBQUE7QUFBQTtBQUM1QkMsSUFBQUEsTUFBTSxDQUFDRCxPQUFELENBQU4sQ0FBZ0JFLElBQWhCLENBQXFCLDRCQUFyQjtBQUNOLEdBRkQ7QUFMdUM7QUFRdkNYLEVBQUFBLEVBQUUsQ0FBQ1EsRUFBSCxDQUFNLGdCQUFOLEVBQXdCLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBSSxHQUFsQztBQVJ1QztBQVN2Q1IsRUFBQUEsRUFBRSxDQUFDWSxxQkFBSCxDQUF5QixNQUF6QixFQUFpQ0MsTUFBakMsQ0FBd0MsT0FBeEM7QUFFUixDQVhDLENBQUYiLCJzb3VyY2VzQ29udGVudCI6WyJpdChcInNob3VsZCBlbnRlciBKb2huIGluIHRoZSBOYW1lIGZpZWxkXCIsICgpID0+IHtcblx0XG4gICAgICAgICBjeS52aXNpdChDeXByZXNzLmVudignSE9TVCcpKVxuICAgICAgICAgY3kuZmluZEJ5TGFiZWxUZXh0KCdOYW1lOicpLnR5cGUoJ0pvaG4nKVxuICAgICAgICAgY3kuZmluZEJ5VGV4dChcIlN1Ym1pdFwiKS5jbGljaygpXG4gICAgICAgICBjeS5vbignd2luZG93OmFsZXJ0JywgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBleHBlY3QobWVzc2FnZSkudG9CZSgnQSBuYW1lIHdhcyBzdWJtaXR0ZWQ6IEpvaG4nKVxuICAgICAgICAgfSlcbiAgICAgICAgIGN5Lm9uKCd3aW5kb3c6Y29uZmlybScsICgpID0+IHRydWUpO1xuICAgICAgICAgY3kuZmluZEFsbEJ5RGlzcGxheVZhbHVlKCdKb2huJykuc2hvdWxkKCdleGlzdCcpXG5cbn0pXG4iXX0=