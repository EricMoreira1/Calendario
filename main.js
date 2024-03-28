function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let tds = calendar.getElementsByTagName('td');
    
    // Subtrai 1 do valor do dia porque os arrays em JavaScript começam com índice 0
    let index = parseInt(days) - 1;
    
    // Verifica se o índice está dentro do intervalo válido
    if (index >= 0 && index < tds.length) {
        tds[index].style.backgroundColor = color;
    } else {
        console.error('Dia selecionado está fora do intervalo válido.');
    }
}
