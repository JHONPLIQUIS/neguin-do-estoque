class produto {
    contructor(nome,preco,quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;

    }
    mostrarDados(){
        console.log(`Produto ${this.nome}, preço R$ ${this.preco}, quantidade: ${this.quantidade}`);
    }
    vernder(qtd){
         if(qtd <= this.quantidade){
             this.quantidade -= qtd;
             console.log(`venda realizada. qauntidade atual ${this.quantidade}`)
         } else{
            console.log("estoque insuficiente para venda");
         }

        }
        repor(qtd){
            this.quantidade += qtd;
            console.log(`reposição feita. quantidade atual: ${this.quantidade}`);

        }

    }
    let produto = new produto("caneta",2.25,100);
    produto.mostrarDados();
    produto.vender(15);
    produto.repor(20);

    

