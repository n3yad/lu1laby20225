import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Product } from '../data/products'

export type CartItem = { product: Product; size: string; quantity: number }
type CartContextValue = {
  items: CartItem[]; itemCount: number; total: number
  addItem: (product: Product, size: string) => void
  removeItem: (lot: string, size: string) => void
  updateQuantity: (lot: string, size: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem('lullaby-cart') ?? '[]') as CartItem[] }
    catch { return [] }
  })
  useEffect(() => localStorage.setItem('lullaby-cart', JSON.stringify(items)), [items])
  const addItem = (product: Product, size: string) => setItems(current => {
    const existing = current.find(item => item.product.lot === product.lot && item.size === size)
    return existing
      ? current.map(item => item === existing ? { ...item, quantity: item.quantity + 1 } : item)
      : [...current, { product, size, quantity: 1 }]
  })
  const removeItem = (lot: string, size: string) =>
    setItems(current => current.filter(item => !(item.product.lot === lot && item.size === size)))
  const updateQuantity = (lot: string, size: string, quantity: number) =>
    setItems(current => quantity < 1
      ? current.filter(item => !(item.product.lot === lot && item.size === size))
      : current.map(item => item.product.lot === lot && item.size === size ? { ...item, quantity } : item))
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  return <CartContext.Provider value={{ items, itemCount, total, addItem, removeItem, updateQuantity, clearCart: () => setItems([]) }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
