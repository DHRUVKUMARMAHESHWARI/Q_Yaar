import { TestimonialSlider, type Testimonial } from "@/components/ui/testimonial-slider"

const testimonials: Testimonial[] = [
  {
    image: "https://placehold.co/400x400",
    quote:
      "I no longer worry about strangers having my number on their phones. The Smart QR sticker gives me peace of mind every single day.",
    name: "Rohan S.",
    role: "Daily Commuter",
    rating: 5,
  },
  {
    image: "https://placehold.co/400x400",
    quote:
      "The live garage tracker is pure genius. I saved almost 3 hours of pointless waiting this month alone.",
    name: "Anjali M.",
    role: "Car Owner",
    rating: 5,
  },
  {
    image: "https://placehold.co/400x400",
    quote:
      "Hazard alerts and privacy controls in one product. It feels like my car finally has its own digital co‑pilot.",
    name: "Karthik V.",
    role: "Weekend Roadtripper",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-4 bg-secondary/30 overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
            Loved by privacy-first drivers
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
            What Our Users Say
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from people who replaced exposed phone numbers with Smart QR stickers and now drive safer,
            more confidently, and with total control over their privacy.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-background/80 shadow-xl shadow-black/5 backdrop-blur-sm px-2 py-6 md:px-6 md:py-10">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </div>
    </section>
  )
}
