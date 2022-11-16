
// Elementos do to do list
const texto_item = document.getElementById("texto-item");
const btn_add_item = document.getElementById("btn-add-item");
const container_itens = document.getElementById("container-itens");
const ul = container_itens.firstElementChild;

// Array onde será armazenados os obj(base para os itens) 
const arrItens = [];

// Obj molde para criar os itens da lista 
function Item(nome){
    this.nome = nome;
    this.creatAt = Date.now();
    this.complete = false;
}

//Criar e colocar itens na tela partindo do array(Os itens são armazenados dentro do Array 'arrItens')
function criarItemTela(){
    ul.innerHTML = '';
    arrItens.forEach(function(item1, i){

        let li = document.createElement("li");

        let span = document.createElement("span");
        span.innerHTML = item1.nome;

        let check = document.createElement('button');
        check.className = "bi" + " " +"bi-bookmark-check-fill";
        check.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/></svg>`
        check.addEventListener('click', function(){
            item1.complete = true;
            function terefa(){
                arrItens.forEach(item3 => {
                    if(item3.complete === true){
                        li.className = 'chec'
                    }
                })
            }
            terefa();  
        })

        let iEdit = document.createElement('button');
        iEdit.className = "bi" + " " + "bi-pencil-square";
        iEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>`
        iEdit.addEventListener('click', novoValor);
        
        let iDelete = document.createElement('button');
        iDelete.className = "bi" + " " + "bi-archive";
        iDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16"><path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/></svg>`
        iDelete.addEventListener('click', function(){
            li.remove();
            arrItens.splice(i,1);
        })
        li.appendChild(span);
        li.appendChild(check);
        li.appendChild(iEdit);
        li.appendChild(iDelete);
        ul.appendChild(li);
    })
}

// Adcionar valor novo para um determinado item
function novoValor(e){
            let liItem = e.currentTarget.parentElement.firstElementChild.innerHTML;

            const idt = document.getElementById("idt");
            const valor_novo = document.getElementById("valorNovo");
            const s_novo = document.getElementById("sNovo");
            const d_novo = document.getElementById("dNovo");

            idt.style.display = 'block';

            s_novo.addEventListener('click', function(){

                arrItens.forEach(function(item2){
                    if(item2.nome === liItem){
                        item2.nome = valor_novo.value
                        item2.complete = false;
                    }
                })
                //item1.nome = valor_novo.value;
                criarItemTela();
                //valor_novo.value;
                idt.style.display = 'none'

                let li2 = document.getElementsByTagName("li")
                arrItens.forEach(function(item6, i){
                    let li1Posicaoi = li2[i];
                    if(item6.complete === true){
                        li1Posicaoi.className = 'chec';
                    }
                })
                
            })

            d_novo.addEventListener('click',function(){
                idt.style.display = 'none'
            })
            valor_novo.value = ''
}

// Criar obj e colorcar no arr e chamar a funcão de colocar itens na tela
function criarItem(){

    let li = new Item(texto_item.value)
    arrItens.push(li);
    
    criarItemTela();

    texto_item.value = '';
    texto_item.focus();

    let li1 = document.getElementsByTagName("li")
    arrItens.forEach(function(item5, i){
        let li1Posicaoi = li1[i];
        if(item5.complete === true){
            li1Posicaoi.className = 'chec';
        }
    })    
}
btn_add_item.addEventListener('click',criarItem);
