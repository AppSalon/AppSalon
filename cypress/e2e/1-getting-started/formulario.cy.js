/// <reference types="cypress" />

describe('Funcionamiento de los formularios', () => {
    it('Valida página del formulario de crear cuenta', () => {
        cy.visit('/crear-cuenta')

        cy.get('[data-cy="titulo-crear"]').should('exist');
        cy.get('[data-cy="titulo-crear"]').invoke('text').should('equal', 'Crear Cuenta');
        cy.get('[data-cy="titulo-crear"]').invoke('text').should('not.equal', 'Crear Nueva Cuenta');

        cy.get('[data-cy="formulario-crear"]').should('exist');
    });

    it('Llena los campos del formulario', () => {
        cy.get('[data-cy="input-nombre"]').type('Osmar');
        cy.get('[data-cy="input-apellido"]').type('Ramírez');
        cy.get('[data-cy="input-telefono"]').type('2441112873');
        cy.get('[data-cy="input-correo"]').type('hola@hola.com');
        cy.get('[data-cy="input-password"]').type('123456');

        cy.get('[data-cy="formulario-crear"]').submit();
        cy.get('[data-cy="notificacion"]').should('exist');
        cy.get('[data-cy="notificacion"]').invoke('text').should('equal', 'Confirma tu cuenta');
    });
});