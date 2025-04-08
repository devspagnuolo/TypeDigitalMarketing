"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Instagram, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F111A] text-white">
      <Head>
        <title>Type Digital Marketing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <Image src="/logo.png" alt="Logo Type Digital" width={100} height={100} className="mb-6" />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold tracking-tight mb-4"
        >
          Type Digital Marketing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg max-w-2xl text-white/90"
        >
          Transformamos marcas em referências digitais com estratégias de marketing inteligentes, tráfego pago e presença online profissional.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-8 flex gap-4 flex-wrap justify-center"
        >
          <a href="#contato"><Button size="lg">Fale Conosco</Button></a>
          <a href="#servicos"><Button size="lg" variant="outline" className="text-white border-white">Nossos Serviços <ArrowRight className="ml-2 w-4 h-4" /></Button></a>
        </motion.div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Quem somos</h2>
        <p className="text-lg text-center text-white/80">
          Somos uma agência digital especializada em performance. Atuamos com foco em gerar resultados reais e mensuráveis para nossos clientes, unindo tecnologia, criatividade e estratégia.
        </p>
      </section>

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
            <Card key={i} className="rounded-2xl bg-[#1F2435] text-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-white/80 mb-4">{s.desc}</p>
                <a href="#contato"><Button variant="secondary">Contratar agora</Button></a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

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
          <Button type="submit">Enviar</Button>
        </form>
      </section>

      <footer className="text-center py-6 text-white/40 text-sm">
        © {new Date().getFullYear()} Type Digital Marketing. Todos os direitos reservados.
      </footer>
    </main>
  );
}
