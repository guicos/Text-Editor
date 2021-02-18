let output = document.getElementById('output');
let buttons = document.getElementsByClassName('tool--btn');
for (let btn of buttons) {
    btn.addEventListener('click', () => {
        let cmd = btn.dataset['command'];
        cmdExists(cmd)
    })
}

function cmdExists(cmd){
    if(cmd === 'saveList'){
        let doc = new jsPDF();
        doc.text(output.textContent, 10, 10)
        let name = prompt("Nome do Arquivo:")
        doc.save(`${name}.pdf`)
    }if(cmd === 'createLink') {
        let url = prompt("Coloque o link aqui:", "http:\/\/")
        document.execCommand(cmd, false, url);
    } else {
        document.execCommand(cmd, false, null);
    }
}

