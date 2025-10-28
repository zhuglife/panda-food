'use client'
import { Sandwich, Flame, Cookie, Droplets, MessageCircle } from 'lucide-react'

const cardapio = [
  {
    icone: Sandwich,
    titulo: 'Lanches',
    descricao: 'Lanches artesanais com ingredientes frescos e saborosos. Preparados na hora com muito carinho.',
    cor: 'from-yellow-400 to-orange-500',
    itens: [
      { nome: "Panda X Tudo (1 Kilo)", descricao: "Pão redondo, 2 hambúrgueres 90gr, 2 ovos, frango desfiado, 2 salsichas, calabresa, bacon em fatias, presunto, mussarela, cheddar, alface, tomate, milho, batata palha, catupiry, maionese especial, mostarda, ketchup", preco: 47.90 },
      { nome: "X Salada", descricao: "Pão redondo, hambúrguer 90gr, mussarela, presunto, alface, tomate, maionese especial, ketchup, mostarda", preco: 21.00 },
      { nome: "Panda Calabresão", descricao: "Pão redondo, calabresa, bacon em fatias, ovo, mussarela, catupiry, batata palha, tomate, alface, maionese especial, mostarda, ketchup", preco: 23.90 },
      { nome: "Panda Bacon", descricao: "Pão redondo, 1 hambúrguer 90gr, bacon em fatias, ovo, mussarela, tomate, alface, catupiry, batata palha, maionese especial, mostarda, ketchup", preco: 26.90 },
      { nome: "Hot Dog", descricao: "1 salsicha, batata palha, tomate, ketchup, mostarda, maionese especial", preco: 10.00 },
      { nome: "Hot Dog Especial", descricao: "2 salsichas, batata palha, bacon, calabresa, mussarela, catupiry, tomate, ketchup, maionese especial, mostarda", preco: 24.90 },
      { nome: "Panda Burguer", descricao: "Pão redondo, 1 hambúrguer 90gr, mussarela, bacon, tomate, alface, catupiry, batata palha, maionese especial, mostarda, ketchup", preco: 24.90 },
      { nome: "Panda Frangão", descricao: "Pão redondo, frango desfiado, mussarela, bacon, milho, alface, tomate, catupiry, maionese especial, mostarda, ketchup", preco: 24.90 }
    ]
  },
  {
    icone: Flame,
    titulo: 'Batata Frita',
    descricao: 'Batatas sequinhas e crocantes. Perfeitas para acompanhar ou compartilhar.',
    cor: 'from-orange-400 to-red-500',
    itens: [
      { nome: "Batata Frita 150g", preco: 11.90 },
      { nome: "Batata Frita 200g", preco: 15.90 },
      { nome: "Batata Frita 150g c/ Cheddar e Bacon", preco: 16.50 },
      { nome: "Batata Frita 400g c/ Cheddar e Bacon", preco: 34.90 }
    ]
  },
  {
    icone: Cookie,
    titulo: 'Pastéis Doces',
    descricao: 'Pastéis doces irresistíveis. O final perfeito para sua refeição.',
    cor: 'from-pink-400 to-rose-500',
    itens: [
      { nome: "Romeu e Julieta", descricao: "Goiabada e mussarela", preco: 15.00 },
      { nome: "Doce de Leite", preco: 15.00 },
      { nome: "Chocolate ao Leite", preco: 16.00 },
      { nome: "Paçoca c/ Mussarela", preco: 16.00 },
      { nome: "Massa Frita", descricao: "Massa, canela, açúcar, 200g", preco: 7.50 }
    ]
  },
  {
    icone: Droplets,
    titulo: 'Bebidas',
    descricao: 'Bebidas geladas e refrescantes. Do refrigerante ao caldo de cana natural.',
    cor: 'from-blue-400 to-cyan-500',
    itens: [
      { nome: "Tubaína Rossi Garrafa 600ml", preco: 6.50 },
      { nome: "Coca Cola/Fanta 2 Litros", preco: 16.90 },
      { nome: "Tubaína/Guaraná", preco: 8.50 },
      { nome: "Coca Cola/Fanta KS 290ml", preco: 5.90 },
      { nome: "Refrigerante Lata 350ml", preco: 8.00 },
      { nome: "Caldo de Cana Copo 500ml", preco: 8.00 },
      { nome: "Caldo de Cana Garrafa 500ml", preco: 11.50 },
      { nome: "Caldo de Cana Garrafa 1 Litro", preco: 17.00 },
      { nome: "Água Mineral c/ ou s/ gás 500ml", preco: 3.50 }
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
                {categoria.itens.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-orange-100 hover:border-orange-300"
                  >
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h4 className="font-bold text-gray-900 text-base flex-1">
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
          <p className="text-gray-800 font-bold text-lg">
            📱 Faça seu pedido pelo WhatsApp e receba com rapidez e qualidade!
          </p>
        </div>
      </div>
    </section>
  )
}