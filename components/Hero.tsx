'use client'

import { Flame, Clock, Utensils, Heart } from 'lucide-react'

// Função WhatsApp
const abrirWhatsApp = () => {
  const numero = '5515996654685'
  const mensagem = 'Olá! Gostaria de fazer um pedido no Panda Food 🍔'
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
  window.open(url, '_blank')
}

const scrollToCardapio = () => {
  const cardapio = document.getElementById('cardapio')
  cardapio?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 flex items-center justify-center min-h-screen text-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="bg-white rounded-full p-4 shadow-lg">
            <span className="text-6xl">🐼</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Lanches e Pastéis{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Deliciosos</span> na Hora!
        </h1>

        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          No <strong className="text-orange-600">Panda Food</strong>, preparamos lanches artesanais e pastéis crocantes
          com ingredientes frescos e muito sabor. Do clássico ao especial, temos o lanche
          perfeito para matar sua fome!
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={abrirWhatsApp}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
          >
            <Flame className="h-5 w-5 mr-2" />
            Fazer Pedido Agora
          </button>
          <button 
            onClick={scrollToCardapio}
            className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-orange-50 transition-all duration-300"
          >
            Ver Cardápio Completo
          </button>
        </div>

        {/* Características */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <Utensils className="h-10 w-10 text-orange-500 mx-auto mb-3" />
            <p className="font-semibold text-gray-800">Ingredientes Frescos</p>
            <p className="text-sm text-gray-600 mt-1">Qualidade em cada mordida</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <Clock className="h-10 w-10 text-yellow-500 mx-auto mb-3" />
            <p className="font-semibold text-gray-800">Preparado na Hora</p>
            <p className="text-sm text-gray-600 mt-1">Sempre quentinho pra você</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <Heart className="h-10 w-10 text-pink-500 mx-auto mb-3" />
            <p className="font-semibold text-gray-800">Feito com Carinho</p>
            <p className="text-sm text-gray-600 mt-1">Amor em cada receita</p>
          </div>
        </div>
      </div>
    </section>
  )
}