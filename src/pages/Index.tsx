import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/90">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="font-display text-2xl font-bold text-primary">ТЕНИ РАЗУМА</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#chapters" className="text-sm font-medium hover:text-primary transition-colors">Главы</a>
              <a href="#author" className="text-sm font-medium hover:text-primary transition-colors">Автор</a>
              <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            </div>
            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={18} />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-6 bg-primary/5 text-primary border-primary/20">
              Психологический триллер
            </Badge>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Дно Весты
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Погрузитесь в мир, где реальность переплетается с кошмарами, 
              а каждая глава открывает новые тайны человеческой психики
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-medium">
                <Icon name="BookOpen" className="mr-2" size={20} />
                Начать чтение
              </Button>
              <Button variant="outline" size="lg" className="font-medium">
                <Icon name="Send" className="mr-2" size={20} />
                Поделиться в Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section id="chapters" className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Главы</h2>
            <p className="text-lg text-muted-foreground">Следите за развитием истории</p>
          </div>
          <div className="grid gap-6">
            {[
              {
                number: "01",
                title: "Первые признаки",
                description: "Доктор Анна Волкова впервые замечает странные изменения в поведении своего пациента...",
                status: "available",
                readTime: "12 мин"
              },
              {
                number: "02", 
                title: "Искажённая реальность",
                description: "Границы между сном и явью начинают стираться, а воспоминания превращаются в кошмары...",
                status: "available",
                readTime: "15 мин"
              },
              {
                number: "03",
                title: "Глубже в бездну",
                description: "Анна понимает, что стала частью чьей-то жестокой игры, но выхода уже нет...",
                status: "coming-soon",
                readTime: "18 мин"
              },
              {
                number: "04",
                title: "Последний шанс",
                description: "Финальная попытка вырваться из лабиринта собственного сознания...",
                status: "coming-soon", 
                readTime: "20 мин"
              }
            ].map((chapter, index) => (
              <Card key={index} className={`transition-all duration-300 hover:shadow-lg animate-fade-in ${chapter.status === 'available' ? 'cursor-pointer hover:scale-[1.02]' : 'opacity-60'}`} 
                    style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="flex flex-row items-center space-y-0 pb-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="font-display font-bold text-primary">{chapter.number}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ml-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-display text-xl">{chapter.title}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant={chapter.status === 'available' ? 'default' : 'secondary'} className="text-xs">
                          {chapter.status === 'available' ? 'Доступна' : 'Скоро'}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{chapter.readTime}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-base leading-relaxed">
                    {chapter.description}
                  </CardDescription>
                  {chapter.status === 'available' && (
                    <div className="flex items-center justify-between mt-4">
                      <Button variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary">
                        Читать главу
                        <Icon name="ArrowRight" className="ml-1" size={16} />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section id="author" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Icon name="User" size={120} className="text-primary/40" />
              </div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h2 className="font-display text-4xl font-bold mb-6">Об авторе</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Практикующий психолог с 15-летним стажем, специализирующийся на исследовании 
                человеческого сознания и механизмов психологической защиты. 
                Автор научных статей и популярных книг о психологии.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                «Тени Разума» — это попытка показать читателю, насколько тонка граница 
                между нормой и патологией, между реальностью и иллюзией.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="text-sm">Психология</Badge>
                <Badge variant="outline" className="text-sm">Триллеры</Badge>
                <Badge variant="outline" className="text-sm">Научпоп</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Отзывы читателей</h2>
            <p className="text-lg text-muted-foreground">Что говорят о книге</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Мария К.",
                text: "Невероятно атмосферная книга! Каждая глава держит в напряжении до последней строчки. Психологические детали просто потрясающие.",
                rating: 5
              },
              {
                name: "Алексей Р.",
                text: "Автор мастерски играет с восприятием читателя. Временами казалось, что граница между реальностью и вымыслом стирается и у меня самого.",
                rating: 5
              },
              {
                name: "Елена В.",
                text: "Как психолог, могу сказать — автор отлично знает свое дело. Описания психических процессов очень достоверны и пугающе реалистичны.",
                rating: 4
              },
              {
                name: "Дмитрий Л.",
                text: "Ждал новую главу как наркотик. Сюжет закручен так, что предсказать развитие событий просто невозможно. Браво!",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          size={16} 
                          className={i < review.rating ? "fill-current" : "text-muted-foreground"} 
                        />
                      ))}
                    </div>
                    <span className="ml-2 font-medium text-sm">{review.name}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Присоединяйтесь к читателям</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Получайте уведомления о новых главах и обсуждайте книгу с другими читателями
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-medium">
              <Icon name="Send" className="mr-2" size={20} />
              Подписаться в Telegram
            </Button>
            <Button variant="outline" size="lg" className="font-medium">
              <Icon name="Bell" className="mr-2" size={20} />
              Уведомления
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <Separator className="mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="mb-4 md:mb-0">
              <span className="font-display font-semibold text-foreground">ТЕНИ РАЗУМА</span> — 2024
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition-colors">Telegram</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
              <a href="#" className="hover:text-primary transition-colors">О проекте</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}