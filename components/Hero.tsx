'use client'

import { Flame, Clock, Utensils, Heart, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image';
// Função WhatsApp
const abrirWhatsApp = () => {
  const numero = '5515981345869'
  const mensagem = 'Olá! Gostaria de fazer um pedido no Panda Food 🍔'
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
  window.open(url, '_blank')
}

const scrollToCardapio = () => {
  const cardapio = document.getElementById('cardapio')
  cardapio?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 flex items-center justify-center min-h-screen text-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Elementos decorativos animados */}
      <div className="absolute top-20 left-10 animate-bounce delay-100">
        <span className="text-4xl opacity-20">🍔</span>
      </div>
      <div className="absolute top-40 right-20 animate-bounce delay-300">
        <span className="text-3xl opacity-20">🍟</span>
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce delay-500">
        <span className="text-3xl opacity-20">🥤</span>
      </div>
      <div className="absolute bottom-40 right-10 animate-bounce delay-700">
        <span className="text-4xl opacity-20">🌮</span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Título animado */}
        <h1
          className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          Lanches e Pastéis{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 animate-gradient">
            Deliciosos
          </span>{' '}
          na Hora!
        </h1>

        {/* Descrição animada */}
        <p
          className={`text-xl text-gray-600 mb-10 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          Na <strong className="text-orange-600">Panda Food</strong>, preparamos lanches artesanais e pastéis crocantes
          com ingredientes frescos e muito sabor. Do clássico ao especial, temos o lanche
          perfeito para matar sua fome!
        </p>

        {/* Botões animados */}
        <div
          className={`flex flex-col sm:flex-row justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <button
            onClick={abrirWhatsApp}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center justify-center group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <Flame className="h-5 w-5 mr-2 group-hover:animate-bounce" />
            Fazer Pedido Agora
          </button>
          <button
            onClick={scrollToCardapio}
            className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-orange-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Ver Cardápio Completo
          </button>
        </div>

        {/* Características animadas */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div
            className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            style={{ transitionDelay: '800ms' }}
          >
            <Utensils className="h-10 w-10 text-orange-500 mx-auto mb-3 hover:rotate-12 transition-transform duration-300" />
            <p className="font-semibold text-gray-800">Ingredientes Frescos</p>
            <p className="text-sm text-gray-600 mt-1">Qualidade em cada mordida</p>
          </div>

          <div
            className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <Clock className="h-10 w-10 text-yellow-500 mx-auto mb-3 hover:rotate-12 transition-transform duration-300" />
            <p className="font-semibold text-gray-800">Preparado na Hora</p>
            <p className="text-sm text-gray-600 mt-1">Sempre quentinho pra você</p>
          </div>

          <div
            className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <Heart className="h-10 w-10 text-pink-500 mx-auto mb-3 hover:scale-110 transition-transform duration-300" />
            <p className="font-semibold text-gray-800">Feito com Carinho</p>
            <p className="text-sm text-gray-600 mt-1">Amor em cada receita</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .delay-100 {
          animation-delay: 1s;
        }
        
        .delay-300 {
          animation-delay: 3s;
        }
        
        .delay-500 {
          animation-delay: 5s;
        }
        
        .delay-700 {
          animation-delay: 7s;
        }
      `}</style>
    </section>
  )
}