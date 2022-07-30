window.addEventListener('load', timeBotoesLive) /* All_Names */
window.addEventListener('load', All_Names)

function timeBotoesLive(){
    let now = new Date
    let month = now.getMonth()
    let day = now.getDay()+24

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
    let time = document.querySelector(".time")
    time.innerHTML = ` ${day} de ${month} de ${now.getFullYear()}`

    setInterval(function() {
        let onLine_offLine = document.querySelector("#live")
        let liveP = document.querySelector("#liveP")
        onLine_offLine.classList.toggle("live")
        liveP.classList.toggle("liveColor")
    },800)
}

const array_names = [

    `Lucineide Felizardo (126)`,

    `Barbara (23)`, 
    
    `Barbara (04)`,
    
    `Barbara (28)`,
    
    `Barbara (14)`,

    `Barbara (29)`,

    `Thalles (08)`,
    
    `Thalles, (17)`,

    `Luana(30)`,

    `Judivan(13)`,

    `Isac (33)`,

    `Isael (05)`,

    `Debora (74)`,

    `Luan (51)`,

    `Milton 101)`,

    `Vanessa (78)`,

    `Karoline(12)`,

    `Simone Brito (135)`,

    `Miguel (77)`,

    `Michael (07)`,

    `Eliton (55)`,

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
        
    `Natália (19)`,

    `Lilian Mendes (46)`,

    `Gustavo (Alex)(50)`,

    `Luciana (Carlinhos) (113)`
    ]

    array_names.push('Célia número (47)','Berg (sanitário) (72)','Ênio (Pisos) (70)',
    'borges(145)','Berg (Laminados) (31)','Flávia (caixas) (56)',  'Edilene (caixas) (100)',
     'Anderson (caixas) (38)', 'Marcelo (sanitário) (18)', 'Elaine sanitário (86)', 'xandi sanitário (122)', 'Mira (99)')

     array_names.push('Dani (Academia) (42)','Josi (Prima) (01)','Fábio (Primo) (58)', 'Fábio (Primo) (104)', 'Aline(leroy) (106)','Vanucci (180)', 'Jackson (112)','Jefferson Daniel (150)','Laércio (102)', 'Vania (Santa Luzia) (126)', 'Jorge (MMP)(21)','Jefferson Daniel (150)','Helio elétrica (36)',' Paula (sac) (140)','Thiago (sac) (124)','Milene (114)')

function All_Names() {
    let divQtd = document.getElementById('div')
    divQtd.classList.toggle('div')
    divQtd.innerText = ` NÚMERO DE PATICIPANTES: ${array_names.length}`
}

function btnClean() {
    let yesNo_clean = confirm('Tem certeza que deseja limpar?')
    if(yesNo_clean) {
        location.reload()
    }
}

function sorteio() {
    let divQtd = document.getElementById('div')
    divQtd.classList.remove('div')

    let btn_go = document.querySelector('.btn-go')
    btn_go.remove()
    let yesNo = confirm('O sorteio será iniciado, ok?')
    
    if(yesNo) {
        document.getElementById('More').style.display = 'none'
        setInterval(function efeitoToogle() {
            let txtYouWin = document.querySelector('.div')
            txtYouWin.classList.toggle('tranform-scale')
        }, 400)

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
        }, 1000)

        for(let i=0; i < array_names.length; i++) {
            let order = Math.floor(Math.random() * (i + 1))
            div.innerHTML = `PARABÉNS, VOCÊ FOI SORTEADO(A)!! <br> ${array_names[order]}`
        }
    } 
    else {
        alert('Cancelando sorteio...')
    }
}
