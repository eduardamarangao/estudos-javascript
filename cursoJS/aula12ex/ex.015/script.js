function Verificar() {  
    var data = new Date()
    var ano = data.getFullYear()
    var fano  = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) { //ou seja, se marcar masculino
            gênero = 'Homem'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'criancagaroto.png')
            } else if (idade < 26) {
                img.setAttribute('src', 'jovem.png')
            } else if (idade < 52) {
                img.setAttribute('src', 'homem.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
        } else { //se marcar feminino
            gênero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'criancagarota.png')
            } else if (idade < 27) {
                img.setAttribute('src', 'jovemgarota.png')
            } else if (idade < 52) {
                img.setAttribute('src', 'mulher.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.color = 'black'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com <strong>${idade}</strong> anos.`
        res.appendChild(img)
    }
}