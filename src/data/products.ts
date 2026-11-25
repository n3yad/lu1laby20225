export type Product = {
  id: number
  lot: string
  slug: string
  name: string
  jpName: string
  category: 'outerwear' | 'tops' | 'bottoms' | 'dresses' | 'accessories'
  price: number
  description: string
  sizes: string[]
  color: string
  images: string[]
  featured?: boolean
  isNew?: boolean
}

const garment = (name: string) => `/garments/${name}.svg`

export const products: Product[] = [
  { id: 1, lot: '20225-014', slug: 'scarred-tailcoat', name: 'Scarred Tailcoat', jpName: '傷痕の燕尾服', category: 'outerwear', price: 42800, description: 'Asymmetric wool tailcoat reconstructed with exposed seams, raw edges and removable contrast corsage.', sizes: ['S', 'M', 'L'], color: 'Charcoal', featured: true, isNew: true, images: [garment('scarred-tailcoat'), garment('scarred-tailcoat-detail')] },
  { id: 2, lot: '20225-015', slug: 'unravelled-camisole', name: 'Unravelled Camisole', jpName: '解れたキャミソール', category: 'tops', price: 16800, description: 'Bias-cut viscose camisole with laddered lace panels and hand-drawn grey seam lines.', sizes: ['XS', 'S', 'M', 'L'], color: 'Washi', images: [garment('unravelled-camisole'), garment('unravelled-camisole-detail')] },
  { id: 3, lot: '20225-016', slug: 'grief-trousers', name: 'Grief Trousers', jpName: '喪のズボン', category: 'bottoms', price: 24600, description: 'Wide tailored trousers with uneven pleats, internal split lining and a dropped contrast hem.', sizes: ['S', 'M', 'L'], color: 'Graphite', featured: true, images: [garment('grief-trousers'), garment('grief-trousers-detail')] },
  { id: 4, lot: '20225-017', slug: 'moonlace-dress', name: 'Moonlace Dress', jpName: '月のレースドレス', category: 'dresses', price: 36200, description: 'A deconstructed evening dress composed of gathered mesh, torn organza and a single bone-white panel.', sizes: ['XS', 'S', 'M'], color: 'Graphite', isNew: true, images: [garment('moonlace-dress'), garment('moonlace-dress-detail')] },
  { id: 5, lot: '20225-018', slug: 'seam-blouse', name: 'Seam Blouse', jpName: '継ぎ目ブラウス', category: 'tops', price: 19800, description: 'Sheer cotton-silk shirt with architectural volume, detachable collar and hand-finished graphite topstitching.', sizes: ['S', 'M', 'L'], color: 'Washi', featured: true, images: [garment('seam-blouse'), garment('seam-blouse-detail')] },
  { id: 6, lot: '20225-019', slug: 'thread-ring-collar', name: 'Thread Ring Collar', jpName: '糸環の襟', category: 'accessories', price: 9400, description: 'Sculptural organza collar finished with tensioned graphite thread and adjustable back closure.', sizes: ['ONE'], color: 'Dust', images: [garment('thread-ring-collar'), garment('thread-ring-collar-detail')] },
]
