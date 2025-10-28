import Navegacao from '../components/Navegacao'
import Hero from '../components/Hero'
import Servicos from '../components/Servicos'
import Contato from '../components/Contato'
import ClientesSatisfeitos from '../components/ClientesSatisfeitos'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navegação fixa */}
      <Navegacao />

      {/* Conteúdo principal */}
      <div className="flex-1 pt-16">
        <Hero />
        <Servicos />
        <Contato />
      </div>

      {/* Rodapé com dados legais */}
      <Footer />
    </main>
  )
}
