function Cadastro() {
    return (
        <div className='row'>
            <div className='column'>
                <div className='card'>
                    <h1>Cadastro Cliente</h1>
                    <p><strong>Nome: </strong><input type='text' name='Nome' id='txtn'></input></p>
                    <p><strong>Endereco: </strong><input type='text' name='Endereço' id='txte'></input></p>
                    <p><strong>CPF: </strong><input type='number' name='CPF' id='txtc'></input></p>
                    <p><input type='button' value='cadastrar' onClick={cadastrar}></input></p>
                    <div id='res'></div>
                </div>
            </div>
        </div>
    )
}

function cadastrar() {

    let n = document.getElementById('txtn')
    let e = document.getElementById('txte')
    let c = document.getElementById('txtc')
    let res = document.getElementById('res')

    if (n.value.length === 0 || e.value.length ===0 || c.value.length === 0) {
        window.alert('[erro] Faltam dados a serem preenchidos!')
        return;
    } 
    if (window.confirm('Dados preenchidos corretamente?')) {
        res.innerHTML = `O cadastro foi feito com sucesso em ${n.value}, ${e.value} e ${c.value}`
    }
}
export default Cadastro;