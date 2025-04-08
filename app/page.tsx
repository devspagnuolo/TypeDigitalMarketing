"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F111A] text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <Image src="/logo.png" alt="Logo Type Digital" width={100} height={100} className="mb-6" />
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Type Digital Marketing
        </h1>
        <p className="text-lg max-w-2xl text-white/90">
          Transformamos marcas em referências digitais com estratégias de marketing inteligentes, tráfego pago e presença online profissional.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a href="#contato" className="bg-white text-black px-6 py-3 rounded-full font-semibold">Fale Conosco</a>
          <a href="#servicos" className="border border-white text-white px-6 py-3 rounded-full font-semibold">Nossos Serviços</a>
        </div>
      </section>

      {/* Sobre nós */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Quem somos</h2>
        <p className="text-lg text-center text-white/80">
          Somos uma agência digital especializada em performance. Atuamos com foco em gerar resultados reais e mensuráveis para nossos clientes, unindo tecnologia, criatividade e estratégia.
        </p>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-[#161A2A] px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Nossos serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Gestão de Tráfego Pago", desc: "Campanhas no Google, Meta Ads e TikTok focadas em conversão." },
            { title: "Landing Pages", desc: "Páginas otimizadas para captação de leads com alta conversão." },
            { title: "Social Media", desc: "Gestão de redes sociais com branding e engajamento." },
            { title: "Branding", desc: "Identidade visual completa para posicionar sua marca." },
            { title: "Copywriting", desc: "Textos que vendem para anúncios, páginas e redes." },
            { title: "Consultoria Digital", desc: "Análise e planejamento estratégico digital." },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl bg-[#1F2435] text-white shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-white/80 mb-4">{s.desc}</p>
              <a href="#contato" className="inline-block bg-white text-black px-4 py-2 rounded font-semibold">Contratar agora</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Entre em contato</h2>
        <form action="https://formsubmit.co/contato@typedigitalmarketing.com.br" method="POST" className="flex flex-col gap-4 text-left">
          <input type="text" name="name" placeholder="Seu nome" required className="p-3 rounded bg-white text-black" />
          <input type="email" name="email" placeholder="Seu e-mail" required className="p-3 rounded bg-white text-black" />
          <select name="servico" className="p-3 rounded bg-white text-black">
            <option>Gestão de Tráfego</option>
            <option>Landing Page</option>
            <option>Social Media</option>
            <option>Branding</option>
            <option>Copywriting</option>
            <option>Consultoria</option>
          </select>
          <textarea name="mensagem" placeholder="Sua mensagem" required rows={4} className="p-3 rounded bg-white text-black"></textarea>
          <button type="submit" className="bg-white text-black px-6 py-3 rounded-full font-semibold">Enviar</button>
        </form>
      </section>

      <footer className="text-center py-6 text-white/40 text-sm">
        © {new Date().getFullYear()} Type Digital Marketing. Todos os direitos reservados.
      </footer>
    </main>
  );
}