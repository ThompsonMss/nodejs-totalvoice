const readLineSync = require('readline-sync');
const totalvoice = require('totalvoice-node');

const client = new totalvoice('68bf1cc76b8dbb684f2b165097b411f8');

const options = ['Info TSS', 'Enviar TSS', 'Ligacao entre 2 numeros (Duas pernas)', 'Info Ligacao Duas pernas'];
const index = readLineSync.keyInSelect(options, 'Qual a acao desejada? ');

if (index == 3) {
    const id = readLineSync.question('ID chamada? ');
    client.chamada.buscar(id)
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error('Erro: ', err);
        });
} else if (index == 2) {

    const number1 = readLineSync.question('Numero A? ');
    const number2 = readLineSync.question('Numero B? ');

    client.chamada.ligar(number1, number2)
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error('Erro:', err);
        });

} else if (index == 1) {
    const number = readLineSync.question('Enviar TSS para qual numero? ');
    const message = readLineSync.question('Qual mensagem será enviada? ');

    client.tts.enviar(number, message)
        .then((data) => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });
} else if (index == 0) {
    const ttsId = readLineSync.question('Qual ID do TTS para pesquisa? ');
    client.tts.buscar(ttsId).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}