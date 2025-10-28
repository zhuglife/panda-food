'use client'
import { Sandwich, Flame, Cookie, Droplets, MessageCircle, Plus, Package } from 'lucide-react'

const cardapio = [
  {
    icone: Sandwich,
    titulo: 'Pastéis Salgados',
    descricao: 'Pastéis crocantes com recheios variados e irresistíveis.',
    cor: 'from-yellow-400 to-orange-500',
    itens: [
      { nome: "Carne", descricao: "Carne moída", preco: 10.00 },
      { nome: "Carne 2", descricao: "Carne moída com azeitona", preco: 12.00 },
      { nome: "Carne 3", descricao: "Carne, Ovo, Azeitona, Bacon", preco: 15.00 },
      { nome: "Carne com queijo", descricao: "Carne com muçarela", preco: 15.00 },
      { nome: "Carne 2 queijos", descricao: "Carne com muçarela e catupiry", preco: 16.00 },
      { nome: "Bauru", descricao: "Presunto, muçarela, orégano", preco: 13.00 },
      { nome: "Pizza", descricao: "Presunto, muçarela, tomate, orégano", preco: 14.00 },
      { nome: "Queijo", descricao: "Muçarela", preco: 14.00 },
      { nome: "Panda Sírio", descricao: "Carne moída, repolho, tomate, pimenta síria", preco: 15.00 },
      { nome: "2 queijos", descricao: "Muçarela, Catupiry", preco: 15.00 },
      { nome: "3 queijos", descricao: "Cheddar, muçarela, catupiry", preco: 16.90 },
      { nome: "Calabresa", descricao: "Calabresa, muçarela e catupiry", preco: 15.00 },
      { nome: "Palmito", descricao: "Palmito e muçarela", preco: 15.00 },
      { nome: "Frango", descricao: "Frango com catupiry", preco: 15.00 },
      { nome: "Franbacon", descricao: "Frango, muçarela, bacon, catupiry", preco: 16.90 },
      { nome: "Pandão", descricao: "5 ingredientes escolhidos", preco: 17.90 },
      { nome: "Repolho", descricao: "Repolho, muçarela, bacon, catupiry", preco: 15.00 },
      { nome: "Carne seca", descricao: "Carne seca, muçarela, tomate, catupiry", preco: 17.90 },
      { nome: "Panda vegano", descricao: "Palmito, tomate, milho, ervilha, azeitona", preco: 15.00 }
    ]
  },
  {
    icone: Sandwich,
    titulo: 'Lanches',
    descricao: 'Lanches artesanais com ingredientes frescos e saborosos.',
    cor: 'from-red-400 to-orange-500',
    itens: [
      { nome: "Panda Burguer", descricao: "Pão redondo, 1 hambúrguer 90g, muçarela, bacon, tomate, alface, catupiry, batata palha, maionese especial, mostarda, ketchup", preco: 24.90 },
      { nome: "Frangão", descricao: "Pão redondo, frango desfiado, mussarela, bacon, tomate, milho, alface, batata palha, catupiry, maionese especial, ketchup, mostarda", preco: 24.90 },
      { nome: "Panda Bacon", descricao: "Pão redondo, 1 hambúrguer 90g, bacon fatias, ovo, muçarela, tomate, alface, catupiry, batata palha, maionese especial, mostarda, ketchup", preco: 26.90 },
      { nome: "X Salada", descricao: "Pão redondo, hambúrguer 90g, mussarela, presunto, alface, tomate, maionese especial, ketchup, mostarda", preco: 21.90 },
      { nome: "Panda Calabresão", descricao: "Pão redondo, calabresa, bacon em fatias, mussarela, catupiry, batata palha, alface, tomate, maionese especial, mostarda, ketchup", preco: 23.90 },
      { nome: "Super Panda", descricao: "2 hambúrgueres 90g, 2 ovos, frango, 2 salsichas, calabresa, bacon em fatias, presunto, muçarela, batata palha, alface, tomate, milho, purê de batata, catupiry, cheddar, maionese especial, mostarda, ketchup (±1kg)", preco: 44.90, destaque: true },
      { nome: "Panda Monster", descricao: "2 pães, 4 hambúrgueres, 4 ovos, 4 salsichas, frango, calabresa, bacon, presunto, muçarela, batata palha, alface, tomate, milho, ervilha, batata frita, catupiry, cheddar, maionese especial, purê de batata, mostarda, ketchup (±2kg)", preco: 89.90, destaque: true },
      { nome: "Panda Doguinho", descricao: "1 salsicha, batata palha, purê de batata, tomate ketchup, mostarda, maionese especial", preco: 10.00 },
      { nome: "Panda Dog Especial", descricao: "2 salsichas, batata palha, purê de batata, bacon, calabresa, muçarela, catupiry, tomate, mostarda, ketchup, maionese especial", preco: 21.90 }
    ]
  },
  {
    icone: Package,
    titulo: 'Combos',
    descricao: 'Combinações especiais com preços promocionais!',
    cor: 'from-purple-400 to-pink-500',
    itens: [
      { nome: "Combo Super Panda", descricao: "Super Panda + 150g de batata com cheddar e bacon + tubaína 2L", preco: 64.80 },
      { nome: "Combo Panda Monster", descricao: "Panda Monster + 150g batata com cheddar e bacon + tubaína 2L", preco: 99.90 },
      { nome: "Combo Dupla Panda Dog", descricao: "2 Panda Dog especial + 150g de batata com cheddar e bacon", preco: 49.90 },
      { nome: "Combo Dupla Doguinho", descricao: "2 Panda Doguinho + 150g de batata com cheddar e bacon", preco: 29.90 }
    ]
  },
  {
    icone: Flame,
    titulo: 'Batata Frita',
    descricao: 'Batatas sequinhas e crocantes. Perfeitas para acompanhar ou compartilhar.',
    cor: 'from-orange-400 to-red-500',
    itens: [
      { nome: "Batata frita 150g", preco: 11.90 },
      { nome: "Batata frita 200g", preco: 15.90 },
      { nome: "Batata frita 150g com cheddar e bacon", preco: 16.50 },
      { nome: "Batata frita 400g com cheddar e bacon", preco: 34.90 }
    ]
  },
  {
    icone: Plus,
    titulo: 'Acréscimos',
    descricao: 'Deixe seu lanche ainda mais especial!',
    cor: 'from-green-400 to-emerald-500',
    itens: [
      { nome: "Ovo", preco: 2.50 },
      { nome: "Salsicha", preco: 2.50 },
      { nome: "Catupiry ou cheddar", preco: 3.00 },
      { nome: "Bacon", preco: 4.00 },
      { nome: "Calabresa", preco: 4.00 },
      { nome: "Hambúrguer 90g", preco: 4.00 },
      { nome: "Frango desfiado", preco: 4.00 }
    ]
  },
  {
    icone: Cookie,
    titulo: 'Pastéis Doces',
    descricao: 'Pastéis doces irresistíveis. O final perfeito para sua refeição.',
    cor: 'from-pink-400 to-rose-500',
    itens: [
      { nome: "Romeu e Julieta", preco: 15.00 },
      { nome: "Doce de leite", preco: 15.00 },
      { nome: "Chocolate ao leite", preco: 15.00 },
      { nome: "Paçoca com muçarela", preco: 16.00 },
      { nome: "Massa frita", descricao: "Massa frita, canela, açúcar", preco: 7.50 }
    ]
  },
  {
    icone: Droplets,
    titulo: 'Bebidas',
    descricao: 'Bebidas geladas e refrescantes.',
    cor: 'from-blue-400 to-cyan-500',
    itens: [
      { nome: "Tubaína Rossi 600ml", preco: 6.50 },
      { nome: "Coca/Fanta 2L", preco: 16.90 },
      { nome: "Tubaína/Guaraná", preco: 8.50 },
      { nome: "Coca/Fanta 200ml KS", preco: 5.50 },
      { nome: "Coca/Fanta 1L", preco: 8.90 },
      { nome: "Refri lata 350ml", preco: 6.50 },
      { nome: "Caldo de cana 500ml", preco: 8.00 },
      { nome: "Caldo de cana 500ml garrafa", preco: 8.50 },
      { nome: "Caldo de cana 1L", preco: 17.00 },
      { nome: "Água c/ e sem gás", preco: 3.50 },
      { nome: "Suco natural 500ml", preco: 9.90 }
    ]
  }
]

// Função para abrir WhatsApp com pedido
const abrirWhatsApp = (categoria: string) => {
  const numero = '5515996654685'
  const mensagem = `Olá! Gostaria de fazer um pedido de ${categoria} 🍔`
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
  window.open(url, '_blank')
}

export default function Cardapio() {
  return (
    <section id="cardapio" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nosso Cardápio 🍔
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sabor e qualidade em cada pedido. Confira nossas delícias e peça já pelo WhatsApp!
          </p>
        </div>

        <div className="space-y-12">
          {cardapio.map((categoria, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-100 hover:border-orange-200 transition-colors">
              
              {/* Cabeçalho da Categoria */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 pb-4 border-b-2 border-orange-100">
                <div className={`bg-gradient-to-br ${categoria.cor} rounded-2xl w-20 h-20 flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <categoria.icone className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {categoria.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {categoria.descricao}
                  </p>
                </div>
                <button 
                  onClick={() => abrirWhatsApp(categoria.titulo)}
                  className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Pedir Agora</span>
                </button>
              </div>

              {/* Lista de Itens */}
              <div className="grid md:grid-cols-2 gap-4">
                {categoria.itens.map((item: any, idx: number) => (
                  <div 
                    key={idx}
                    className={`bg-gradient-to-br from-orange-50 to-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 border ${item.destaque ? 'border-yellow-400 ring-2 ring-yellow-200' : 'border-orange-100 hover:border-orange-300'}`}
                  >
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h4 className="font-bold text-gray-900 text-base flex-1 flex items-center gap-2">
                        {item.destaque && <span className="text-yellow-500">⭐</span>}
                        {item.nome}
                      </h4>
                      <span className="text-orange-600 font-bold text-lg whitespace-nowrap">
                        R$ {item.preco.toFixed(2)}
                      </span>
                    </div>
                    {item.descricao && (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.descricao}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Nota de rodapé */}
        <div className="text-center mt-12 bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 rounded-2xl p-6 border-2 border-orange-200">
          <p className="text-gray-800 font-bold text-lg mb-2">
            📱 Faça seu pedido pelo WhatsApp e receba com rapidez e qualidade!
          </p>
          <p className="text-gray-600 text-sm">
            Aceitamos pagamento em dinheiro, PIX e cartão
          </p>
        </div>
      </div>
    </section>
  )
}