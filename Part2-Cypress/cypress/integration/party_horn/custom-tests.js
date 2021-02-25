describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider')
    .then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume number changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number')
    .then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Actual volume changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound')
    .then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and sound sources change when radio button changed', () => {
    // Air horn
    cy.get('#radio-air-horn').check();
    cy.get('#sound-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/air-horn.svg');
    })
    cy.get('#horn-sound')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/air-horn.mp3');
    })

    // Car horn
    cy.get('#radio-car-horn').check();
    cy.get('#sound-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/car.svg');
    })
    cy.get('#horn-sound')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/car-horn.mp3');
    })

    // Air horn
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    })
    cy.get('#horn-sound')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    })   
  });

  it('Volume icon changes when volume increases', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    })

    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    })

    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    })

    cy.get('#volume-number').clear().type('67');
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    })
  });

  it('Honk button is disabled when text input empty or non-number', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn')
    .then(($el) => {
      expect($el).to.have.attr('disabled');
    });

    cy.get('#volume-number').clear().type('a');
    cy.get('#honk-btn')
    .then(($el) => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Error shown when input is outside range', () => {
    cy.get('#volume-number').clear().type('101').type('{enter}');
    cy.get('#volume-number:invalid').should("have.length", 1);
  });
});
