
window.addEventListener('load', timeBotoesLive) /* All_Names */
window.addEventListener('load', All_Names)

function timeBotoesLive(){
    let now = new Date
    let month = now.getMonth()
    let day = now.getDay()+7

    if(day > 31) {
        month
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

    `Lucineide Felizardo (57)`,

    `Barbara (23)`, 
    
    `Barbara (04)`,
    
    `Barbara (28)`,
    
    `Barbara (14)`,

    `Barbara (29)`,

    `Thalles (Leroy) (08)`,
    
    `Thalles (Leroy) (17)`,

    `Luana Pamela (30)`,

    `Judivan (13)`,

    `Isac (33)`,

    `Isael (05)`,

    `Debora (Corrêa) (74)`,

    `Luan (Leroy) (51)`,

    `Milton (Leroy) (101)`,

    `Vanessa Honório(78)`,

    `Karoline (Leroy) (12)`,

    `Simone Brito (SP) (135)`,

    `Miguel (77)`,

    `Michael (07)`,

    `Eliton (Leroy) (55)`,

    `Rogério (Leroy) (98)`,

    `Paty (MMP) (27)`,
    
    `Patrícia Docol (11)`,
    `
    Jadeilson (Bosque) (22)`,
    
    `Kaio (Leroy) (37)`,
    
    `Altair F. (179)`, 
    
    `Valéria (20)`,

    `Luciano (Leroy) (06)`,

    `Isadora (26)`,

    `Jhonatan (Leroy) (32)`,

    `Dikó (63)`,

    `Eduardo (Lucia) (48)`,

    `Daiane (177)`,

    `Cristian (cerâmica) (117)`,
    
    `Bruno Henrique (35)`,

    `Arthur (Leroy) (16)`,

    `Givanildo (Leroy) (94)`,

    `Alisson (Leroy) (02)`,

    `Rafael (Leroy) (25)`,
    
    `Cida (Mariana) (45)`,

    `Jefinho (Leroy) (09)`,

    `Alberto (Leroy) (84)`,

    `Bruno (Leroy) (86)`,

    `Gleydson (Leroy) (15)`,

    `Jarian (Leroy) (67)`,

    `Wanderlan (Leroy) (44)`,

    `Pedro Lucas (Leroy) (151)`,

    `Mirek Tales (132)`,

    `Henrique (cozinha) (43)`,

    `Alex (Leroy) (71`,
        
    `Natália (Leroy) (19)`,

    `Lilian Mendes (MMP) (46)`,

    `Gustavo Alex (50)`,

    `Luciana (Carlinhos) (113)`
    ]

    array_names.push('Célia (Leroy) (47)','Berg (sanitário) (72)','Ênio (pisos) (70)',
    'Borges (Leroy) (145)','Berg (laminados) (31)','Flávia (caixa) (56)', 'Edilene (caixa) (100)','Anderson (caixa) (38)', 'Marcelo (sanitário) (18)', 'Elaine (sanitário) (96)', 'Xandi (sanitário) (122)', 'Mira (Leroy) (99)', 'Dani (Academia) (42)','Josi Fonseca (01)','Fábio (primo) (58)', 'Fábio (primo) (104)', 'Aline (leroy) (106)','Vanucci (Leroy) (180)', 'Jackson (Leroy) (112)','Laércio (Leroy)(102)', 'Vania (Santa Luzia) (126)', 'Jorge (MMP) (21)','Jefferson Daniel (Leroy) (150)','Helio (elétrica) (36)',/* ' Paula (sac) (140)', */'Thiago (sac) (124)','Milene (114)', 'Nilson (encanamento) (66)', 'Michelle (Prima) (111)','Maria Helena (64)','Lidiane Vaz (129)', 'Felipe (Min.Moriah) (83)','Sonia (casais) (68)','Lilian Vaz (34)','Neide (V. Mirian) (134)','Mirian (Zezinho) (90)','Daniela Fogaça (49)', 'Daniela Fogaça (39)','Luciana (Dirceu) (81)', 'Dirceu (MMP) (52)', 'José Elias (40)','Sandra Rodrigues (Leroy) (53)', 'Luiz Paiva (147)', 'Cleone (Mirante) (59)', 'Danilo Ap. (88)','Wladimir (pisos) (105)', 'Neto (pisos) (73)', 'Rita (G.O MMP) (76)', 'Michael (176)', 'Michael (178)', 'Jair (terço dos homens) (54)', 'Renilson (130)', 'Luciene Oliveira (127)', 'Hilze (125)','Maria (Kevin) (80)', 'Sueli Amaral (SP) (110)', 'Sueli Amaral (SP) (118)', 'Gilson (Gerente) (120)', 'Felipe (Leroy) (24)', 'Mariana (pisos) (60)', 'Paulo Santi (136)', 'Flavio (tintas) (03)', 'Nana (Esmair) (89)', 'Nana (Esmair) (75)','Edson (locutor) (69)')

function All_Names() {
    let divQtd = document.getElementById('div')
    divQtd.classList.toggle('div')
    divQtd.innerText = ` NÚMERO DE PARTICIPANTES: ${array_names.length}`
}

function btnClean() {
    /* let yesNo_clean = confirm('Tem certeza que deseja limpar?')
    if(yesNo_clean) { */
        location.reload()
    /* } */
}

function sorteio() {
    let divQtd = document.getElementById('div')
    divQtd.classList.remove('div')

    let btn_go = document.querySelector('.btn-go')
    btn_go.remove()
    /* let yesNo = confirm('O sorteio será iniciado, ok?') */
    
    /* if(yesNo) { */
        const body = document.querySelector("body")
        body.classList.add('paddingToogle')
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
            div.innerHTML = `PARABÉNS!! <br> ${array_names[order] }`
        }
    /* } 
    else {
        alert('Cancelando sorteio...')
    } */
}
