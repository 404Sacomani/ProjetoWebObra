

function dataAtualForm (dataJSON) {
    const data = new Date(dataJSON)
    
    const formato = {year: 'numeric' , month: 'long', day: 'numeric'}
    const dataFormatada = data.toLocaleDateString('pt-BR', formato)

    return dataFormatada

}

export default dataAtualForm