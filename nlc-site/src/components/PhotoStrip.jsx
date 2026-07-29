const PHOTOS = [
  { src: 'https://images.squarespace-cdn.com/content/v1/6579ea4bd5d4180c1324644b/1703873214331-QMRDYSH2LBIXB1O5Z8CZ/IMG_3942.jpg?format=1500w',        alt: 'No Limit crew on job site' },
  { src: 'https://images.squarespace-cdn.com/content/v1/6579ea4bd5d4180c1324644b/a312a26c-6e7f-4bce-aaec-2b348faba547/tempImagecMCEC9.png?format=1500w', alt: 'No Limit team reviewing plans' },
  { src: 'https://images.squarespace-cdn.com/content/v1/6579ea4bd5d4180c1324644b/e17df4ef-1da6-4565-8ae8-eef289842e18/tempImageMrECq8.png?format=1000w',  alt: 'No Limit pool installation' },
]

export default function PhotoStrip() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr', height: '540px', gap: '4px', overflow: 'hidden' }}>
      {PHOTOS.map((p, i) => (
        <div key={i} className="gallery-img-wrap" style={{ height: '100%' }}>
          <img src={p.src} alt={p.alt} />
        </div>
      ))}
    </div>
  )
}
