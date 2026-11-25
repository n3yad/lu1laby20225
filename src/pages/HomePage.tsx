import { Link } from 'react-router-dom'
import { products } from '../data/products'

export default function HomePage() {
  const hero = products[0]
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span>ARCHIVE</span> 20225 / VISUAL ISSUE 01</p>
          <h1>Dress<br /><em>for the afterimage</em></h1>
          <p className="hero-intro">Garments traced in lace, leather and exposed line. An archive of movement after the stage has gone dark.</p>
          <Link className="text-link" to="/catalog">Enter the archive <span>→</span></Link>
        </div>
        <Link className="hero-image" to={`/product/${hero.slug}`} aria-label={`View ${hero.name}`}>
          <img src={hero.images[0]} alt={hero.name} />
          <span className="lot-mark">{hero.lot}</span>
          <span className="image-caption">{hero.name}<small>{hero.jpName}</small></span>
        </Link>
      </section>
      <section className="featured-section">
        <div className="section-heading">
          <p className="eyebrow">Selected pieces</p>
          <h2>Still awake</h2>
          <Link className="text-link" to="/catalog">View all <span>→</span></Link>
        </div>
        <div className="featured-grid">
          {products.filter(product => product.featured).slice(0, 3).map((product, index) => (
            <Link className={`product-card featured-card card-${index + 1}`} to={`/product/${product.slug}`} key={product.id}>
              <div className="product-image"><img src={product.images[0]} alt={product.name} />{product.isNew && <span className="new-label">New</span>}</div>
              <div className="product-info"><div><p className="lot">{product.lot}</p><h3>{product.name}</h3></div><p className="price">¥{product.price.toLocaleString('ja-JP')}</p></div>
            </Link>
          ))}
        </div>
      </section>
      <section className="manifesto">
        <p className="eyebrow">Statement / 001</p>
        <blockquote>“A garment remembers every place where it was torn open.”</blockquote>
        <Link className="text-link" to="/about">The house <span>→</span></Link>
      </section>
    </>
  )
}
