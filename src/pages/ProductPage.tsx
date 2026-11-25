import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../store/CartContext'

export default function ProductPage() {
  const { slug } = useParams()
  const product = products.find(item => item.slug === slug)
  const [size, setSize] = useState('')
  const [notice, setNotice] = useState('')
  const { addItem } = useCart()
  useEffect(() => { setSize(''); setNotice('') }, [slug])
  if (!product) return <section className="not-found"><h1>Piece not found</h1><Link className="text-link" to="/catalog">Return to archive</Link></section>

  const addToCart = () => {
    if (!size) { setNotice('Choose a size before adding this piece.'); return }
    addItem(product, size)
    setNotice(`Added ${product.name}, size ${size}, to bag.`)
  }

  return (
    <section className="product-page">
      <div className="product-gallery">
        <div className="main-image"><img src={product.images[0]} alt={product.name} /></div>
        <div className="detail-image"><img src={product.images[1] ?? product.images[0]} alt={`${product.name} detail view`} /></div>
      </div>
      <aside className="product-panel">
        <p className="lot">{product.lot} / {product.category}</p>
        <h1>{product.name}<small>{product.jpName}</small></h1>
        <p className="product-price">¥{product.price.toLocaleString('ja-JP')} <span>税込</span></p>
        <p className="product-description">{product.description}</p>
        <fieldset className="size-picker"><legend>Size</legend>{product.sizes.map(option => (
          <button type="button" className={size === option ? 'active' : ''} aria-pressed={size === option} onClick={() => setSize(option)} key={option}>{option}</button>
        ))}</fieldset>
        {notice && <p className="cart-notice" role="status">{notice}</p>}
        <button className="add-button" type="button" onClick={addToCart}>Add to bag <span>→</span></button>
        <details><summary>Material & care</summary><p>Japanese-made cotton, wool or viscose blend. Dry clean only. Store away from direct light.</p></details>
        <details><summary>Shipping & returns</summary><p>Ships in 3–5 business days. This demonstration store does not process real orders or payments.</p></details>
      </aside>
    </section>
  )
}
