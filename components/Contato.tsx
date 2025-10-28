'use client'

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