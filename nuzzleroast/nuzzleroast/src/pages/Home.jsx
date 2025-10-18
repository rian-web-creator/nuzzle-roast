import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-3" style={{backgroundColor:'rgba(230,176,68,0.10)', padding:'6px 12px', borderRadius:9999}}>
          <span className="text-[var(--mustard)]">New</span>
          <span className="text-[var(--muted)]">Signature Café Latte</span>
        </div>

        <h2 className="text-4xl font-extrabold leading-tight text-[var(--brown)]">Warm moments, roasted with care</h2>
        <p className="text-[var(--muted)]">Classic brews and artisanal waffles — an intimate spot with sunlit corners, soft music, and coffee that tells a story. Come for the aroma, stay for the comfort.</p>

        <div className="flex gap-4">
          <motion.button whileHover={{scale:1.05}} className="px-6 py-3 rounded-full text-white font-semibold shadow-lg" style={{backgroundColor:'var(--brown)'}}>
            <Link to="/menu">See Menu</Link>
          </motion.button>
          <motion.button whileHover={{scale:1.05}} className="px-6 py-3 rounded-full font-semibold" style={{border:'1px solid var(--brown)', color:'var(--brown)'}}>Reserve</motion.button>
        </div>

        <div className="mt-6 flex gap-4 items-center text-sm text-[var(--muted)]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden shadow-sm">
              <img alt="espresso" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover"/>
            </div>
            <div>
              <div className="font-medium text-[var(--brown)]">Espresso</div>
              <div className="text-xs">Bold, clean, crafted daily</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden shadow-sm">
              <img alt="waffle" src="https://images.unsplash.com/photo-1541417909683-6f7d02a191d6?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover"/>
            </div>
            <div>
              <div className="font-medium text-[var(--brown)]">Signature Waffle</div>
              <div className="text-xs">Crisp edges, soft center</div>
            </div>
          </div>
        </div>
      </div>

      <motion.div initial={{opacity:0,scale:0.97}} whileInView={{opacity:1,scale:1}} transition={{duration:0.8}} className="relative">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img alt="hero cafe" src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1400&auto=format&fit=crop" className="w-full h-[420px] object-cover"/>
        </div>

        <div className="absolute -bottom-6 left-6 bg-white/90 p-4 rounded-xl shadow-lg w-72">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-[var(--muted)]">Barista Pick</div>
              <div className="font-semibold text-[var(--brown)]">Honey Butter Waffle</div>
            </div>
            <div className="text-[var(--mustard)] font-bold">$6.50</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
