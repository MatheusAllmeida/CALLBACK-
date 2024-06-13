document.addEventListener('DOMContentLoaded', () => {
    const semDropBtn = document.getElementById('semDropBtn');
    const comDropBtn = document.getElementById('comDropBtn');
    const formSemDrop = document.getElementById('formSemDrop');
    const formComDrop = document.getElementById('formComDrop');

    semDropBtn.addEventListener('click', () => {
        formSemDrop.classList.toggle('hidden');
        formComDrop.classList.add('hidden');
    });

    comDropBtn.addEventListener('click', () => {
        formComDrop.classList.toggle('hidden');
        formSemDrop.classList.add('hidden');
    });
});

function copiarInformacoes(formTipo) {
    let info = '';

    if (formTipo === 'SemDrop') {
        const tipoCaixaAtendimento = document.getElementById('caixaAtendimentoSemDrop').value;
        const caixaAtendimento = document.getElementById('caixaAtendimentoSemDropInput').value;
        const olt = document.getElementById('oltSemDrop').value;
        const localizacao = document.getElementById('localizacaoSemDrop').value;
        const caboDrop = document.getElementById('caboDropSemDrop').value;
        const plano = document.getElementById('planoSemDrop').value;
        const onu = document.getElementById('onuSemDrop').value;
        const patchCord = document.getElementById('patchCordSemDrop').value;
        const identificarCliente = document.getElementById('identificarClienteSemDrop').value;

        info = `
        Tipo Caixa de Atendimento: ${tipoCaixaAtendimento}
        Caixa de Atendimento: ${caixaAtendimento}
        OLT: ${olt}
        Localização: ${localizacao}
        Cabo Drop (metros): ${caboDrop}
        Plano a ser contratado: ${plano}
        01 ONU: ${onu}
        01 PATCH CORD: ${patchCord}
        Precisa identificar cliente? ${identificarCliente}
        `;
    } else if (formTipo === 'ComDrop') {
        const dropExistente = document.getElementById('DropExistenteComDrop').value;
        const tipoCaixaAtendimento = document.getElementById('tipoCaixaAtendimentoComDrop').value;
        const caixaAtendimento = document.getElementById('caixaAtendimentoComDropInput').value;
        const olt = document.getElementById('oltComDrop').value;
        const localizacao = document.getElementById('localizacaoComDrop').value;
        const caboDrop = document.getElementById('caboDropComDrop').value;
        const plano = document.getElementById('planoComDrop').value;
        const onu = document.getElementById('onuComDrop').value;
        const patchCord = document.getElementById('patchCordComDrop').value;
        const identificarCliente = document.getElementById('identificarClienteComDrop').value;

        info = `
        Nome do DROP Existente: ${dropExistente}
        Tipo Caixa de Atendimento: ${tipoCaixaAtendimento}
        Caixa de Atendimento: ${caixaAtendimento}
        OLT: ${olt}
        Localização: ${localizacao}
        Cabo Drop (metros): ${caboDrop}
        Plano a ser contratado: ${plano}
        01 ONU: ${onu}
        01 PATCH CORD: ${patchCord}
        Precisa identificar cliente? ${identificarCliente}
        `;
    }

    navigator.clipboard.writeText(info.trim()).then(() => {
        alert('Informações copiadas para a área de transferência!');
    }, () => {
        alert('Falha ao copiar informações.');
    });
}

function limparFormulario(formTipo) {
    if (formTipo === 'SemDrop') {
        document.getElementById('formSemDropContent').reset();
    } else if (formTipo === 'ComDrop') {
        document.getElementById('formComDropContent').reset();
    }
}
