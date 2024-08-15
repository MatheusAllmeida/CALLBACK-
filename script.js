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

// Dados das cidades, slots e elementos
const dadosCidades = {
    "CDR-Z": {
        "SLOT 7": ["Pon1 2071", "Pon2 2072", "Pon3 -- " , "Pon4 2074", "Pon5 2075", "Pon6 2076", "Pon7 2077", "Pon8 2078"],
        "SLOT 11": ["Pon1 2111", "Pon2 2112", "Pon3 2113", "Pon4 2114", "Pon5 2015", "Pon6 2116", "Pon7 2117", "Pon8 2118"],
        "SLOT 12": ["Pon1 2121", "Pon2 2122", "Pon3 2123", "Pon4 2124", "Pon5 2125", "Pon6 2126", "Pon7 2127", "Pon8 2128"],
        "SLOT 13": ["Pon1 1131", "Pon2 1132", "Pon3 1133", "Pon4 1134", "Pon5 1135", "Pon6 1136", "Pon7 1137", "Pon8 1138"],
    },

    "IRR": {
        "SLOT 7": ["Pon1 1701", "Pon2 1702", "Pon3 1703", "Pon4 1704", "Pon5 1705" , "Pon6 1706" , "Pon7 1707" ,  "Pon8 1708"],
        "SLOT 8": ["Pon1 1801", "Pon2 1802", "Pon3 1803", "Pon4 1804", "Pon5 1705" , "Pon6 1706" , "Pon7 1707" , "Pon8 1708"],
        "SLOT 9": ["Pon1 1901", "Pon2 1902", "Pon3 1903", "Pon4 1904", "Pon5 1905"],
    },

    "RSL-Z": {
        "SLOT 1": ["Pon2 2012", "Pon3 2013", "Pon4 2014", "Pon5 2015 - 165", "Pon6 2016", "Pon7 2017", "Pon8 2018"],
        "SLOT 2": ["Pon1 2021", "Pon2 2022", "Pon3 2023", "Pon4 2024", "Pon5 2025", "Pon6 2026", "Pon7 2027", "Pon8 2028"],
        "SLOT 3": ["Pon1 2031", "Pon2 2032", "Pon3 2011", "Pon4 2034", "Pon5 2035", "Pon6 2036", "Pon7 2037", "Pon8 2038", "Pon9 2039", "Pon10 2040", "Pon11 2041", "Pon12 2042", "Pon13 2043", "Pon14 2044 - 2027", "Pon15 2045", "Pon16 2056"],
        "SLOT 4": ["Pon1 1041", "Pon2 1042", "Pon3 1043", "Pon4 1044", "Pon5 1045", "Pon6 1046", "Pon7 1047", "Pon8 1048"],
        "SLOT 5": ["Pon1 2051", "Pon2 2052", "Pon3 2053", "Pon4 2054 - 2053", "Pon5 2055", "Pon6 2056", "Pon7 2057", "Pon8 2058"],
        "SLOT 6": ["Pon1 2061", "Pon2 2062", "Pon3 2063", "Pon4 2064", "Pon5 2065", "Pon6 2066", "Pon7 2067", "Pon8 2068"],
        "SLOT 7": ["Pon1 2071", "Pon2 2077", "Pon3 2086", "Pon4 2074", "Pon5 2080", "Pon6 2081", "Pon7 2091", "Pon8 2092"],
        "SLOT 8": ["Pon1 2081", "Pon2 2082", "Pon3 2083", "Pon4 2080", "Pon5 2080 - 2085", "Pon6 2093", "Pon7 2092", "Pon8 2080"],
        "SLOT 11": ["Pon1 2111", "Pon2 2112", "Pon3 2113", "Pon4 2114", "Pon5 2115", "Pon6 2116"],
        "SLOT 13": ["Pon1 2091", "Pon2 2091", "Pon3 2091", "Pon4 2091", "Pon5 2091", "Pon6 1316 - 2091", "Pon7 2091", "Pon8 2091"],
    },
    "CNI-Z": {
        "SLOT 1": ["Pon1 2011", "Pon2 2012", "Pon3 2013", "Pon4 2014", "Pon5 2015", "Pon6 2016", "Pon7 2017", "Pon8 2018"],
        "SLOT 2": ["Pon1 2021", "Pon2 2022", "Pon3 2023", "Pon4 2024", "Pon5 2025", "Pon6 2026", "Pon8 2027"],
        "SLOT 3": ["Pon1 2031", "Pon2 2032", "Pon3 2033", "Pon4 2034", "Pon5 2035", "Pon6 2036", "Pon7 2037", "Pon8 2038"],
        "SLOT 4": ["Pon1 2041", "Pon2 2042", "Pon3 2043", "Pon4 2044", "Pon5 2045", "Pon6 2046", "Pon7 2047", "Pon8 2048"],
        "SLOT 5": ["Pon1 2051", "Pon2 2052", "Pon3 2053", "Pon4 2054", "Pon5 2055", "Pon6 2056", "Pon7 2057", "Pon8 2058"],
        "SLOT 6": ["Pon1 2061", "Pon2 2062", "Pon3 2063", "Pon4 2064", "Pon5 2065", "Pon6 2066", "Pon7 2067", "Pon8 2068"],
        "SLOT 7": ["Pon1 2071", "Pon2 2072", "Pon3 2073", "Pon4 2074", "Pon5 2075", "Pon6 2076", "Pon7 2077", "Pon8 2078"],
        "SLOT 11": ["Pon1 2111", "Pon2 2112", "Pon3 2113", "Pon4 2114", "Pon5 2115", "Pon6 2116", "Pon7 2117", "Pon8 2118"],
        "SLOT 12": ["Pon1 2211", "Pon2 2212", "Pon3 2213", "Pon4 2214", "Pon5 2215", "Pon6 2216", "Pon7 2217", "Pon8 2218"],
        "SLOT 13": ["Pon1 1131", "Pon2 1132", "Pon3 1133", "Pon4 1134", "Pon5 1135", "Pon6 1136", "Pon7 1137", "Pon8 1138"],
        "SLOT 14": ["Pon1 2401", "Pon2 2402", "Pon3 2403", "Pon4 2144", "Pon5 2505", "Pon6 2216", "Pon7 2066", "Pon8 2403 - 2066"],
        "SLOT 15": ["Pon1 2403", "Pon2 2403", "Pon3 2503", "Pon4 2504", "Pon5 2505", "Pon6 2506", "Pon7 2507", "Pon8 2508"],
        "SLOT 16": ["Pon1 2024", "Pon2 2066", "Pon3 2066", "Pon4 2066", "Pon5 1615", "Pon6 2066", "Pon7 2066"],
    }
};


// Função para atualizar os slots com base na cidade selecionada
function atualizarSlots(cidade) {
    const slotSelect = document.querySelector('.slot');
    const listaElementos = document.querySelector('.elementos');

    // Limpar opções anteriores
    slotSelect.innerHTML = '<option value="">Selecione o SLOT</option>';
    listaElementos.innerHTML = '';

    if (cidade && dadosCidades[cidade]) {
        const slots = Object.keys(dadosCidades[cidade]);
        slots.forEach(slot => {
            const option = document.createElement('option');
            option.value = slot;
            option.textContent = slot;
            slotSelect.appendChild(option);
        });

        // Mostrar o seletor de SLOT
        slotSelect.parentElement.style.display = 'block';
        document.getElementById("listaElementos").classList.remove("hidden");
    } else {
        // Esconder o seletor de SLOT se nenhuma cidade for selecionada
        slotSelect.parentElement.style.display = 'none';
        document.getElementById("listaElementos").classList.add("hidden");
    }
}

// Função para atualizar a lista de elementos com base no SLOT selecionado
function mostrarLista(slotSelect) {
    const listaElementos = document.querySelector('.elementos');
    const cidadeSelect = document.querySelector('.cidade');

    const cidade = cidadeSelect.value;
    const slot = slotSelect.value;

    // Limpar elementos anteriores
    listaElementos.innerHTML = '';

    if (cidade && slot && dadosCidades[cidade] && dadosCidades[cidade][slot]) {
        const elementos = dadosCidades[cidade][slot];
        elementos.forEach(elemento => {
            const li = document.createElement('li');
            li.textContent = elemento;
            listaElementos.appendChild(li);
        });

        // Mostrar a lista de elementos
        document.getElementById("listaElementos").classList.remove("hidden");
    } else {
        // Esconder a lista de elementos se nenhuma cidade ou slot for selecionado ou se os dados não estiverem disponíveis
        document.getElementById("listaElementos").classList.add("hidden");
    }
}

// Função para voltar à seleção de cidade e SLOT
function voltar() {
    const formVlans = document.getElementById("formVlans");
    const slotSelect = formVlans.querySelector('.slot');
    const listaElementos = formVlans.querySelector('.elementos');

    // Limpar seleção de SLOT e lista de elementos
    slotSelect.value = '';
    listaElementos.innerHTML = '';

    // Ocultar lista de elementos
    document.getElementById("listaElementos").classList.add("hidden");
}

// Evento para carregar o formulário quando a página é carregada
window.addEventListener('load', function () {
    // Esconder todos os formulários ao carregar a página
    document.querySelectorAll('.form-container').forEach(form => {
        form.classList.add('hidden');
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
        } else if (tipo === 'SemDrop1') {
            camposObrigatorios = [plano, onu];
            if (!verificarCamposPreenchidos(camposObrigatorios)) {
                alert('Por favor, preencha todos os campos obrigatórios antes de copiar.');
                return;
            }
            textoCopiado = `Ativação-FTTX\n\nMateriais:\n01 ROTEADOR WIRELESS: ${plano}\n01 ONU: ${onu}\n01 PATCH CORD`;
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
            .then(() => {
                alert('Informações copiadas para área de transferência');
                // Resetar o formulário após a cópia bem-sucedida
                form.reset();
            })
            .catch(err => console.error('Erro ao copiar texto: ', err));
    });
});

// Adicionar evento de clique aos botões de voltar
document.querySelectorAll('.voltarBtn').forEach(button => {
    button.addEventListener('click', function () {
        const formContainer = this.closest('.form-container');

        // Resetar todos os formulários ao voltar
        resetForms();
    });
});

// Função para resetar todos os formulários
function resetForms() {
    document.querySelectorAll('.formContent').forEach(form => {
        form.reset();
    });
}
