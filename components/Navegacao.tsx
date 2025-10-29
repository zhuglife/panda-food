'use client'

import { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image';
// Função WhatsApp
const abrirWhatsApp = () => {
  const numero = '5515996654685'
  const mensagem = 'Olá! Gostaria de fazer um pedido no Panda Food 🍔'
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
  window.open(url, '_blank')
}

// Função para scroll suave
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Navegacao() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-orange-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Panda Food */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <Image
                src="/logo.png"
                alt="Panda Food Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                Panda <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Food</span>
              </h1>
            </div>
          </Link>
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Início
            </Link>
            <Link href="/quem-somos" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Quem Somos
            </Link>
            <button
              onClick={() => scrollToSection('cardapio')}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Cardápio
            </button>
            <button
              onClick={abrirWhatsApp}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold flex items-center shadow-md"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Fazer Pedido
            </button>
          </div>

          {/* Botão do menu mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className="text-gray-700 p-2 hover:text-orange-500 transition-colors"
            >
              {menuAberto ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {menuAberto && (
          <div className="md:hidden border-t border-orange-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg font-medium transition-colors"
                onClick={() => setMenuAberto(false)}
              >
                Início
              </Link>
              <Link
                href="/quem-somos"
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg font-medium transition-colors"
                onClick={() => setMenuAberto(false)}
              >
                Quem Somos
              </Link>
              <button
                onClick={() => {
                  scrollToSection('cardapio')
                  setMenuAberto(false)
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg font-medium transition-colors"
              >
                Cardápio
              </button>
              <button
                onClick={() => {
                  abrirWhatsApp()
                  setMenuAberto(false)
                }}
                className="w-full mt-2 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 font-semibold flex items-center justify-center shadow-md"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Fazer Pedido
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}