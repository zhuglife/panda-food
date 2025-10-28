'use client'

import { Instagram, Facebook, MessageCircle } from 'lucide-react'

export default function Footer() {
  const abrirWhatsApp = () => {
    const numero = '5515996654685'
    const mensagem = 'Olá! Gostaria de fazer um pedido no Panda Food 🍔'
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank')
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-gray-100 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 border-b border-orange-700/30 pb-8">

          {/* Logo e Descrição */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Panda <span className="text-yellow-400">Food</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lanches artesanais e pastéis crocantes feitos com ingredientes frescos e muito carinho.
              Sabor de verdade em Sorocaba - SP.
            </p>
            <div className="flex gap-4 mt-4">
              <button 
                onClick={abrirWhatsApp}
                className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </button>
              <a 
                href="#" 
                className="bg-pink-500 hover:bg-pink-600 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a 
                href="#" 
                className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Informações da Empresa */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Dados da Empresa</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>Razão Social:</strong> Vania Dias Motta<br />
              <strong>CNPJ:</strong> 13.098.423/0001-38<br />
              <strong>Natureza Jurídica:</strong> Empresário (Individual)<br />
              <strong>Porte:</strong> Micro Empresa<br />
              <strong>Situação:</strong> Ativa desde 12/01/2011
            </p>
          </div>

          {/* Contato e Horário */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Contato</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>Localização:</strong><br />
              Sorocaba - SP
            </p>
            <p className="mt-3 text-gray-300 text-sm">
              <strong>WhatsApp:</strong> <span className="text-yellow-400">(15) 98134-5869</span>
            </p>
            <p className="mt-3 text-gray-300 text-sm">
              <strong>Horário de Funcionamento:</strong><br />
              Seg a Sex: 18h às 23h<br />
              Sábados: 18h às 00h<br />
              Domingos: 18h às 23h
            </p>
          </div>
        </div>

        {/* Créditos e Direitos */}
        <div className="text-center text-gray-400 text-sm mt-6">
          <p>
            © {new Date().getFullYear()} Panda Food - Vania Dias Motta. Todos os direitos reservados.
          </p>
          <p className="mt-1">
            CNPJ: 13.098.423/0001-38 | Feito com <span className="text-red-500">❤️</span> e muito sabor
          </p>
        </div>
      </div>
    </footer>
  )
}