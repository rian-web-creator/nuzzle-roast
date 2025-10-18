import React from 'react'

export default function Footer(){
  return (
    <footer id="visit" className="text-white py-12" style={{backgroundColor:'var(--brown)'}}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h5 className="font-bold text-lg">Nuzzle Roast</h5>
          <p className="mt-2 text-sm text-white/90">123 Artisan Lane • Open daily 8am–8pm</p>
          <p className="mt-3 text-sm">📞 (021) 555-0123</p>
        </div>
        <div>
          <h6 className="font-semibold">Visit Us</h6>
          <p className="mt-2 text-sm text-white/90">Find cozy corners, friendly baristas, and seasonal pastries. Reserve a table for a small group.</p>
        </div>
        <div>
          <h6 className="font-semibold">Subscribe</h6>
          <p className="text-sm text-white/90 mt-2">Get monthly drops and seasonal offers.</p>
          <div className="mt-3 flex gap-2">
            <input aria-label="email" placeholder="you@email.com" className="px-3 py-2 rounded-l-md text-[var(--brown)]" />
            <button className="px-4 py-2 rounded-r-md font-semibold" style={{backgroundColor:'var(--mustard)'}}>Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-8 text-sm text-white/70">© {new Date().getFullYear()} Nuzzle Roast — Roasted with care.</div>
    </footer>
  )
}
