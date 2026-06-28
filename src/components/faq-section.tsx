import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько стоит ваша услуга?",
      answer:
        "Подбор и оформление заявки полностью бесплатны. Мы получаем вознаграждение от банков, поэтому вы не платите ничего.",
    },
    {
      question: "Как происходит подбор карты или кредита?",
      answer:
        "Вы заполняете короткую анкету, мы сравниваем предложения банков и показываем самые выгодные варианты под ваши условия. Заявку можно отправить сразу в несколько банков.",
    },
    {
      question: "Влияет ли заявка на кредитную историю?",
      answer:
        "Отправка заявки через нас не портит кредитную историю. Банк делает запрос только после того, как вы подтвердите оформление выбранного продукта.",
    },
    {
      question: "Какие банки участвуют в подборе?",
      answer:
        "Мы сотрудничаем с ведущими банками страны. Под вашу заявку подбираются те, у кого выше шанс одобрения и наиболее выгодные условия.",
    },
    {
      question: "Какие документы нужны для оформления?",
      answer:
        "Для большинства карт и кредитов достаточно паспорта. По некоторым продуктам банк может запросить дополнительные документы — мы заранее подскажем какие.",
    },
    {
      question: "Как быстро придёт решение?",
      answer:
        "По картам и небольшим кредитам решение обычно приходит за несколько минут. По крупным суммам срок рассмотрения может занять до одного рабочего дня.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы об оформлении карт и кредитов через наш сервис.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}