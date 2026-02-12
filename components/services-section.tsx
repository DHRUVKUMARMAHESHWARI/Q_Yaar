"use client"

import { motion } from "framer-motion"

export function ServicesSection() {
  const services = [
    {
      title: "Digital Siren",
      image: "/placeholder.svg?height=400&width=300",
      overlayImage: "/placeholder.svg?height=400&width=300",
      description: "Instant, loud parking alerts without revealing your number.",
    },
    {
      title: "Audio Guardian",
      image: "/placeholder.svg?height=400&width=300",
      overlayImage: "/placeholder.svg?height=400&width=300",
      description: "Hands-free voice alerts for upcoming road hazards.",
    },
    {
      title: "Live Service Tracker",
      image: "/placeholder.svg?height=400&width=300",
      overlayImage: "/placeholder.svg?height=400&width=300",
      description: "Real-time 'Zomato-style' status of your car at the garage.",
    },
    {
      title: "Compliance Shield",
      image: "/placeholder.svg?height=400&width=300",
      overlayImage: "/placeholder.svg?height=400&width=300",
      description: "Automated reminders for PUC and Insurance renewals.",
    },
    {
      title: "Blind Calling",
      image: "/placeholder.svg?height=400&width=300",
      overlayImage: "/placeholder.svg?height=400&width=300",
      description: "VOIP-based communication that keeps both parties' numbers hidden.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 w-full bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground mb-4 tracking-tight"
          >
            Our Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-muted-foreground"
          >
            Complete privacy and safety solutions for modern drivers.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-secondary/30 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:bg-secondary/50"
            >
              {/* Feature Title */}
              <h3 className="font-sans text-left text-lg font-medium text-foreground mb-4">{service.title}</h3>
              
              {/* Feature Description */}
              <p className="text-muted-foreground font-sans leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
