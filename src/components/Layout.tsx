import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useCart } from '../store/CartContext'

export default function Layout() {
  const { itemCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setMenuOpen(false), [location.pathname])
  return (
    <div className={location.pathname === '/catalog' ? 'site-shell catalog-shell' : 'site-shell'}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="header">
        <Link className="brand" to="/" aria-label="LULLABY home"><span className="brand-mark">L</span>LULLABY<span className="brand-kanji">夢</span></Link>
        <button className="menu-button" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(value => !value)}>{menuOpen ? 'CLOSE' : 'MENU'}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Primary navigation">
          <NavLink to="/catalog">Collection</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/service">Service</NavLink>
          <NavLink className="bag-link" to="/cart">Bag <span>[{itemCount}]</span></NavLink>
        </nav>
      </header>
      <main id="main"><Outlet /></main>
      <footer className="footer">
        <div><span className="brand footer-brand">LULLABY</span><p>Independent garments for fractured nights.</p></div>
        <div className="footer-meta"><span>Tokyo / 35.6762° N</span><span>© 20225 LULLABY</span></div>
      </footer>
    </div>
  )
}
