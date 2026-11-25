import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <section className="about-page">
      <header className="about-header"><p className="eyebrow">The house / 20225</p><h1>Clothes for<br /><em>the hours without names.</em></h1></header>
      <div className="about-image"><img src="/garments/scarred-tailcoat.svg" alt="LULLABY garment construction study" /></div>
      <div className="about-body"><p className="eyebrow">About LULLABY</p><div><p>LULLABY is an independent Japanese fashion concept exploring the moment between tenderness and collapse. Each piece begins with traditional garment language, then returns altered: seam to surface, closure to ornament, and garment to trace.</p><p>We use asymmetry not as decoration, but as a way to let clothing preserve movement, uncertainty and the evidence of its making.</p><p className="image-credit">Editorial references: Wikimedia Commons archival Japanese fashion / runway photography. Not presented as garments from Number (N)ine, ifsixwasnine or Le Grande Bleu.</p><Link className="text-link" to="/catalog">Enter the archive <span>→</span></Link></div></div>
    </section>
  )
}
