const produtos = [
    { codigo: '001', nome: 'Computador Desktop Intel Core i5', preco: 'R$ 3.199,00' },
    { codigo: '002', nome: 'Laptop Ultrabook Intel Core i7', preco: 'R$ 4.799,00' },
    { codigo: '003', nome: 'Monitor LED 24 polegadas Full HD', preco: 'R$ 799,90' },
    { codigo: '004', nome: 'Teclado Mecânico Gamer RGB', preco: 'R$ 299,00' },
    { codigo: '005', nome: 'Mouse Óptico Sem Fio', preco: 'R$ 79,90' }
];

function visualizarProdutos() {
    let produtosString = "Lista de Produtos:\n";
    
    produtos.forEach(function(produto) {
        produtosString += `Código: ${produto.codigo}, Nome: ${produto.nome}, Preço: ${produto.preco}\n`;
    });
    
    alert(produtosString);
}

let carrinhoDeCompras = [];

// Função para adicionar um produto ao carrinho
function adicionarProdutoAoCarrinho(codigoProduto, quantidade) {
    let produtoEncontrado = produtos.find(produto => produto.codigo === codigoProduto);
    
    if (produtoEncontrado) {
        // Adicionar o produto selecionado ao carrinho com a quantidade informada
        carrinhoDeCompras.push({ produto: produtoEncontrado, quantidade: parseInt(quantidade) });
        alert('Produto adicionado com sucesso!');
    } else {
        alert('Código de produto inválido!');
    }
}

// Função para exibir os produtos adicionados ao carrinho
function notaFiscal() {
    let mensagemCarrinho = ' Nota Fiscal\n\n Empresa: Télos NF \n CNPJ: 12.345.678/0001-90\n Endereço: Rua das Flores, 123\n Cidade: Cidade Exemplo\n Data: 12/08/2023\n Número: 123\n\n';
    let totalCompra = 0;
    carrinhoDeCompras.forEach(item => {
        let precoUnitario = parseFloat(item.produto.preco.replace('R$ ', '').replace('.', '').replace(',', '.'))
         totalCompra += precoUnitario * item.quantidade;
        mensagemCarrinho += `Nome: ${item.produto.nome}, Preço unitário: ${item.produto.preco}, Quantidade: ${item.quantidade}\n\n`;
    });
    
    mensagemCarrinho += `Total da compra: R$ ${totalCompra.toFixed(2)}`;
    alert(mensagemCarrinho);
}

// Função para interação do usuário ao adicionar produtos
function carrinho() {
    visualizarProdutos();

    while (true) {
        let produtoSelecionado = prompt('Digite o código do produto a ser adicionado no carrinho (ou digite (5) Sair para encerrar):');

        if (produtoSelecionado.toLowerCase() === '5') {
            break;
        }

        let quantProduto = prompt('Digite a quantidade de itens:');
        adicionarProdutoAoCarrinho(produtoSelecionado, quantProduto);
    }
}


function limparCarrinho() {
    carrinhoDeCompras = [];
}


function novaVenda() {
    alert('Nova venda iniciada!');
    limparCarrinho(); 
    carrinho(); 
}


function executar(){
while(true){
    var lista = prompt('Digite a opção desejada: (1)Visualizar produtos cadastrados; (2)Lançar venda de produto; (3)Imprimir nota fiscal; (4) Iniciar uma nova venda; (5) Sair;');

    switch(lista) {
    case '1':
        visualizarProdutos();
        break;
    case '2':
       carrinho();
        break;
    case '3':
        notaFiscal();
        break;
    case '4':
        novaVenda();
        break;
    case '5':
        console.log('Opçao 5');
        return;
    }
}
}