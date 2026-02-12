"use client"

export function PortfolioShowcase() {
  // Update these paths/alt texts to match your real images.
  const items = [
    {
      src: "/portfolio/image1.png",
      alt: "Smart QR sticker on a parked car",
      bg: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      src: "/portfolio/image2.png",
      alt: "Driver using the privacy-first app dashboard",
      bg: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      src: "/portfolio/image3.png",
      alt: "Live hazard alerts visualized on the road",
      bg: "bg-gradient-to-br from-pink-500 to-pink-600",
    },
    {
      src: "/portfolio/image4.png",
      alt: "Brand red hero shot with QR sticker",
      bg: "bg-gradient-to-br from-[#CE2029] to-[#8F151C]",
    },
    {
      src: "/portfolio/image5.png",
      alt: "Brand red hero shot with QR sticker",
      bg: "bg-gradient-to-br from-[#CE2029] to-[#8F151C]",
    },
  ]

  return (
    <section className="pt-4 pb-20 overflow-hidden">
      <div className="relative">
        {/* Single scrolling track containing two identical sets for a seamless loop */}
        <div className="flex gap-6 animate-scroll-seamless">
          {[...items, ...items].map((item, index) => (
            <div key={`set1-${index}`} className="flex-shrink-0 w-[600px]">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg ${item.bg}`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
