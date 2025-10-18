import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar(){
  return (
    <motion.header initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="sticky top-0 z-30 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div whileHover={{scale:1.07}} className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor:'var(--brown)'}}>
            <span className="text-white font-bold">NR</span>
          </motion.div>
          <div>
            <div className="text-[var(--brown)] font-semibold">Nuzzle Roast</div>
            <div className="text-xs text-[var(--muted)]">Artisan coffee & waffles</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm text-[var(--brown)]">
          <Link to="/menu" className="hover:opacity-80">Menu</Link>
          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#visit" className="hover:opacity-80">Visit</a>
          <motion.button whileHover={{scale:1.04}} style={{backgroundColor:'var(--mustard)', color:'white'}} className="ml-4 px-4 py-2 rounded-full font-medium">Order</motion.button>
        </nav>

        <div className="md:hidden">
          <button className="px-3 py-2 rounded-md border" style={{borderColor:'var(--brown)'}}>Menu</button>
        </div>
      </div>
    </motion.header>
  )
}
