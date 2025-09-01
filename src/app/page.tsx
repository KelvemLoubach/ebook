'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import minhaImagem from "../assets/image1.png";
import minhaImagem2 from "../assets/image2.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export default function Home() {
  // Testimonials data
  const testimonials = [
    {
      name: "Ana Silva",
      text: "Depois de ler o ebook, minhas vendas online aumentaram 300% em apenas 2 meses. Estratégias práticas e resultados reais!",
      result: "+300% em vendas"
    },
    {
      name: "Carlos Mendes",
      text: "O conteúdo é excepcional! Aprendi técnicas de marketing digital que ninguém mais ensina. Recomendo para todos.",
      result: "Negócio lucrativo"
    },
    {
      name: "Mariana Santos",
      text: "Do zero ao meu primeiro R$10k online. O passo-a-passo é claro e fácil de seguir. Vale cada centavo!",
      result: "R$10k/mês"
    }
  ]

  // FAQ data
  const faqItems = [
    {
      question: "O conteúdo é para iniciantes?",
      answer: "Sim! O ebook foi desenvolvido para todos os níveis, desde iniciantes completos até quem já tem experiência no mercado digital."
    },
    {
      question: "Preciso de experiência prévia?",
      answer: "Não necessariamente. As estratégias são apresentadas de forma gradual, permitindo que qualquer pessoa possa aplicar e obter resultados."
    },
    {
      question: "Recebo atualizações?",
      answer: "Sim! Todos os compradores recebem atualizações gratuitas do ebook por 1 ano, garantindo acesso às mais recentes estratégias do mercado."
    },
    {
      question: "Qual o formato do ebook?",
      answer: "O ebook é entregue em formato PDF digital, com acesso imediato após a confirmação do pagamento."
    },
    {
      question: "Tem garantia?",
      answer: "Sim! Oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro sem perguntas."
    }
  ]

  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 }
        } else if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 }
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 }
        } else {
          clearInterval(timer)
          return { hours: 0, minutes: 0, seconds: 0 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat filter grayscale"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')"
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <Badge className="bg-green-500 text-black hover:bg-green-400 transition-all duration-300 text-xs sm:text-sm">
                  LANÇAMENTO EXCLUSIVO
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block">Aprenda a Vender</span>
                  <span className="block text-green-400 mt-1 sm:mt-2">na Internet</span>
                  <span className="block mt-1 sm:mt-2">Transforme seu conhecimento</span>
                  <span className="block text-green-400">em renda real</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                  Descubra estratégias práticas e segredos do mercado digital que vão transformar sua vida financeira.
                </p>
              </div>
              
              <Button 
                className="bg-green-500 hover:bg-green-400 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/50 w-full max-w-xs mx-auto sm:mx-0 sm:w-auto"
                size="lg"
              >
                Quero meu Ebook
              </Button>
              
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
                <span className="flex items-center">✅ Acesso Imediato</span>
                <span className="flex items-center">✅ Conteúdo Exclusivo</span>
                <span className="flex items-center">✅ Garantia de 7 Dias</span>
              </div>
            </div>

            {/* Right Content - Professional Image */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative mx-auto">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105">
                  <img 
                    src={minhaImagem}
                    alt="Profissional em escritório moderno"
                     className="w-full h-80 object-cover" 
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-green-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-8 left-4 w-40 h-24 bg-gray-800 rounded-lg border border-green-500/30 transform rotate-6 shadow-lg hidden sm:block"></div>
                <div className="absolute -bottom-8 right-4 w-36 h-20 bg-gray-800 rounded-lg border border-blue-500/30 transform -rotate-6 shadow-lg hidden sm:block"></div>
              </div>
              
              {/* Neon Glow Effect */}
              <div className="absolute inset-0 bg-green-500 blur-[100px] sm:blur-[120px] opacity-15 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-red-900/20 via-purple-900/20 to-blue-900/20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <Badge className="bg-red-500 text-black hover:bg-red-400 text-sm sm:text-base animate-pulse">
                ⚠️ OFERTA LIMITADA
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Promoção Termina em:
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Não perca esta oportunidade única! O preço voltará ao normal em breve.
            </p>
          </div>

          {/* Countdown Display */}
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="relative group">
                  <div className="bg-gray-900 border-2 border-green-500/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transform transition-all duration-300 group-hover:scale-105 group-hover:border-green-400">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 mb-2">
                      {value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                      {unit === 'hours' ? 'Horas' : unit === 'minutes' ? 'Minutos' : 'Segundos'}
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-green-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 rounded-xl sm:rounded-2xl"></div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <div className="inline-flex items-center space-x-2 sm:space-x-4 bg-gray-900 border border-green-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm sm:text-base font-semibold">Apenas 127 vagas restantes!</span>
              </div>
              
              <Button 
                className="mt-6 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/50"
              >
                Garantir Minha Vaga Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Persuasive Section */}
      <section className="py-16 sm:py-20 bg-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Por Que <span className="text-green-400">97% dos Alunos</span> Conseguem Resultados?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Não é sorte. É método comprovado, suporte dedicado e comunidade exclusiva que fazem a diferença.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Proof Card 1 */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <span className="text-2xl">📊</span>
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold">Método Comprovado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm sm:text-base text-center">
                  Estratégias testadas por mais de 10.000 alunos com taxa de sucesso de 97%
                </p>
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center space-x-1 text-green-400 text-sm">
                    <span>✓</span>
                    <span>Cientificamente Validado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Proof Card 2 */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold">Suporte 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm sm:text-base text-center">
                  Acesso direto com especialistas e comunidade exclusiva para tirar suas dúvidas
                </p>
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center space-x-1 text-blue-400 text-sm">
                    <span>✓</span>
                    <span>Ajuda Imediata</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Proof Card 3 */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <span className="text-2xl">🚀</span>
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold">Resultados Rápidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm sm:text-base text-center">
                  85% dos alunos veem resultados nas primeiras 4 semanas após aplicar o método
                </p>
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center space-x-1 text-purple-400 text-sm">
                    <span>✓</span>
                    <span>Garantido</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Proof Bar */}
          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl p-6 sm:p-8 border border-green-500/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-green-400">10K+</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">Alunos Satisfeitos</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">4.9</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">Avaliação Média</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">97%</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">Taxa de Sucesso</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">Suporte Disponível</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image and Text Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105">
                  <img 
                    src={minhaImagem2}
                    alt="Marketing Digital"
                    className="w-full h-80 object-cover" 
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>
                
                {/* Decorative Cards */}
                <div className="absolute -top-8 left-4 w-32 h-20 bg-gray-800 rounded-lg border border-green-500/30 transform rotate-6 shadow-lg hidden sm:block"></div>
                <div className="absolute -bottom-8 right-4 w-28 h-16 bg-gray-800 rounded-lg border border-blue-500/30 transform -rotate-6 shadow-lg hidden sm:block"></div>
              </div>
            </div>

            {/* Text Side */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <Badge className="bg-blue-500 text-black hover:bg-blue-400 text-xs sm:text-sm">
                  TRANSFORMAÇÃO DIGITAL
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  De <span className="text-blue-400">Iniciante</span> a <span className="text-green-400">Especialista</span> em Vendas Online
                </h2>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Nossa metodologia exclusiva foi desenvolvida para levar você do zero ao profissional, 
                  mesmo que você nunca tenha vendido nada online antes. Com passo a passo detalhado, 
                  exemplos reais e suporte personalizado, sua transformação é garantida.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                {[
                  { icon: "🎯", title: "Foco em Resultados", desc: "Aprenda o que realmente funciona para gerar vendas" },
                  { icon: "⚡", title: "Velocidade de Implementação", desc: "Comece a aplicar as estratégias hoje mesmo" },
                  { icon: "📈", title: "Escalável", desc: "Técnicas que crescem junto com seu negócio" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                      <span className="text-lg">{feature.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-400 hover:to-green-400 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50 w-full sm:w-auto"
              >
                Começar Minha Transformação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              O que você vai <span className="text-green-400">aprender</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Conteúdo prático e aplicável que vai transformar sua forma de vender na internet
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Smartphone - Hidden on very small screens */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
              <div className="w-40 sm:w-48 md:w-56 lg:w-64 h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-gray-900 rounded-[1.5rem] sm:rounded-[2rem] p-2 sm:p-3 shadow-2xl border-2 border-green-500/50">
                <div className="absolute inset-2 sm:inset-3 bg-black rounded-[1rem] sm:rounded-[1.5rem] overflow-hidden flex items-center justify-center">
                  <div className="text-center px-2">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                      <span className="text-black font-bold text-xl sm:text-2xl">✓</span>
                    </div>
                    <p className="text-green-400 font-semibold text-xs sm:text-sm">Ebook Completo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 relative z-20">
              <div className="space-y-6 sm:space-y-8">
                <Card className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="text-green-400 text-sm sm:text-base md:text-lg">Estratégias de vendas que funcionam</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm sm:text-base">Técnicas comprovadas para aumentar suas conversões e faturamento</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="text-green-400 text-sm sm:text-base md:text-lg">Técnicas práticas para vender online</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm sm:text-base">Passo a passo detalhado para implementar hoje mesmo</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6 sm:space-y-8 mt-8 sm:mt-16 md:mt-0">
                <Card className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="text-green-400 text-sm sm:text-base md:text-lg">Segredos de marketing digital</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm sm:text-base">Estratégias que poucos conhecem e que geram resultados</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="text-green-400 text-sm sm:text-base md:text-lg">Passo-a-passo para seu negócio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm sm:text-base">Do zero ao lucro: guia completo para começar agora</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Preview Section */}
      <section className="py-16 sm:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Conteúdo completo para você <span className="text-green-400">aplicar</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Aprenda com exemplos reais e tutoriais claros que vão acelerar seu sucesso
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 h-80 sm:h-96 flex items-center justify-center">
                        <div className="text-center px-4">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                            <span className="text-black font-bold text-2xl sm:text-3xl">1</span>
                          </div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Fundamentos de Vendas</h3>
                          <p className="text-gray-300 text-sm sm:text-base">A base essencial para vender qualquer produto online</p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 h-80 sm:h-96 flex items-center justify-center">
                        <div className="text-center px-4">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                            <span className="text-black font-bold text-2xl sm:text-3xl">2</span>
                          </div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Marketing Digital</h3>
                          <p className="text-gray-300 text-sm sm:text-base">Estratégias avançadas para atrair clientes qualificados</p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 h-80 sm:h-96 flex items-center justify-center">
                        <div className="text-center px-4">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                            <span className="text-black font-bold text-2xl sm:text-3xl">3</span>
                          </div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Automação e Escala</h3>
                          <p className="text-gray-300 text-sm sm:text-base">Como automatizar vendas e escalar seu negócio</p>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black text-xs sm:text-sm font-bold">✓</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-xl font-semibold">Aprenda no seu ritmo</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Acesso vitalício ao conteúdo</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black text-xs sm:text-sm font-bold">✓</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-xl font-semibold">Conteúdo exclusivo</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Estratégias que você não encontra em outro lugar</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black text-xs sm:text-sm font-bold">✓</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-xl font-semibold">Aplicação prática imediata</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Comece a aplicar hoje mesmo</p>
                </div>
              </div>

              <Button 
                className="bg-green-500 hover:bg-green-400 text-black font-bold text-base sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/50 w-full max-w-xs mx-auto sm:mx-0 mt-6 sm:mt-8"
              >
                Ver Conteúdo Completo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Membership/Delivery Area */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Receba seu Ebook <span className="text-green-400">instantaneamente</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Acesso imediato e controle total sobre seu conteúdo
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="bg-black rounded-lg p-4 sm:p-6 border border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-base sm:text-xl font-semibold">Seu Ebook Premium</h3>
                      <Badge className="bg-green-500 text-black text-xs">Ativo</Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Formato:</span>
                        <span className="text-sm">PDF Digital</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Páginas:</span>
                        <span className="text-sm">250+</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Atualizações:</span>
                        <span className="text-sm">Gratuitas por 1 ano</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Suporte:</span>
                        <span className="text-sm">24/7</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-green-500 hover:bg-green-400 text-black font-bold text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/50 w-full max-w-xs mx-auto sm:mx-0"
                  >
                    Baixar Agora
                  </Button>
                </div>

                <div className="relative">
                  <div className="bg-gray-800 rounded-lg p-4 sm:p-6 h-64 sm:h-80 flex items-center justify-center">
                    <div className="text-center px-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                        <span className="text-black font-bold text-xl sm:text-2xl">📚</span>
                      </div>
                      <h3 className="text-base sm:text-xl font-bold mb-2">Acesso Liberado</h3>
                      <p className="text-gray-400 text-sm sm:text-base">Seu ebook está pronto para download</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  <span className="text-green-400">Thiago José</span>
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-lg text-gray-300 leading-relaxed">
                    Empreendedor digital especializado em vendas online e estratégias de marketing digital. 
                    Com mais de 7 anos de experiência, ajudei centenas de pessoas a transformar conhecimento em renda real.
                  </p>
                  <p className="text-sm sm:text-lg text-gray-300 leading-relaxed">
                    Autor de best-sellers e mentor de negócios digitais, desenvolvi métodos práticos que geram 
                    resultados reais e sustentáveis para qualquer pessoa, do iniciante ao avançado.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <Badge variant="outline" className="border-green-500 text-green-400 text-xs">+1000 alunos</Badge>
                  <Badge variant="outline" className="border-green-500 text-green-400 text-xs">7+ anos de experiência</Badge>
                  <Badge variant="outline" className="border-green-500 text-green-400 text-xs">Resultados comprovados</Badge>
                </div>
                
                <Button 
                  className="bg-green-500 hover:bg-green-400 text-black font-bold text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/50 w-full max-w-xs mx-auto sm:mx-0"
                >
                  Quero Aprender Agora
                </Button>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                  <div 
                    className="w-full h-64 sm:h-96 bg-cover bg-center filter grayscale"
                    style={{ 
                      backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')"
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              O que nossos <span className="text-green-400">leitores dizem</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Histórias reais de pessoas que transformaram suas vidas com nosso conteúdo
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300">
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-gray-800">
                    <div className="w-full h-full flex items-center justify-center text-xl sm:text-2xl">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <CardTitle className="text-sm sm:text-base md:text-lg">{testimonial.name}</CardTitle>
                  <Badge className="bg-green-500 text-black text-xs">{testimonial.result}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute -top-3 -left-2 text-green-400 text-lg sm:text-2xl">"</div>
                    <p className="text-gray-300 italic leading-relaxed pl-3 sm:pl-4 text-sm sm:text-base">
                      {testimonial.text}
                    </p>
                    <div className="absolute -bottom-3 -right-2 text-green-400 text-lg sm:text-2xl">"</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Perguntas <span className="text-green-600">Frequentes</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre o ebook e comece sua jornada hoje mesmo
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                  <AccordionTrigger className="text-left hover:text-green-600 transition-colors text-sm sm:text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm sm:text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 sm:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Precisa de <span className="text-green-400">ajuda?</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300">
                Estamos aqui para ajudar! Fale conosco diretamente via WhatsApp para suporte personalizado.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-sm font-bold">💬</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Suporte 24/7 via WhatsApp</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-sm font-bold">⚡</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Resposta rápida em minutos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-sm font-bold">🎯</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Ajuda especializada e personalizada</span>
                </div>
              </div>
              
              <Button 
                className="bg-green-500 hover:bg-green-400 text-black font-bold text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/50 w-full max-w-xs mx-auto sm:mx-0"
              >
                Fale Conosco
              </Button>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-48 sm:w-56 md:w-64 lg:w-80 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] bg-gray-800 rounded-[2rem] sm:rounded-[3rem] p-3 sm:p-4 shadow-2xl">
                <div className="absolute inset-3 sm:inset-4 bg-black rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
                  <div className="h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="bg-black px-3 sm:px-4 py-2 flex items-center justify-between text-xs">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-green-400 rounded-sm"></div>
                        <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-green-400 rounded-sm"></div>
                        <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-green-400 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* Chat Header */}
                    <div className="bg-green-500 text-black px-3 sm:px-4 py-2 sm:py-3">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center">
                          <span className="text-green-400 text-xs sm:text-sm">🎧</span>
                        </div>
                        <div>
                          <p className="font-semibold text-xs sm:text-sm">Suporte</p>
                          <p className="text-xs opacity-75">Online agora</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chat Content */}
                    <div className="flex-1 p-3 sm:p-4 space-y-3 sm:space-y-4 overflow-y-auto">
                      <div className="bg-gray-800 p-2 sm:p-3 rounded-xl sm:rounded-2xl max-w-[80%]">
                        <p className="text-xs sm:text-sm break-words">Olá! Como posso ajudar você hoje?</p>
                        <p className="text-xs text-gray-400 mt-1">9:35</p>
                      </div>
                      <div className="bg-gray-700 p-2 sm:p-3 rounded-xl sm:rounded-2xl max-w-[80%] ml-auto">
                        <p className="text-xs sm:text-sm break-words">Olá! Tenho dúvidas sobre o ebook</p>
                        <p className="text-xs text-gray-400 mt-1">9:36</p>
                      </div>
                      <div className="bg-gray-800 p-2 sm:p-3 rounded-xl sm:rounded-2xl max-w-[80%]">
                        <p className="text-xs sm:text-sm break-words">Claro! Estou aqui para ajudar.</p>
                        <p className="text-xs text-gray-400 mt-1">9:36</p>
                      </div>
                    </div>
                    
                    {/* Input Area */}
                    <div className="p-3 sm:p-4 border-t border-gray-800">
                      <div className="bg-gray-800 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-400">
                        Digite sua mensagem...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-green-500/20 py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Termos</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Política de Reembolso</a>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2024 Thiago José. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}