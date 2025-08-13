import { capturarDadosDependentes } from "./capturadados.js";
import { capturarDadosTitular } from "./capturadados.js";
import { capturarDadosAgregados } from "./capturadados.js";
import { atualizarOpcoesBeneficiarios } from "./capturadados.js";

document.addEventListener('DOMContentLoaded', (event) => {
    const cremacaoSelect = document.getElementById('cremacaoSelect');
    const cremacaoBeneficiario = document.getElementById('cremacaoBeneficiario');
    const seguroSelect = document.getElementById('seguroSelect');
    const seguroTitular = document.getElementById('seguroTitular');
    const seguroBeneficiario = document.getElementById('seguroBeneficiario');
    const nomeBeneficiarioCremacao = document.getElementById('nomeBeneficiarioCremacao');
    const cpfBeneficiarioCremacao = document.getElementById('cpfBeneficiarioCremacao');
    const dataNascBeneficiarioCremacao = document.getElementById('dataNascBeneficiarioCremacao');
    const parentescoBeneficiarioCremacao = document.getElementById('parentescoBeneficiarioCremacao');
    const nomeTitularSeguro = document.getElementById('nomeTitularSeguro');
    const cpfTitularSeguro = document.getElementById('cpfTitularSeguro');
    const dataNascTitularSeguro = document.getElementById('dataNascTitularSeguro');
    const parentescoTitularSeguro = document.getElementById('parentescoTitularSeguro');
    const nomeBeneficiarioSeguro = document.getElementById('nomeBeneficiarioSeguro');
    const cpfBeneficiarioSeguro = document.getElementById('cpfBeneficiarioSeguro');
    const dataNascBeneficiarioSeguro = document.getElementById('dataNascBeneficiarioSeguro');
    const parentescoBeneficiarioSeguro = document.getElementById('parentescoBeneficiarioSeguro');
    const produtoSelect = document.getElementById('produtoEscolhido')

    cremacaoSelect.addEventListener('change', (event) => {
        if (cremacaoSelect.value == '12') {
            cremacaoBeneficiario.removeAttribute('disabled');
            cremacaoBeneficiario.setAttribute('required', 'true');
            capturarDadosDependentes();
            capturarDadosTitular();
            capturarDadosAgregados();
            atualizarOpcoesBeneficiarios();
        } else {
            cremacaoBeneficiario.setAttribute('disabled', 'true');
            cremacaoBeneficiario.removeAttribute('required');
            cremacaoBeneficiario.value='';
            nomeBeneficiarioCremacao.value='';
            cpfBeneficiarioCremacao.value='';
            dataNascBeneficiarioCremacao.value='';
            parentescoBeneficiarioCremacao.value='';
        }
    });

    seguroSelect.addEventListener('change', (event) => {
        if (seguroSelect.value != '') {
            seguroTitular.removeAttribute('disabled');
            seguroTitular.setAttribute('required', 'true');
            seguroBeneficiario.removeAttribute('disabled');
            seguroBeneficiario.setAttribute('required', 'true');
            capturarDadosDependentes();
            capturarDadosTitular();
            capturarDadosAgregados();
            atualizarOpcoesBeneficiarios();
        } else {
            seguroTitular.setAttribute('disabled', 'true');
            seguroTitular.removeAttribute('required');
            seguroBeneficiario.setAttribute('disabled', 'true');
            seguroBeneficiario.removeAttribute('required');
            seguroTitular.innerHTML='';
            seguroBeneficiario.innerHTML='';
            nomeTitularSeguro.value='';
            cpfTitularSeguro.value='';
            dataNascTitularSeguro.value='';
            parentescoTitularSeguro.value='';
            nomeBeneficiarioSeguro.value='';
            cpfBeneficiarioSeguro.value='';
            dataNascBeneficiarioSeguro.value='';
            parentescoBeneficiarioSeguro.value='';
        }
    });

    produtoSelect.addEventListener('change', (event) => {
        if (produtoSelect.value == '120' || 
    produtoSelect.value == '124' || 
    produtoSelect.value == '128') {
            cremacaoSelect.setAttribute('disabled', 'true');
        } else {
            cremacaoSelect.setAttribute('required', 'true');
            cremacaoSelect.removeAttribute('disabled');
        }
    })
});
