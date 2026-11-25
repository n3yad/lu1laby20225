import { Link } from 'react-router-dom'
import { useCart } from '../store/CartContext'

export default function CartPage() {
  const { items, total, updateQuantity, removeItem } = useCart()
  return (
    <section className="cart-page">
      <header className="page-heading"><p className="eyebrow">Your selection</p><h1>Bag</h1></header>
      {items.length === 0 ? (
        <div className="empty-cart"><p>No pieces have been torn loose.</p><Link className="text-link" to="/catalog">Enter the archive <span>→</span></Link></div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map(item => (
              <article className="cart-item" key={`${item.product.lot}-${item.size}`}>
                <Link className="cart-image" to={`/product/${item.product.slug}`}><img src={item.product.images[0]} alt={item.product.name} /></Link>
                <div className="cart-item-info"><p className="lot">{item.product.lot}</p><Link to={`/product/${item.product.slug}`}><h2>{item.product.name}</h2></Link><p>Size / {item.size}</p><div className="quantity"><button type="button" aria-label={`Decrease ${item.product.name}`} onClick={() => updateQuantity(item.product.lot, item.size, item.quantity - 1)}>−</button><span>{item.quantity}</span><button type="button" aria-label={`Increase ${item.product.name}`} onClick={() => updateQuantity(item.product.lot, item.size, item.quantity + 1)}>+</button></div></div>
                <div className="cart-item-end"><p>¥{(item.product.price * item.quantity).toLocaleString('ja-JP')}</p><button type="button" onClick={() => removeItem(item.product.lot, item.size)}>Remove</button></div>
              </article>
            ))}
          </div>
          <aside className="order-summary"><p className="eyebrow">Summary</p><dl><div><dt>Subtotal</dt><dd>¥{total.toLocaleString('ja-JP')}</dd></div><div><dt>Shipping</dt><dd>Calculated next</dd></div></dl><Link className="add-button" to="/checkout">Proceed <span>→</span></Link><p className="demo-note">Demonstration only — no payment will be taken.</p></aside>
        </div>
      )}
    </section>
  )
}
