window.addEventListener('load', ocutarBotoes)
function ocutarBotoes(){
    let btn_go = document.querySelector('.btn-go')
    let btn_Qtd = document.querySelector('.btn-Qtd')
    let btn_save = document.querySelector('.btn-save')
    let btn_clean = document.querySelector('.btn-clean')
    btn_Qtd.remove()
    btn_clean.remove()
    btn_go.remove()
    btn_save.remove()

    let divQtd = document.getElementById('div')
    divQtd.classList.toggle('div')
    divQtd.innerText = `NUMERO DE PARTICIPANTES ATÉ O MOMENTO: (${array_names.length})`
}

let array_names = [

    `Nome: Lucineide Felizardo (126)`,

    `Nome: Barbara (23)`, 
    
    `Nome: Barbara (04)`,
    
    `Nome: Barbara (28)`,
    
    `Nome: Barbara (14)`,

    `Nome: Barbara (29)`,

    `Nome: Thalles (08)`,
    
    `Nome: Thalles, (17)`,

    `Nome: Luana(30)`,

    `Nome: Judivan(13)`,

    `Nome: Isac (33)`,

    `Nome: Isael (05)`,

    `Nome: Debora (74)`,

    `Nome: Luan (51)`,

    `Nome: Milton 101)`,

    `Nome: Vanessa (78)`,

    `Nome: Karoline(12)`,

    `Nome: Simone Brito (135)`,

    `Nome: Miguel (77)`,

    `Nome: Michael (07)`,

    `Nome: Eliton (55)`,

    `PREMIADO: (98)`,

    `Paty (27)`,
    
    `Patrícia Docol (11)`,
    `
    Jadeilson (22)`,
    
    `Kaio (37)`,
    
    `Altair (Zezé) (179)`, 
    
    `Valéria (20)`,

    `Luciano (06)`,

    `Isadora (26)`,

    `Jhonatan (32)`,

    `Dikó (63)`,

    `Eduardo (48)`,

    `Daiane (177)`,

    `Cristian (cerâmica) (117)`,
    
    `Bruno (35)`,

    `Arthur (16)`,

    `Gilvanildo 94`,

    `Alisson (02)`,

    `Rafael (25)`,
    
    `Cida (Mariana) (45)`,

    `Jefinho (09)`,

    `Alberto (84)`,

    `Bruno (Leroy) (86)`,

    `Gleydson (15)`,

    `Jean (67)`,

    `Wanderlan (44)`,

    `Pedro Lucas (151)`,

    `Mirek Tales (132)`,

    `Henrique (43)`,

    `Alex (Leroy) (71`,
        
    `Natália (19)`
    ]

    let now = new Date
    let month = now.getMonth()
    let day = now.getDay()+17

    if(day > 31) {
        month += 1
        day = 1
    }
switch  (month) {
    case 1-1:
        month = 'Janeiro'
        break
    case 2-1:
        month = 'Fevereiro'
        break
    case 3-1:
        month = 'Março'
        break
    case 4-1:
        month = 'Abril'
        break
    case 5-1:
        month = 'Maio'
        break
    case 6-1:
        month = 'Junho'
        break
    case 7-1:
        month = 'Julho'
        break
    case 8-1:
        month = 'Agosto'
        break
    case 9-1:
        month = 'Setembro'
        break
    case 10-1:
        month = 'Outubro'
        break
    case 11-1:
        month = 'Novembro'
        break
    case 12-1:
        month = 'Dezembro'
        break
}
document.write(` Data: ${day} de ${month} de ${now.getFullYear()}`)

let time1 = 0
let time2 = 200
let time3 = 500
let time4 = 1000


function All_Names() {
    let divQtd = document.getElementById('div')
    divQtd.classList.toggle('div')
    divQtd.innerText = `NUMEROS CONCORRENDO: ${array_names.length}`
}

function btnClean() {
    let yesNo_clean = confirm('Tem certeza que deseja limpar?')
    if(yesNo_clean) {
        location.reload()
    }
}

function sorteio() {
    let btn_go = document.querySelector('.btn-go')
    let yesNo = confirm('O sorteio será iniciado, ok?')
    
    if(yesNo) {
        setInterval(function efeitoToogle() {
            let txtYouWin = document.querySelector('.div')
            txtYouWin.classList.toggle('tranform-scale')
        },400)

        let btn_Qtd = document.querySelector('.btn-Qtd')
        const more = document.getElementById('More')

        more.remove()
        btn_Qtd.remove()
        btn_go.remove()

        let init = 11  
        setInterval(function count() {

        if(init > 0) {
            init--
            contRegress.innerHTML = 'Iniciando sorteio em... '+ init
        } 
        if(init == 0) {
            contRegress.innerHTML = ''
             div.classList.add('div')
            }
        },time4)

        for(let i=0; i < array_names.length; i++) {
            let order = Math.floor(Math.random() * (i + 1))
            div.innerHTML = `PARABÉNS, VOCÊ FOI SORTEADO(A)!! <br> ${array_names[order]}`
        }
    } 
    else {
        alert('Cancelando sorteio...')
    }
}






        







