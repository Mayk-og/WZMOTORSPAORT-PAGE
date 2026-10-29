const produtos = [
    {
      nome: "CG-160",
      categoria: "Street",
      quantidade: 6,
      preco: 18000.00
    },
    {
        nome: "biz-125",
      categoria: "Urbana",
      quantidade: 8,
      preco: 15000.00
    },
    {
        nome: "xre-300",
      categoria: "Trail",
      quantidade: 4,
      preco: 28000.00
    },
    {
        nome: "NMAX",
      categoria: "Scooter",
      quantidade: 5,
      preco: 22000.00
    },
    {
        nome: "Comet 250 GTR",
      categoria: "Custom",
      quantidade: 5,
      preco: 14000.00
    },
    {
        nome: "SHADOW-600",
      categoria: "Cruiser",
      quantidade: 6,
      preco: 28000.00
    },
    {
        nome: "HORNET-600",
      categoria: "Custom",
      quantidade: 3,
      preco: 18000.00
    },
    {
        nome: "Burgman-125",
      categoria: "Scooter",
      quantidade: 4,
      preco: 6000.00
    },
    {
        nome: "fz-250",
      categoria: "Street",
      quantidade: 8,
      preco: 23000.00
    },
    {
        nome: "MT-07",
      categoria: "Street",
      quantidade: 3,
      preco: 26000.00
    },
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }