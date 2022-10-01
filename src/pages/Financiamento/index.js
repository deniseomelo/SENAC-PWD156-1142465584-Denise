function Financiamento() {
    return (

        <div className='row'>
            <div className='column'>
                <div className='card'>
                    <h1>Simulação de Financiamento</h1>
                    <p><strong>Nome do Cliente:</strong><input type='text' name='Nome do Cliente'></input></p>
                    <p><strong>Valor Solicitado:</strong><input type='number' id='txtv'></input></p>
                    <p><strong>Parcela:</strong><input type='number' id='txtp'></input></p>
                    <p><strong>Juros:</strong><input type='number' id='txtj'></input></p>
                    <p><input type='button' value='atualizar' onClick={atualizar}></input></p>
                    <div id='res'></div>
                </div>
            </div>
        </div>
    )
}

function atualizar() {

    let v = document.getElementById('txtv');
    let vnum = parseFloat(v.value);
    let p = document.getElementById('txtp');
    let pnum = parseInt(p.value);
    let j = document.getElementById('txtj');
    let jnum;
    let tot;
    let vpar;
    let res = document.getElementById('res')

    if (isNaN(vnum) || vnum === 0.0 || isNaN(pnum) ||pnum === 0.0) {
        window.alert('[erro] Faltam dados a serem preenchidos!')
        return;
    }
    if (window.confirm('Dados preenchidos corretamente?')) {

        if (vnum <= 2000) {
            jnum = 1.12;
        }

        if (vnum >= 2001 && vnum <= 5000) {
            jnum = 1.17;
        }

        if (vnum >= 5001 && vnum <= 10000) {
            jnum = 1.22;
        }

        if (vnum > 10001) {
            jnum = 1.35;
        }
        j.value = jnum;
        tot = parseFloat (vnum * jnum).toFixed(2);
        vpar = parseFloat (tot / pnum).toFixed(2);
        res.innerHTML = `O valor do empréstimo é de ${vnum} com juros de ${jnum} no valor total de ${tot} , sendo cada parcela no valor de ${vpar} , e o total de parcelas ${pnum} `
    }
}
export default Financiamento;