function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let vezes = document.getElementById('txtv')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um numero.')
    } else {
            let n = Number(num.value)
            let v = Number(vezes.value)
            let cont = 1
            tab.innerHTML = ''
            while (cont <= v) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            tab.appendChild(item)
            cont++
        }
        }
    }
    
