// Função para resetar todos os formulários
function resetForms() {
    document.querySelectorAll('.form-container form').forEach(form => {
        form.reset();
    });
}

// Adicionar evento de clique aos botões de alternância
document.querySelectorAll('.toggleBtn').forEach(button => {
    button.addEventListener('click', function () {
        const target = this.dataset.target;

        // Resetar todos os formulários antes de esconder
        resetForms();

        // Esconder todos os formulários
        document.querySelectorAll('.form-container').forEach(form => {
            form.classList.add('hidden');
        });

        // Mostrar o formulário alvo
        document.getElementById(`form${target}`).classList.remove('hidden');
        // Esconder os botões de alternância
        document.getElementById('toggleButtons').classList.add('hidden');
    });
});

// Adicionar evento de clique aos botões de voltar
document.querySelectorAll('.voltarBtn').forEach(button => {
    button.addEventListener('click', function () {
        // Esconder o formulário atual
        const form = this.closest('.form-container');
        form.classList.add('hidden');

        // Mostrar os botões de alternância
        document.getElementById('toggleButtons').classList.remove('hidden');

        // Resetar todos os formulários
        resetForms();
    });
});

// Função para verificar se todos os campos obrigatórios estão preenchidos
function verificarCamposPreenchidos(campos) {
    return campos.every(campo => campo.trim() !== '');
}

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
        let caboDrop = parseInt(form.querySelector('.caboDrop')?.value, 10) || 0;
        caboDrop += 40;
        caboDrop = Math.round(caboDrop / 10) * 10;
        const plano = form.querySelector('.plano')?.value || '';
        const identificarCliente = form.querySelector('.identificarCliente')?.value || '';
        const onu = form.querySelector('.onu')?.value || '';
        const observacao = form.querySelector('.observacao')?.value || '';
        const atenuadoCaixa = form.querySelector('.atenuadoCaixa')?.value || '';
        const usadoVaga = form.querySelector('.usadoVaga')?.value || '';
        const dropExistente = form.querySelector('.dropExistente')?.value || '';

        let camposObrigatorios;

        // Verificar os campos obrigatórios com base no tipo de formulário
        if (tipo === 'SemDrop') {
            camposObrigatorios = [tipoCaixaAtendimento, caixaAtendimento, olt, localizacao, plano, identificarCliente, onu];
            if (!verificarCamposPreenchidos(camposObrigatorios)) {
                alert('Por favor, preencha todos os campos obrigatórios antes de copiar.');
                return;
            }
            textoCopiado = `Ativação-FTTX (sem drop)\n\nTipo Caixa de Atendimento: ${tipoCaixaAtendimento}\nCaixa de Atendimento: ${caixaAtendimento}\nOLT: ${olt}\nLocalização: ${localizacao}\n\nMateriais:\nCabo Drop: ${caboDrop} metros\n01 ROTEADOR WIRELESS: ${plano}\n01 ONU: ${onu}\n01 PATCH CORD\nIdentificar Cliente: ${identificarCliente}`;
        } else if (tipo === 'ComDrop') {
            camposObrigatorios = [tipoCaixaAtendimento, caixaAtendimento, olt, localizacao, plano, identificarCliente, onu, dropExistente];
            if (!verificarCamposPreenchidos(camposObrigatorios)) {
                alert('Por favor, preencha todos os campos obrigatórios antes de copiar.');
                return;
            }
            textoCopiado = `Ativação-FTTX (com drop)\n\nPossivelmente existe drop em nome de: ${dropExistente}\nTipo Caixa de Atendimento: ${tipoCaixaAtendimento}\nCaixa de Atendimento: ${caixaAtendimento}\nOLT: ${olt}\nLocalização: ${localizacao}\n\nMateriais:\nCabo Drop: ${caboDrop} metros\n01 ROTEADOR WIRELESS: ${plano}\n01 ONU: ${onu}\n01 PATCH CORD\nIdentificar Cliente: ${identificarCliente}`;
        } else if (tipo === 'MudSemDrop') {
            camposObrigatorios = [tipoCaixaAtendimento, caixaAtendimento, olt, localizacao, plano, identificarCliente, onu];
            if (!verificarCamposPreenchidos(camposObrigatorios)) {
                alert('Por favor, preencha todos os campos obrigatórios antes de copiar.');
                return;
            }
            textoCopiado = `Mudança de endereço (sem drop)\n\nTipo Caixa de Atendimento: ${tipoCaixaAtendimento}\nCaixa de Atendimento: ${caixaAtendimento}\nOLT: ${olt}\nLocalização: ${localizacao}\n\nMateriais:\nCabo Drop: ${caboDrop} metros\n01 ROTEADOR WIRELESS: ${plano}\n01 ONU: ${onu}\n01 PATCH CORD\nIdentificar Cliente: ${identificarCliente}`;
        } else if (tipo === 'MudComDrop') {
            camposObrigatorios = [tipoCaixaAtendimento, caixaAtendimento, olt, localizacao, plano, identificarCliente, onu, dropExistente];
            if (!verificarCamposPreenchidos(camposObrigatorios)) {
                alert('Por favor, preencha todos os campos obrigatórios antes de copiar.');
                return;
            }
            textoCopiado = `Mudança de endereço (com drop)\n\nPossivelmente existe drop em nome de: ${dropExistente}\nTipo Caixa de Atendimento: ${tipoCaixaAtendimento}\nCaixa de Atendimento: ${caixaAtendimento}\nOLT: ${olt}\nLocalização: ${localizacao}\n\nMateriais:\nCabo Drop: ${caboDrop} metros\n01 ROTEADOR WIRELESS: ${plano}\n01 ONU: ${onu}\n01 PATCH CORD\nIdentificar Cliente: ${identificarCliente}`;
        } else if (tipo === 'Atenuacao') {
            camposObrigatorios = [atenuadoCaixa, usadoVaga];
            if (!verificarCamposPreenchidos(camposObrigatorios)) {
                alert('Por favor, preencha todos os campos obrigatórios antes de copiar.');
                return;
            }
            textoCopiado = `Tipo: Atenuação\n\nObservação:\nAtenuado caixa: ${atenuadoCaixa}, usado vaga em nome de: ${usadoVaga}`;
        }

        if (plano.includes('.')) {
            textoCopiado += '\n-01 ROTEADOR WIRELESS SEGUNDO PONTO MESH';
        }

        navigator.clipboard.writeText(textoCopiado)
            .then(() => alert('Informações copiadas para área de transferência'))
            .catch(err => console.error('Erro ao copiar texto: ', err));
    });

    button.addEventListener('click', function () {
        const form = this.closest('.form-container');

        // Resetar todos os formulários ao voltar
        resetForms();
    });
});
