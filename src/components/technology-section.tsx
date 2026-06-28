import { Card } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const offers = [
  { name: "Займ №1", type: "Микрозайм", url: "https://trk.ppdu.ru/click/1LFPxFLd?erid=Kra23k98b" },
  { name: "Займ №2", type: "Микрозайм", url: "https://trk.ppdu.ru/click/VpFugzhr?erid=2SDnjcbi1tL" },
  { name: "Займ №3", type: "Микрозайм", url: "https://trk.ppdu.ru/click/Dl1SslhC?erid=2SDnjcBztLi" },
  { name: "Займ №4", type: "Микрозайм", url: "https://trk.ppdu.ru/click/2GrdTqlA?erid=0" },
  { name: "Займ №5", type: "Микрозайм", url: "https://trk.ppdu.ru/click/OYQ7Jrgd?erid=2SDnjcfzxKL" },
  { name: "Займ №6", type: "Микрозайм", url: "https://trk.ppdu.ru/click/cy5RwWRV?erid=2SDnjdKGNEg" },
  { name: "Займ №7", type: "Микрозайм", url: "https://trk.ppdu.ru/click/lJaXddU2?erid=2SDnjdkMLTk" },
  { name: "Займ №8", type: "Микрозайм", url: "https://trk.ppdu.ru/click/PA0weoaz?erid=2SDnjdBQcLS" },
  { name: "Займ №9", type: "Микрозайм", url: "https://trk.ppdu.ru/click/seQCMRdV?erid=2SDnjcbdEaL" },
  { name: "Займ №10", type: "Микрозайм", url: "https://trk.ppdu.ru/click/URJYPDdM?erid=2SDnjdSo1Hk" },
  { name: "Займ №11", type: "Микрозайм", url: "https://trk.ppdu.ru/click/3rneyZ4I?erid=2SDnjcVVfjj" },
  { name: "Займ №12", type: "Микрозайм", url: "https://trk.ppdu.ru/click/3y1GzNSH?erid=2SDnjcQvakJ" },
  { name: "Займ №13", type: "Микрозайм", url: "https://trk.ppdu.ru/click/MOmV0rSH?erid=2SDnjd3vqQj" },
  { name: "Займ №14", type: "Микрозайм", url: "https://trk.ppdu.ru/click/bhJyXMof?erid=2SDnjda8uPM" },
  { name: "Займ №15", type: "Микрозайм", url: "https://trk.ppdu.ru/click/pnTFHOjr?erid=2SDnjdZYeeW" },
  { name: "Кредит №1", type: "Кредит", url: "https://trk.ppdu.ru/click/he4yyGlp?erid=2SDnjeBXSqx" },
  { name: "Кредит №2", type: "Кредит", url: "https://trk.ppdu.ru/click/xl1ZuVkd?erid=2SDnjbuHuCz" },
  { name: "Кредит №3", type: "Кредит", url: "https://trk.ppdu.ru/click/YhzQSM6j?erid=2SDnjbxiPg4" },
  { name: "Кредит №4", type: "Кредит", url: "https://trk.ppdu.ru/click/Viy5GONs?erid=2SDnjc3GiTC" },
  { name: "Кредит №5", type: "Кредит", url: "https://trk.ppdu.ru/click/BEkSlzZN?erid=2SDnjevZFtJ" },
  { name: "Кредит №6", type: "Кредит", url: "https://trk.ppdu.ru/click/ssvRpDVR?erid=2SDnjcg7gZA" },
  { name: "Кредит №7", type: "Кредит", url: "https://trk.ppdu.ru/click/qr0zzDkB?erid=2SDnjdr3sYP" },
  { name: "Кредит №8", type: "Кредит", url: "https://trk.ppdu.ru/click/NmSlwZEg?erid=Kra23w9ze" },
  { name: "Кредит №9", type: "Кредит", url: "https://trk.ppdu.ru/click/4VIwbras?erid=2SDnjeVT5Gb" },
  { name: "Кредит №10", type: "Кредит", url: "https://trk.ppdu.ru/click/yA9mEVqO?erid=2SDnjbrUYhH" },
  { name: "Кредит №11", type: "Кредит", url: "https://trk.ppdu.ru/click/c8F3AWv1?erid=LjN8KcZD2" },
  { name: "Кредит №12", type: "Кредит", url: "https://trk.ppdu.ru/click/WOvZAU8B?erid=2SDnjdPEhaA" },
  { name: "Кредит №13", type: "Кредит", url: "https://trk.ppdu.ru/click/K0TClyXJ?erid=2SDnjd8rmri" },
  { name: "Кредит №14", type: "Кредит", url: "https://trk.ppdu.ru/click/PMrH4ieb?erid=2SDnjdTrs6M" },
  { name: "Кредит №15", type: "Кредит", url: "https://trk.ppdu.ru/click/WJknXqWb?erid=2SDnjcn5Ftt" },
]

export function TechnologySection() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">Предложения банков и МФО</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Выберите подходящее предложение и оформите заявку онлайн. Подбор бесплатный, решение — за пару минут.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <a
              key={index}
              href={offer.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group"
            >
              <Card className="glow-border h-full p-6 flex items-center justify-between transition-all duration-300 hover:border-red-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20 bg-card">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                    <Icon name={offer.type === "Кредит" ? "Landmark" : "Wallet"} size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-card-foreground">{offer.name}</p>
                    <p className="text-sm text-muted-foreground">{offer.type}</p>
                  </div>
                </div>
                <Icon
                  name="ArrowRight"
                  size={20}
                  className="text-muted-foreground transition-all duration-300 group-hover:text-red-500 group-hover:translate-x-1"
                />
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
