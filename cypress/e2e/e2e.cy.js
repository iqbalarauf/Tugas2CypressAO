describe('UI Testing', () => {
    it('Menambahkan Karyawan Baru', () => {
        // Login
        cy.visit(`/`)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.url().should('include', 'dashboard')

        // Tambah Karyawan
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(2) > a').click();
        cy.wait(2000);
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-header-container > button').click();
        cy.wait(2000);
        cy.get('.oxd-input').eq(1).type('Suleyman', {force: true});
        cy.get('.oxd-input').eq(3).type('Eydenim', {force: true});
        cy.get('.oxd-input').eq(4).clear().type('142');
        cy.get('.oxd-button--secondary').click();
        cy.wait(2000);
        cy.get('.oxd-toast-content').should('be.visible').and('contain', 'Success');
        
        cy.get('.oxd-text').should('be.visible').and('contain', 'Personal Details');

        // Buat Akun Karyawan
        cy.visit(`/web/index.php/pim/viewDefinedPredefinedReports`)
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a').click();
        cy.wait(2000);
        
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-header-container > button').click();
        cy.wait(2000);
        cy.get('.oxd-select-text').eq(0).click();
        cy.get('.oxd-select-dropdown').contains('Admin').click();
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('Suleyman', {force: true});
        cy.wait(2000);
        cy.get('.oxd-autocomplete-dropdown').contains('Suleyman Eydenim').click();
        cy.get('.oxd-select-text').eq(1).click();
        cy.get('.oxd-select-dropdown').contains('Enabled').click();

        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(4) > div > div:nth-child(2) > input').type('Suleyman12345');
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > div > div:nth-child(2) > input').type('Password123!');
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div:nth-child(2) > div > div:nth-child(2) > input').type('Password123!');
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click();
        cy.wait(2000);
        cy.get('.oxd-toast-content').should('be.visible').and('contain', 'Success');
    });
});
