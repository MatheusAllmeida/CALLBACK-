// Adicionar evento de clique aos botões de copiar
document.querySelectorAll('.copiarBtn').forEach(button => {
    button.addEventListener('click', function () {
        const form = this.closest('.formContent');
        const tipo = form.dataset.type;
        let textoCopiado = '';

        const tipoCaixaAtendimento = form.querySelector('.tipoCaixaAtendimento')?.value || '';
        const caixaAtendimento = form.querySelector('.caixaAtendimento')?.value || '';
        const olt = form.querySelector('.olt')?.value || '';
        const localizacao = form.querySelector('.localizacao')?.value || '';
        let caboDrop = parseFloat(form.querySelector('.caboDrop')?.value) || 0;
        caboDrop += 40;
        caboDrop = Math.round(caboDrop / 10) * 10; // Arredonda para o múltiplo de 10 mais próximo
        const plano = form.querySelector('.plano')?.value || '';
        const identificarCliente = form.querySelector('.identificarCliente')?.value || '';
        const onu = form.querySelector('.onu')?.value || '';
        const observacao = form.querySelector('.observacao')?.value || '';
        const atenuadoCaixa = form.querySelector('.atenuadoCaixa')?.value || '';
        const usadoVaga = form.querySelector('.usadoVaga')?.value || '';

        if (tipo === 'SemDrop') {
            textoCopiado = `Ativação-FTTX (sem drop)\n\nTipo Caixa de Atendimento: ${tipoCaixaAtendimento}\nCaixa de Atendimento: ${caixaAtendimento}\nOLT: ${olt}\nLocalização: ${localizacao}\n\nMateriais:\nCabo Drop: ${caboDrop} metros\n01 ROTEADOR WIRELESS: ${plano}\n01 ONU: ${onu}\n01 PATCH CORD\nIdentificar Cliente: ${identificarCliente}`;
        } else if (tipo === 'ComDrop') {
            const dropExistente = form.querySelector('.dropExistente')?.value || '';
            textoCopiado = `Ativação-FTTX (com drop)\n\nPossivelmente existe drop em nome de: ${dropExistente}\nTipo Caixa de Atendimento: ${tipoCaixaAtendimento}\nCaixa de Atendimento: ${caixaAtendimento}\nOLT: ${olt}\nLocalização: ${localizacao}\n\nMateriais:\nCabo Drop: ${caboDrop} metros\n01 ROTEADOR WIRELESS: ${plano}\n01 ONU: ${onu}\n01 PATCH CORD\nIdentificar Cliente: ${identificarCliente}`;
        } else if (tipo === 'MudSemDrop') {
            textoCopiado = `Mudança de endereço (sem drop)\n\nTipo Caixa de Atendimento: ${tipoCaixaAtendimento}\nCaixa de Atendimento: ${caixaAtendimento}\nOLT: ${olt}\nLocalização: ${localizacao}\n\nMateriais:\nCabo Drop: ${caboDrop} metros\n01 ROTEADOR WIRELESS: ${plano}\n01 ONU: ${onu}\n01 PATCH CORD\nIdentificar Cliente: ${identificarCliente}`;
        } else if (tipo === 'MudComDrop') {
            const dropExistente = form.querySelector('.dropExistente')?.value || '';
            textoCopiado = `Ativação-FTTX (com drop)\n\nPossivelmente existe drop em nome de: ${dropExistente}\nTipo Caixa de Atendimento: ${tipoCaixaAtendimento}\nCaixa de Atendimento: ${caixaAtendimento}\nOLT: ${olt}\nLocalização: ${localizacao}\n\nMateriais:\nCabo Drop: ${caboDrop} metros\n01 ROTEADOR WIRELESS: ${plano}\n01 ONU: ${onu}\n01 PATCH CORD\nIdentificar Cliente: ${identificarCliente}`;
        } else if (tipo === 'Atenuacao') {
            textoCopiado = `Tipo: Atenuação\n\nObservação:\nAtenuado caixa: ${atenuadoCaixa}, usado vaga em nome de: ${usadoVaga}`;
        }

        if (plano.includes('.')) {
            textoCopiado += '\n-01 ROTEADOR WIRELESS SEGUNDO PONTO MESH';
        }

        navigator.clipboard.writeText(textoCopiado)
            .then(() => alert('Informações copiadas para área de transferência'))
            .catch(err => console.error('Erro ao copiar texto: ', err));
    });
});
