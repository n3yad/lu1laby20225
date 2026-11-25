import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'

export default function CatalogPage() {
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('archive')
  const [view, setView] = useState<'plate' | 'index'>('plate')
  const filtered = useMemo(() => {
    const list = category === 'all' ? [...products] : products.filter(product => product.category === category)
    if (sort === 'price-low') list.sort((a, b) => a.price - b.price)
    if (sort === 'price-high') list.sort((a, b) => b.price - a.price)
    if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name))
    if (sort === 'archive') list.sort((a, b) => a.id - b.id)
    return list
  }, [category, sort])

  return (
    <section className="catalog-page">
      <header className="catalog-header">
        <div>
          <p className="catalog-kicker">LULLABY / 20225</p>
          <h1>Collection</h1>
        </div>
        <p className="catalog-count">{filtered.length.toString().padStart(2, '0')} pieces</p>
      </header>
      <div className="catalog-tools">
        <fieldset className="filters"><legend>Category</legend>{['all', 'outerwear', 'tops', 'bottoms', 'dresses', 'accessories'].map(value => (
          <button type="button" className={category === value ? 'active' : ''} onClick={() => setCategory(value)} key={value}>{value === 'all' ? 'All' : value}</button>
        ))}</fieldset>
        <label className="sort-control">Sort
          <select value={sort} onChange={event => setSort(event.target.value)}>
            <option value="archive">Archive</option><option value="price-low">Price: low</option><option value="price-high">Price: high</option><option value="name">Name</option>
          </select>
        </label>
        <div className="view-switch" aria-label="Catalog view">
          <button type="button" className={view === 'plate' ? 'active' : ''} aria-pressed={view === 'plate'} onClick={() => setView('plate')}>PLATE</button>
          <button type="button" className={view === 'index' ? 'active' : ''} aria-pressed={view === 'index'} onClick={() => setView('index')}>INDEX</button>
        </div>
      </div>
      <div className={view === 'plate' ? 'catalog-grid plate-grid' : 'catalog-grid index-grid'}>
        {filtered.map(product => (
          <Link className={`product-card plate-card plate-card-${(product.id - 1) % 6 + 1}`} to={`/product/${product.slug}`} key={product.id}>
            <div className="product-image"><img src={product.images[0]} alt={product.name} />{product.isNew && <span className="new-label">New</span>}</div>
            <div className="product-info"><div><p className="lot">{product.lot}</p><h3>{product.name}</h3></div><p className="price">¥{product.price.toLocaleString('ja-JP')}</p></div>
          </Link>
        ))}
      </div>
    </section>
  )
}
