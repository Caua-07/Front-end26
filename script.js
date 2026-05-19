// =========/================
// EXERCÍCIO 1
// =========================

function validarCPF(){

    let cpf = document.getElementById("cpf").value;

    cpf = cpf.replace(/\D/g, '');

    let resultado = document.getElementById("resultadoCPF");

    if(cpf.length !== 11){

        resultado.innerHTML = "CPF inválido";
        resultado.style.color = "red";

        return;
    }

    resultado.innerHTML = "CPF válido";
    resultado.style.color = "green";
}


// =========================
// EXERCÍCIO 2
// =========================

const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

celsius.addEventListener("input", ()=>{

    let c = Number(celsius.value);

    let f = (c * 9/5) + 32;

    fahrenheit.value = f.toFixed(2);
});

fahrenheit.addEventListener("input", ()=>{

    let f = Number(fahrenheit.value);

    let c = (f - 32) * 5/9;

    celsius.value = c.toFixed(2);
});


// =========================
// EXERCÍCIO 3
// =========================

function calcularMedia(){

    let nome = document.getElementById("nome").value;

    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);

    let media = (n1 + n2 + n3) / 3;

    let resultado = document.getElementById("resultadoMedia");

    if(media >= 7){

        resultado.innerHTML = `${nome} está APROVADO.<br>Média: ${media.toFixed(2)}`;
        resultado.style.color = "blue";

    }else if(media >= 4){

        let falta = 10 - media;

        resultado.innerHTML = `
            ${nome} está em EXAME.<br>
            Média: ${media.toFixed(2)}<br>
            Falta ${falta.toFixed(2)} para chegar em 10
        `;

        resultado.style.color = "green";

    }else{

        resultado.innerHTML = `${nome} está REPROVADO.<br>Média: ${media.toFixed(2)}`;
        resultado.style.color = "red";
    }
}

// =========================
// EXERCÍCIO 4
// =========================

function calcularTaxas(){

    let bandeira = document.getElementById("bandeira").value;

    let valor = Number(document.getElementById("valorVenda").value);

    let parcelas = Number(document.getElementById("parcelas").value);

    let taxa = 0;

    switch(bandeira){

        case "visa":
            taxa = valor * 0.02;
        break;

        case "master":
            taxa = valor * 0.0185;
        break;

        case "elo":
            taxa = valor * 0.03;
        break;
    }

    let juros = valor * (0.015 * parcelas);

    let taxaMensal = parcelas * 12.50;

    let total = valor + taxa + juros + taxaMensal;

    let valorParcela = total / parcelas;

    document.getElementById("resultadoTaxas").innerHTML = `
        Taxa da Bandeira: R$ ${taxa.toFixed(2)} <br>
        Juros: R$ ${juros.toFixed(2)} <br>
        Taxa Mensal: R$ ${taxaMensal.toFixed(2)} <br>
        Parcela: R$ ${valorParcela.toFixed(2)}
    `;
}

// =========================
// EXERCÍCIO 5
// =========================

function adicionarConvidado(){

    let nome = document.getElementById("convidado").value.trim();

    if(nome === ""){
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = nome;

    let concluir = document.createElement("button");
    concluir.innerText = "Concluir";

    concluir.onclick = ()=>{
        span.classList.toggle("riscado");
    }

    let editar = document.createElement("button");
    editar.innerText = "Editar";

    editar.onclick = ()=>{

        let novo = prompt("Digite o novo nome:");

        if(novo){
            span.innerText = novo;
        }
    }

    let excluir = document.createElement("button");
    excluir.innerText = "Excluir";

    excluir.onclick = ()=>{
        li.remove();
    }

    li.appendChild(span);
    li.appendChild(concluir);
    li.appendChild(editar);
    li.appendChild(excluir);

    document.getElementById("listaConvidados").appendChild(li);

    document.getElementById("convidado").value = "";
}

// =========================
// EXERCÍCIO 6
// =========================

function calcularEvento(){

    let pacote = Number(document.getElementById("pacote").value);

    let pessoas = Number(document.getElementById("pessoas").value);

    let bruto = pacote * pessoas;

    let taxa = bruto * 0.10;

    let total = bruto + taxa;

    let desconto = 0;

    if(pessoas > 100){

        desconto = total * 0.05;

        total -= desconto;
    }

    document.getElementById("resultadoEvento").innerHTML = `
        Custo Bruto: R$ ${bruto.toFixed(2)} <br>
        Taxa de Serviço: R$ ${taxa.toFixed(2)} <br>
        Desconto: R$ ${desconto.toFixed(2)} <br>
        Total Final: R$ ${total.toFixed(2)}
    `;
}

// =========================
// EXERCÍCIO 7
// =========================

function validarCartao(){

    let numero = document.getElementById("cartao").value;

    numero = numero.replace(/\D/g, '');

    let resultado = document.getElementById("resultadoCartao");

    if(numero.length < 13 || numero.length > 16){

        resultado.innerHTML = "Número inválido";
        resultado.style.color = "red";

        return;
    }

    let soma = 0;
    let alternar = false;

    for(let i = numero.length - 1; i >= 0; i--){

        let n = parseInt(numero[i]);

        if(alternar){

            n *= 2;

            if(n > 9){
                n -= 9;
            }
        }

        soma += n;

        alternar = !alternar;
    }

    let valido = soma % 10 === 0;

    let bandeira = "Desconhecida";

    if(numero.startsWith("4")){
        bandeira = "Visa";
    }else if(numero.startsWith("5")){
        bandeira = "MasterCard";
    }

    resultado.innerHTML = `
        Status: ${valido ? "Válido" : "Inválido"} <br>
        Bandeira: ${bandeira}
    `;

    resultado.style.color = valido ? "green" : "red";
}

