'use client'

import { Clock, Users, Heart, Award, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function QuemSomos() {
  return (
    <>
      {/* Botão flutuante de voltar */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 bg-white hover:bg-orange-50 text-orange-600 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border-2 border-orange-200"
      >
        <ArrowLeft className="h-6 w-6" />
      </Link>

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero da página */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-full p-6 shadow-lg">
                <span className="text-7xl">🐼</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Conheça o <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Panda Food</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma história de sabor, dedicação e amor pela comida de verdade
            </p>
          </div>

          {/* Nossa História */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12 border-2 border-orange-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Nossa História 📖
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Fundado em <strong>2011</strong>, o Panda Food nasceu do sonho de Vania Dias Motta de 
                trazer lanches artesanais e pastéis crocantes com ingredientes frescos para Sorocaba.
              </p>
              <p className="mb-4">
                Com mais de <strong>14 anos de história</strong>, nos tornamos referência em qualidade 
                e sabor, sempre preparando cada pedido com muito carinho e dedicação.
              </p>
              <p>
                Hoje, continuamos fiéis à nossa essência: comida de verdade, feita na hora, 
                com ingredientes selecionados e aquele toque especial que só quem ama o que faz consegue entregar.
              </p>
            </div>
          </div>

          {/* Nossos Valores */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nossos Valores 💎
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-orange-100">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Qualidade</h3>
                <p className="text-gray-600 text-sm">
                  Ingredientes frescos e selecionados em cada preparo
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-pink-100">
                <div className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicação</h3>
                <p className="text-gray-600 text-sm">
                  Cada lanche é feito com carinho e atenção aos detalhes
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-orange-100">
                <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Agilidade</h3>
                <p className="text-gray-600 text-sm">
                  Preparado na hora para você receber quentinho
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-blue-100">
                <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Atendimento</h3>
                <p className="text-gray-600 text-sm">
                  Tratamos cada cliente como parte da família
                </p>
              </div>
            </div>
          </div>

          {/* O que nos torna especiais */}
          <div className="bg-gradient-to-br from-white via-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-orange-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              O que nos torna especiais? ⭐
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-3xl">🍔</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Receitas Únicas</h3>
                  <p className="text-gray-600 text-sm">
                    Desenvolvemos nossas próprias receitas com combinações exclusivas de sabores
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🥬</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Ingredientes Frescos</h3>
                  <p className="text-gray-600 text-sm">
                    Compramos diariamente para garantir o frescor em cada pedido
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">👨‍🍳</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Feito na Hora</h3>
                  <p className="text-gray-600 text-sm">
                    Preparamos seu lanche somente após o pedido, nunca deixamos pronto esperando
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Compromisso</h3>
                  <p className="text-gray-600 text-sm">
                    Mais de 14 anos mantendo a mesma qualidade e dedicação de sempre
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              onClick={(e) => {
                e.preventDefault()
                window.location.href = '/#cardapio'
              }}
              className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Conheça Nosso Cardápio 🍔
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}