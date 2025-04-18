describe('Explicit Assertion', () => {
    it('should understand explicit assertions in cypress', () => {
      cy.visit('https://www.letskodeit.com/practice')

      let firstText
      let secondText

      // cy.get('#product').find('tbody tr:nth-child(2)').find('td')
      // .first().then(($first) => {
      //   firstText = $first.text()
      // })

      // cy.get('#product').find('tbody tr:nth-child(3)').find('td')
      // .first().then(($second) => {
      //   secondText = $second.text()
      //   expect(secondText, "Verify first and second text").to.equal(firstText)
      // })

      cy.get(':nth-child(2) > .author-name').then(($first) => {
        firstText = $first.text()
      })

      cy.get(':nth-child(4) > .author-name').then(($second) => {
        secondText = $second.text()
        expect(secondText, "Verify first and second text").to.equal(firstText)
      })


    })
  })