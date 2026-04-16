import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const cases = [
  {
    id: 1,
    name: "Strike Case",
    description: "Армейские скины и редкие пистолеты",
    price: "49 ₽",
    image: "https://cdn.poehali.dev/projects/b6aca5d8-5216-40ad-921f-36080097b9a7/files/ed1ebf71-352a-4f26-bab9-748501694f59.jpg",
    rarity: "Обычный",
    rarityColor: "#4ade80",
    items: ["AK-47", "M4A1", "Desert Eagle"],
  },
  {
    id: 2,
    name: "Elite Case",
    description: "Эксклюзивные скины и ножи",
    price: "149 ₽",
    image: "https://cdn.poehali.dev/projects/b6aca5d8-5216-40ad-921f-36080097b9a7/files/4a37114d-15c1-4145-8653-edb7c7849a95.jpg",
    rarity: "Редкий",
    rarityColor: "#FF4D00",
    items: ["Karambit", "Butterfly", "AWP"],
    popular: true,
  },
  {
    id: 3,
    name: "Legend Case",
    description: "Легендарные предметы и уникальные ножи",
    price: "349 ₽",
    image: "https://cdn.poehali.dev/projects/b6aca5d8-5216-40ad-921f-36080097b9a7/files/68e4ed37-6bb9-4bf8-812b-13ff982cfab9.jpg",
    rarity: "Легендарный",
    rarityColor: "#a855f7",
    items: ["Керамбит Fade", "Neon Rider", "Dragon Lore"],
  },
]

interface CasesSectionProps {
  isActive: boolean
}

export default function CasesSection({ isActive }: CasesSectionProps) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Выбери свой кейс
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Три уровня — от старта до легенды
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {cases.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
            className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group hover:border-[#FF4D00]/40 transition-all duration-300"
            style={item.popular ? { boxShadow: '0 0 30px rgba(255,77,0,0.2)' } : {}}
          >
            {item.popular && (
              <div className="absolute top-3 right-3 z-10 bg-[#FF4D00] text-white text-xs font-bold px-2 py-1 rounded-full">
                ХИТ
              </div>
            )}

            <div className="relative h-44 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <span
                className="absolute bottom-3 left-3 text-xs font-semibold px-2 py-1 rounded-full bg-black/50"
                style={{ color: item.rarityColor }}
              >
                {item.rarity}
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-white font-bold text-xl mb-1">{item.name}</h3>
              <p className="text-neutral-400 text-sm mb-4">{item.description}</p>

              <div className="flex flex-wrap gap-1 mb-5">
                {item.items.map((skin) => (
                  <span key={skin} className="text-xs text-neutral-300 bg-white/10 px-2 py-0.5 rounded">
                    {skin}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-2xl">{item.price}</span>
                <Button
                  size="sm"
                  className="bg-[#FF4D00] text-white hover:bg-[#cc3d00] transition-colors font-semibold gap-2"
                >
                  <Icon name="Package" size={14} />
                  Открыть
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
