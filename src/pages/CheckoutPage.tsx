import { useState, type FormEvent } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useCart } from '../store/CartContext'

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const [submitted, setSubmitted] = useState(false)
  if (items.length === 0 && !submitted) return <Navigate to="/cart" replace />
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    clearCart()
    setSubmitted(true)
  }
  if (submitted) return (
    <section className="checkout-success"><p className="eyebrow">Demonstration complete</p><h1>The thread is held.</h1><p>Your fictional order has been recorded in this browser. No payment or shipment was created.</p><Link className="text-link" to="/catalog">Return to archive <span>→</span></Link></section>
  )
  return (
    <section className="checkout-page">
      <div className="checkout-form-wrap"><p className="eyebrow">Demonstration checkout</p><h1>Delivery</h1>
        <form onSubmit={submit}>
          <fieldset><legend>Contact</legend><label>Email address<input type="email" name="email" autoComplete="email" required /></label></fieldset>
          <fieldset><legend>Delivery details</legend><div className="field-row"><label>First name<input name="firstName" autoComplete="given-name" required /></label><label>Last name<input name="lastName" autoComplete="family-name" required /></label></div><label>Address<input name="address" autoComplete="street-address" required /></label><div className="field-row"><label>City<input name="city" autoComplete="address-level2" required /></label><label>Postal code<input name="postalCode" autoComplete="postal-code" required /></label></div></fieldset>
          <button className="add-button" type="submit">Place demonstration order <span>→</span></button>
        </form>
      </div>
      <aside className="checkout-summary"><p className="eyebrow">Selection</p>{items.map(item => <div className="checkout-line" key={`${item.product.lot}-${item.size}`}><span>{item.quantity} × {item.product.name}<small>{item.size}</small></span><span>¥{(item.product.price * item.quantity).toLocaleString('ja-JP')}</span></div>)}<div className="checkout-total"><span>Total</span><strong>¥{total.toLocaleString('ja-JP')}</strong></div></aside>
    </section>
  )
}
