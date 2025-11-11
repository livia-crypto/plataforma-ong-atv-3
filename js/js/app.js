import { initSPA } from './spa.js';
import { initFormValidation } from './formValidation.js';

// Inicialização geral da aplicação
document.addEventListener('DOMContentLoaded', () => {
    console.log('Aplicação iniciada...');
    initSPA();
    initFormValidation();
});
