let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){//esta função foi criada com os dados la de baixo da função adicionar()
    if (Number(n) >= 1 && Number(n) <= 100){ //se o número digitado for maior e igual a 1 e menor e igual 100
        return true //retorne verdadeiro
    }else{//caso contrário
        return false//retorne falso
    }
}

function inLista(n, l){//esta função foi criada com os dados la de baixo da função adicionar()
    if (l.indexOf(Number(n)) != -1){//se na lista o valor procurado de n for diferente de -1
        return true//retorne verdadeiro
    }else{//caso contrário
        return false//retorne falso
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){//função isNumero e inLista criada com o número que for digitado ex: isNumero(8) >> este será o valor de n da function acima isNumero e função inLista ex: inLista(8, [])

    valores.push(Number(num.value))//no meu vetor adicione o número preenchido
    let item = document.createElement('option')//criar um elemento option no meu select
    item.text = `Valor ${num.value} adicionado`//mostrando texto no option
    lista.appendChild(item)//na lista mostre os dados filho do option


    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    num.value = ''//limpar o input quando for preenchido e adicionado
    num.focus()//deixar o mouse pressionado depois limpado o imput
    res.innerHTML = ''
}

function finalizar(){
    if (valores.length == 0){//se os elementos do vetor for igual a 0
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let tot = valores.length //mostre quantos elementos temos no vetor valores
        let maior = valores[0]//maior - indice 0 do vetor
        let menor = valores[0]//menor - indice 0 do vetor
        let soma = 0
        let media = 0

        for (let pos in valores){//crinado let pos - para posição dentro do vetor
            soma += valores[pos]//soma recebe ele mesmo mais valores da pos - irá percorrer um por um e somar
            if (valores[pos] > maior)//se os valores percorridos no vetor for maior que o indice 0
                maior = valores[pos]//maior recebe valore indicado
            if (valores[pos] < menor)//se os valores percorridos no vetor for menor que o indice 0
                menor = valores[pos]//menor recebe valore indicado
        }
        
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}