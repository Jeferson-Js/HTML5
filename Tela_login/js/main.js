function hello(event) {
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    document.getElementById('login').innerHTML = `${nome}`;
    document.body.backgroundColor = 'green';
}
