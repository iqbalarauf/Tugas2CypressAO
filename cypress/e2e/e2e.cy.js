// Iqbal Abdul Rauf
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Flow 1 - Menambahkan Karyawan Baru', () => {
    beforeEach(() => {
        cy.login('Admin', 'admin123')
    });
    it('Menambahkan Karyawan Baru (Berhasil)', () => {
        cy.visit(`/web/index.php/pim/viewEmployeeList`)
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-header-container > button').click();
        cy.wait(2000);
        cy.get('.oxd-input').eq(1).type('Greesella', {force: true});
        cy.get('.oxd-input').eq(3).type('Adhalia', {force: true});
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
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('Greesella', {force: true});
        cy.wait(2000);
        cy.get('.oxd-autocomplete-dropdown').contains('Greesella Adhalia').click();
        cy.get('.oxd-select-text').eq(1).click();
        cy.get('.oxd-select-dropdown').contains('Enabled').click();

        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(4) > div > div:nth-child(2) > input').type('Greesella12345');
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > div > div:nth-child(2) > input').type('Password123!');
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div:nth-child(2) > div > div:nth-child(2) > input').type('Password123!');
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click();
        cy.wait(2000);
        cy.get('.oxd-toast-content').should('be.visible').and('contain', 'Success');
        cy.screenshot();
    });
    it('Menambahkan Karyawan Baru (Nama Karyawan Sudah Ada)', () => {
        cy.visit(`/web/index.php/pim/viewEmployeeList`)
        cy.wait(2000);
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-header-container > button').click();
        cy.wait(2000);
        cy.get('.oxd-input').eq(1).type('Greesella', {force: true});
        cy.get('.oxd-input').eq(3).type('Adhalia', {force: true});
        cy.get('.oxd-input').eq(4).clear().type('142');
        cy.get('.oxd-button--secondary').click();
        cy.wait(2000);

        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-2.orangehrm-full-width-grid > div > div > span').should('be.visible').and('contain', 'Employee Id already exists');
        cy.screenshot();

    });
});

describe('Flow 2 - Menambahkan Jatah Cuti', () => {
    beforeEach(() => {
        cy.login('Admin', 'admin123')
    });
    it('Menambahkan Jatah Cuti (Berhasil)', () => {
        cy.visit('/')
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(3) > a').click();
        cy.wait(2000);
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(3) > span').click();
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.--active.oxd-topbar-body-nav-tab.--parent > ul > li:nth-child(1) > a').click();
        cy.wait(2000);

        // Add Leave Entitlements
        cy.get('.oxd-select-text').eq(0).click();
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div > div > div:nth-child(2) > div > div > input').type('Greesella', {force: true});
        cy.wait(2000);
        cy.get('.oxd-autocomplete-dropdown').contains('Greesella Adhalia').click();
        cy.get('.oxd-select-text').eq(1).click();
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > div > div').click();
        cy.get('.oxd-select-dropdown').contains('US - Vacation').click();
        
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > div > div').click();
        // cy.get('.oxd-select-text-input').contains('2025-01-01 - 2026-31-01').click();
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(2) > input').clear().type('1');
        cy.get('.oxd-button--secondary').click();
        cy.wait(2000);
        // pop up confirm
        cy.get('#app > div.oxd-overlay.oxd-overlay--flex.oxd-overlay--flex-centered > div > div > div > div.orangehrm-modal-footer > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-button-margin').click();
        cy.wait(2000);
        cy.get('.oxd-toast-content').should('be.visible').and('contain', 'Success');
        cy.screenshot();
    });
    it('Menambahkan Jatah Cuti (Tidak Mengisi Entitlement)', () => {
        // Login
        cy.visit(`/`)

        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(3) > a').click();
        cy.wait(2000);
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(3) > span').click();
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.--active.oxd-topbar-body-nav-tab.--parent > ul > li:nth-child(1) > a').click();
        cy.wait(2000);

        // Add Leave Entitlements
        cy.get('.oxd-select-text').eq(0).click();
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div > div > div:nth-child(2) > div > div > input').type('Greesella', {force: true});
        cy.wait(2000);
        cy.get('.oxd-autocomplete-dropdown').contains('Greesella Adhalia').click();
        cy.get('.oxd-select-text').eq(1).click();
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > div > div').click();
        cy.get('.oxd-select-dropdown').contains('US - Vacation').click();
        
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > div > div').click();
        // cy.get('.oxd-select-text-input').contains('2025-01-01 - 2026-31-01').click();
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(2) > input').clear();
        cy.get('.oxd-button--secondary').click();
        cy.wait(2000);
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(3) > div > span').should('be.visible')
        cy.screenshot();
    });
});

describe('Flow 3 - Karyawan Baru Request Cuti', () => {
    it('Mengajukan Approve Cuti (Karyawan)', () => {
        // Login sebagai Karyawan
        cy.visit(`/`)
        cy.wait(2000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Greesella12345')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Password123!')
        cy.get('.oxd-button').click()
        cy.url().should('include', 'dashboard')

        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(3) > a').click();
        cy.wait(2000);
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(1) > a').click();
        cy.wait(2000);
        cy.get('h6').should('be.visible').and('contain', 'Apply Leave');
        
        // Request Leave
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div').click();
        cy.get('.oxd-select-dropdown').contains('US - Vacation').click();
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').clear().type('2025-12-12');
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').clear().type('2025-13-12');
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(4) > div > div > div > div:nth-child(2) > textarea').type('Cuti untuk liburan akhir tahun', {force: true});
        cy.get('.oxd-button--secondary').click();
        cy.wait(2000);
        cy.get('.oxd-toast-content').should('be.visible').and('contain', 'Success');
        cy.screenshot();
    });
    it('Menyetujui Approve Cuti (Admin)', () => {
        // Login sebagai Karyawan
        cy.visit(`/`)
        cy.wait(2000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.url().should('include', 'dashboard')

        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(3) > a').click();
        cy.wait(2000);
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').type('Greesella', {force: true});
        cy.get('.oxd-autocomplete-dropdown').contains('Greesella Adhalia').click();
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click();

        cy.wait(2000);
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div > div.oxd-table-body > div > div > div:nth-child(9) > div > button.oxd-button.oxd-button--medium.oxd-button--label-success.oxd-table-cell-action-space').contains('Approve').click();
        cy.wait(2000);
        cy.get('.oxd-toast-content').should('be.visible').and('contain', 'Success');
        cy.screenshot();
    });
    it('Mengecek Approve Cuti (Karyawan)', () => {
        // Login sebagai Karyawan
        cy.visit(`/`)
        cy.wait(2000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Greesella12345')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Password123!')
        cy.get('.oxd-button').click()
        cy.url().should('include', 'dashboard')

        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(3) > a').click();
        cy.wait(2000);
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(2) > a').click();
        cy.wait(2000);
        cy.get('h5').should('be.visible').and('contain', 'My Leave List');

        cy.get('.oxd-table-card').should('be.visible').and('contain', 'Scheduled');
        cy.screenshot();
    });
    it('Mengajukan Approve Cuti (Karyawan - Kuota Cuti Habis)', () => {
        // Login sebagai Karyawan
        cy.visit(`/`)
        cy.wait(2000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Greesella12345')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Password123!')
        cy.get('.oxd-button').click()
        cy.url().should('include', 'dashboard')

        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(3) > a').click();
        cy.wait(2000);
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(1) > a').click();
        cy.wait(2000);
        cy.get('h6').should('be.visible').and('contain', 'Apply Leave');
        
        // Request Leave
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div').click();
        cy.get('.oxd-select-dropdown').contains('US - Vacation').click();
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').clear().type('2025-12-12');
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').clear().type('2025-13-12');
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(4) > div > div > div > div:nth-child(2) > textarea').type('Cuti untuk liburan akhir tahun', {force: true});
        cy.get('.oxd-button--secondary').click();

        cy.wait(2000);
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-card-container > form > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(2) > p').should('be.visible').contains('Balance not sufficient');
        cy.screenshot();
    });
});