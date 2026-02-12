import { TestimonialSlider, type Testimonial } from "@/components/ui/testimonial-slider"

const testimonials: Testimonial[] = [
  {
    image: "https://placehold.co/400x400",
    quote:
      "I don't have to worry about my privacy anymore. The parking siren is a lifesaver!",
    name: "Rohan S.",
    role: "Driver",
    rating: 5,
  },
  {
    image: "https://placehold.co/400x400",
    quote:
      "The live garage tracker is pure genius. I saved 3 hours of waiting today.",
    name: "Anjali M.",
    role: "Car Owner",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-4 bg-background overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">What Our Users Say</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from drivers who have trusted us with their privacy and safety.
          </p>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  )
}
