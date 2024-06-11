document.getElementById('semDropBtn').addEventListener('click', function () {
    document.getElementById('formSemDrop').classList.remove('hidden');
    document.getElementById('formComDrop').classList.add('hidden');
});

document.getElementById('comDropBtn').addEventListener('click', function () {
    document.getElementById('formSemDrop').classList.add('hidden');
    document.getElementById('formComDrop').classList.remove('hidden');
});

function copiarInformacoes(tipo) {
    let textoCopiado = '';
    if (tipo === 'SemDrop') {
        const tipoCaixaAtendimento = document.getElementById('caixaAtendimentoSemDrop').value;
        const caixaAtendimento = document.getElementById('caixaAtendimentoSemDropInput').value;
        const olt = document.getElementById('oltSemDrop').value;
        const localizacao = document.getElementById('localizacaoSemDrop').value;
        let caboDrop = parseInt(document.getElementById('caboDropSemDrop').value, 10);
        const plano = document.getElementById('planoSemDrop').value;
        const identificarCliente = document.getElementById('identificarClienteSemDrop').value;
        const onu = document.getElementById('onuSemDrop').value;

        // Adicionando 40 metros ao cabo drop e arredondando para o múltiplo de 10 mais próximo
        caboDrop += 40;
        caboDrop = Math.ceil(caboDrop / 10) * 10;

        textoCopiado = `Ativação-FTTX (sem drop)\n\nTipo Caixa de Atendimento: ${tipoCaixaAtendimento}\nCaixa de Atendimento: ${caixaAtendimento}\nOLT: ${olt}\nLocalização: ${localizacao}\n\nMateriais:\nCabo Drop: ${caboDrop}metros\n01 ROTEADOR WIRELESS: ${plano}\n01 ONU:${onu}\n01 PATCH CORD\nIdentificar Cliente: ${identificarCliente}`;

        if (plano.includes('MESH')) {
            textoCopiado += '\n-01 ROTEADOR WIRELESS SEGUNDO PONTO MESH';
        }

        
    } else if (tipo === 'ComDrop') {
        const DropExistenteComDrop = document.getElementById('DropExistenteComDrop').value;
        const tipoCaixaAtendimento = document.getElementById('tipoCaixaAtendimentoComDrop').value;
        const caixaAtendimento = document.getElementById('caixaAtendimentoComDropInput').value;
        const olt = document.getElementById('oltComDrop').value;
        const localizacao = document.getElementById('localizacaoComDrop').value;
        let caboDrop = parseInt(document.getElementById('caboDropComDrop').value, 10);
        const plano = document.getElementById('planoComDrop').value;
        const identificarCliente = document.getElementById('identificarClienteComDrop').value;
        const onu = document.getElementById('onuComDrop').value;

        // Adicionando 40 metros ao cabo drop e arredondando para o múltiplo de 10 mais próximo
        caboDrop += 40;
        caboDrop = Math.ceil(caboDrop / 10) * 10;

        textoCopiado = `Ativação-FTTX (com drop)\n\nPossivelmente exite drop em nome de: ${DropExistenteComDrop}\nTipo Caixa de Atendimento: ${tipoCaixaAtendimento}\nCaixa de Atendimento: ${caixaAtendimento}\nOLT: ${olt}\nLocalização: ${localizacao}\n\nMateriais:\nCabo Drop: ${caboDrop}metros\n01 ROTEADOR WIRELESS: ${plano}\n01 ONU:${onu}\n01 PATCH CORD\nIdentificar Cliente: ${identificarCliente}`;

        if (plano.includes('MESH')) {
            textoCopiado += '\n-01 ROTEADOR WIRELESS SEGUNDO PONTO MESH';
        }
    }

    navigator.clipboard.writeText(textoCopiado)
        .then(() => alert('Informações copiadas para área de transferência'))
        .catch(err => console.error('Erro ao copiar texto: ', err));
}



