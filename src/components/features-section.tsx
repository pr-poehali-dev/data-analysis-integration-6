import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Выбор из лучших банков",
    description: "Сравниваем предложения ведущих банков и показываем самые выгодные карты и кредиты под вашу задачу.",
    icon: "globe",
    badge: "Выбор",
  },
  {
    title: "Бесплатный подбор",
    description: "Подбор и оформление заявки полностью бесплатны — вы не платите ни рубля за наши услуги.",
    icon: "zap",
    badge: "0 ₽",
  },
  {
    title: "Заявка за 2 минуты",
    description: "Простая онлайн-анкета без визита в офис. Заполните пару полей и отправьте заявку сразу в несколько банков.",
    icon: "target",
    badge: "Быстро",
  },
  {
    title: "Высокий процент одобрения",
    description: "Подаём заявку туда, где выше шанс одобрения именно для вас, исходя из ваших условий.",
    icon: "brain",
    badge: "Одобрение",
  },
  {
    title: "Безопасность данных",
    description: "Ваши данные передаются по защищённому каналу и используются только для оформления заявки.",
    icon: "lock",
    badge: "Защита",
  },
  {
    title: "Поддержка на каждом шаге",
    description: "Поможем выбрать продукт, разобраться с условиями и довести оформление до получения карты.",
    icon: "link",
    badge: "Помощь",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Выгодные карты и кредиты от проверенных банков — быстро, бесплатно и без лишних походов в офис
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}