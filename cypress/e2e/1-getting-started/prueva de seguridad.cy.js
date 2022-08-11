/// <reference types="cypress" />

describe('Probar el agregar un nuevo servicio', () => {
    it(' Prueva de seguridad Rutas', () => {
        cy.visit('/cita'); //
       // cy.visit('/auth');
        cy.visit('/servicios');
        cy.visit('/admin');
        cy.visit('/servicios/actualizar?id=2');
    });
});