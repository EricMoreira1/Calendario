let colorCounts = {}; // Objeto para armazenar contagens de cores

function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let tds = calendar.getElementsByTagName('td');
    
    // Verifica se o número digitado é válido (não maior que 30)
    if (parseInt(days) > 30) {
        alert("Esse número é inválido. O número não pode ser maior do que 30.");
        return; // Sai da função imediatamente
    }

    // Subtrai 1 do valor do dia porque os arrays em JavaScript começam com índice 0
    let index = parseInt(days) - 1;
    
    // Verifica se o índice está dentro do intervalo válido
    if (index >= 0 && index < tds.length) {
        // Verifica se o dia já está marcado com uma cor
        if (tds[index].style.backgroundColor !== '') {
            alert('Esse dia já foi selecionado.');
            return; // Sai da função se o dia já estiver marcado
        }

        // Verifica se a cor já foi selecionada três vezes
        if (colorCounts[color] >= 3) {
            alert('Você já selecionou essa cor três vezes.');
            return; // Sai da função se a cor já foi selecionada três vezes
        }
        
        // Atualiza o contador da cor selecionada
        colorCounts[color] = (colorCounts[color] || 0) + 1;

        tds[index].style.backgroundColor = color;
    } else {
        alert('Dia selecionado não existe em um mês');
    }
}
