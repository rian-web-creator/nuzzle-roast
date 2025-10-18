import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { title: 'Café Latte', subtitle: 'Silky milk, rich espresso', price: '$3.50' },
  { title: 'Flat White', subtitle: 'Velvety microfoam', price: '$3.80' },
  { title: 'Honey Butter Waffle', subtitle: 'House-made, signature', price: '$6.50' },
  { title: 'Iced Brew', subtitle: 'Slow-steeped cold brew', price: '$4.00' },
  { title: 'Chocolate Waffle', subtitle: 'Decadent & warm', price: '$6.00' },
  { title: 'Matcha Latte', subtitle: 'Ceremonial grade matcha', price: '$4.20' }
]

export default function Menu(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-3xl font-bold text-[var(--brown)] mb-6">Menu</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, idx)=> (
          <motion.div key={idx} whileHover={{scale:1.03}} className="rounded-2xl p-5 bg-white shadow-sm border border-transparent hover:shadow-lg transition">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-lg font-semibold text-[var(--brown)]">{it.title}</div>
                <div className="text-sm text-[var(--muted)]">{it.subtitle}</div>
              </div>
              <div className="text-[var(--mustard)] font-bold">{it.price}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
