import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Trophy, Calendar, Clock, TrendingUp, Star, Users, ChevronRight } from "lucide-react"

export default function SportsPortal() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-red-600" />
            <span className="text-xl font-bold tracking-tight">SportZone</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-red-600 transition-colors">
              Início
            </a>
            <a href="#" className="text-sm font-medium hover:text-red-600 transition-colors">
              Futebol
            </a>
            <a href="#" className="text-sm font-medium hover:text-red-600 transition-colors">
              Basquete
            </a>
            <a href="#" className="text-sm font-medium hover:text-red-600 transition-colors">
              Tênis
            </a>
            <a href="#" className="text-sm font-medium hover:text-red-600 transition-colors">
              Notícias
            </a>
            <a href="#" className="text-sm font-medium hover:text-red-600 transition-colors">
              Estatísticas
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Entrar
            </Button>
            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              Assinar
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
        ></div>
        <div className="container relative z-20 h-full flex flex-col justify-center">
          <Badge className="mb-4 w-fit bg-red-600 hover:bg-red-700">Em destaque</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl mb-4">
            Acompanhe os melhores momentos do esporte mundial
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-8">
            Notícias, análises, estatísticas e cobertura completa dos principais eventos esportivos em um só lugar.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Explorar agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Últimas notícias
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Sports */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Esportes em Destaque</h2>
            <Button variant="ghost" className="gap-1">
              Ver todos
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="futebol" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="futebol">Futebol</TabsTrigger>
              <TabsTrigger value="basquete">Basquete</TabsTrigger>
              <TabsTrigger value="tenis">Tênis</TabsTrigger>
              <TabsTrigger value="formula1">Fórmula 1</TabsTrigger>
            </TabsList>

            <TabsContent value="futebol" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Featured Match */}
                <Card className="col-span-1 md:col-span-3 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/3 p-6 flex flex-col justify-center">
                      <Badge className="w-fit mb-2">Hoje • 21:45</Badge>
                      <h3 className="text-2xl font-bold mb-2">Final da Champions League</h3>
                      <p className="text-gray-500 mb-4">
                        Acompanhe ao vivo a grande final entre Real Madrid e Manchester City no Estádio Wembley.
                      </p>
                      <div className="flex items-center gap-4">
                        <Button className="bg-red-600 hover:bg-red-700">Assistir ao vivo</Button>
                        <Button variant="outline">Estatísticas</Button>
                      </div>
                    </div>
                    <div
                      className="md:w-1/3 h-48 md:h-auto bg-cover bg-center"
                      style={{ backgroundImage: "url('/placeholder.svg?height=400&width=300')" }}
                    ></div>
                  </div>
                </Card>

                {/* Match Cards */}
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="flex gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Hoje</span>
                        </Badge>
                        <Badge variant="outline" className="flex gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{18 + i}:00</span>
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold">
                            T{i}
                          </div>
                          <span className="font-medium">Time {i}</span>
                        </div>
                        <div className="text-xl font-bold">VS</div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Time {i + 3}</span>
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold">
                            T{i + 3}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 text-center">Campeonato Brasileiro - Série A</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Ver detalhes
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="basquete" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">NBA</Badge>
                        <Badge variant="outline" className="flex gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{19 + (i % 3)}:30</span>
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold">
                            B{i}
                          </div>
                          <span className="font-medium">Time B{i}</span>
                        </div>
                        <div className="text-xl font-bold">VS</div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Time B{i + 6}</span>
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold">
                            B{i + 6}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Ver detalhes
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tenis" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Roland Garros 2024</CardTitle>
                  <CardDescription>Acompanhe os principais jogos do Grand Slam francês</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold">
                            J{i}
                          </div>
                          <div>
                            <p className="font-medium">Jogador {i}</p>
                            <p className="text-sm text-gray-500">Ranking: #{i + 1}</p>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium">Quadra Central</div>
                          <div className="text-xs text-gray-500">Quartas de Final</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-medium">Jogador {i + 3}</p>
                            <p className="text-sm text-gray-500">Ranking: #{i + 5}</p>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold">
                            J{i + 3}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver todos os jogos</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="formula1" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>GP de Mônaco</CardTitle>
                  <CardDescription>Resultados da última corrida e classificação do campeonato</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Pódio</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="text-xl font-bold mb-1">2º</div>
                          <div className="w-12 h-12 rounded-full bg-gray-200 mx-auto mb-2 flex items-center justify-center font-bold">
                            P2
                          </div>
                          <div className="font-medium">Piloto 2</div>
                          <div className="text-sm text-gray-500">Equipe B</div>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                          <div className="text-xl font-bold text-yellow-600 mb-1">1º</div>
                          <div className="w-12 h-12 rounded-full bg-yellow-100 mx-auto mb-2 flex items-center justify-center font-bold text-yellow-700">
                            P1
                          </div>
                          <div className="font-medium">Piloto 1</div>
                          <div className="text-sm text-gray-500">Equipe A</div>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="text-xl font-bold mb-1">3º</div>
                          <div className="w-12 h-12 rounded-full bg-gray-200 mx-auto mb-2 flex items-center justify-center font-bold">
                            P3
                          </div>
                          <div className="font-medium">Piloto 3</div>
                          <div className="text-sm text-gray-500">Equipe C</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Classificação do Campeonato</h4>
                      <div className="space-y-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center font-bold text-sm">
                                {i}
                              </div>
                              <span className="font-medium">Piloto {i}</span>
                            </div>
                            <div className="font-bold">{300 - i * 25} pts</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver classificação completa</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Últimas Notícias</h2>
            <Button variant="ghost" className="gap-1">
              Ver todas
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Brasil se classifica para as quartas de final da Copa América",
                category: "Futebol",
                image: "/placeholder.svg?height=300&width=500",
                time: "2 horas atrás",
              },
              {
                title: "Lakers contrata novo técnico para a próxima temporada",
                category: "Basquete",
                image: "/placeholder.svg?height=300&width=500",
                time: "5 horas atrás",
              },
              {
                title: "Nadal anuncia que esta será sua última temporada no tênis",
                category: "Tênis",
                image: "/placeholder.svg?height=300&width=500",
                time: "8 horas atrás",
              },
              {
                title: "Fórmula 1 anuncia novo Grande Prêmio para o calendário de 2025",
                category: "Fórmula 1",
                image: "/placeholder.svg?height=300&width=500",
                time: "12 horas atrás",
              },
              {
                title: "Seleção brasileira de vôlei vence Itália na Liga das Nações",
                category: "Vôlei",
                image: "/placeholder.svg?height=300&width=500",
                time: "1 dia atrás",
              },
              {
                title: "Surfista brasileiro conquista etapa do Mundial em Portugal",
                category: "Surf",
                image: "/placeholder.svg?height=300&width=500",
                time: "1 dia atrás",
              },
            ].map((news, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${news.image}')` }}></div>
                <CardContent className="pt-6">
                  <Badge className="mb-2">{news.category}</Badge>
                  <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                      <span className="text-sm">Por Redação</span>
                    </div>
                    <span className="text-sm text-gray-500">{news.time}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full">
                    Ler mais
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Estatísticas Esportivas</h2>
              <p className="text-gray-400">Dados e análises dos principais campeonatos</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Ver estatísticas completas
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Artilheiros", icon: <TrendingUp className="h-5 w-5" />, color: "bg-red-600" },
              { title: "Assistências", icon: <Users className="h-5 w-5" />, color: "bg-blue-600" },
              { title: "Classificação", icon: <Trophy className="h-5 w-5" />, color: "bg-green-600" },
              { title: "Desempenho", icon: <Star className="h-5 w-5" />, color: "bg-purple-600" },
            ].map((stat, i) => (
              <Card key={i} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full ${stat.color} flex items-center justify-center`}>
                      {stat.icon}
                    </div>
                    <CardTitle>{stat.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">
                            {j}
                          </div>
                          <span>Jogador {i * 3 + j}</span>
                        </div>
                        <div className="font-bold">{20 - j * 2}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full text-gray-300 hover:text-white">
                    Ver mais
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Vídeos em Destaque</h2>
            <Button variant="ghost" className="gap-1">
              Ver todos
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <Button size="icon" className="rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </Button>
                </div>
                <div
                  className="aspect-video bg-cover bg-center"
                  style={{ backgroundImage: `url('/placeholder.svg?height=300&width=500')` }}
                ></div>
                <div className="p-4 bg-white">
                  <Badge className="mb-2">
                    {["Futebol", "Basquete", "Tênis", "Fórmula 1", "Vôlei", "Surf"][i % 6]}
                  </Badge>
                  <h3 className="font-bold mb-1">Melhores momentos da rodada {i}</h3>
                  <p className="text-sm text-gray-500">3.2k visualizações • 2 dias atrás</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Fique por dentro de tudo</h2>
              <p className="text-white/90 mb-6">
                Assine nossa newsletter e receba as últimas notícias, análises e conteúdos exclusivos sobre o mundo dos
                esportes.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-4 py-2 rounded-lg flex-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="bg-white text-red-600 hover:bg-gray-100">Assinar</Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 bg-red-500 rounded-full flex items-center justify-center">
                <Trophy className="w-24 h-24 text-white/90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Developer */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
              DMS
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Sobre o Desenvolvedor</h2>
            <p className="text-lg text-gray-600 mb-6">
              Este projeto foi desenvolvido por <strong>Davi de Moura Seares</strong>, estudante da
              <strong> Universidade Iguaçu (UNIG)</strong>, como parte dos estudos em desenvolvimento web e design de
              interfaces modernas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-base px-4 py-2">
                Desenvolvimento Web
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                React & Next.js
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                UI/UX Design
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                Universidade Iguaçu - UNIG
              </Badge>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <Button variant="outline" className="gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Ver no GitHub
              </Button>
              <Button variant="outline" className="gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="h-6 w-6 text-red-500" />
                <span className="text-xl font-bold tracking-tight">SportZone</span>
              </div>
              <p className="text-gray-400 mb-4">
                Sua fonte completa de informações esportivas, com cobertura de todos os principais eventos e
                campeonatos.
              </p>
              <div className="flex gap-4">
                <Button size="icon" variant="ghost" className="rounded-full h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Esportes</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Futebol
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Basquete
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Tênis
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Fórmula 1
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Vôlei
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    MMA
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Conteúdo</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Notícias
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Análises
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Estatísticas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Vídeos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Calendário
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Resultados
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Sobre o Projeto</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-400">Desenvolvido por:</span>
                </li>
                <li>
                  <span className="text-white font-medium">Davi de Moura Seares</span>
                </li>
                <li>
                  <span className="text-gray-400">Estudante da UNIG</span>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Portfólio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="bg-gray-800 my-6" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 SportZone - Desenvolvido por Davi de Moura Seares | Universidade Iguaçu (UNIG)
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Termos
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacidade
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
