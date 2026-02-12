"use client"

import { motion } from "framer-motion"

export function StatsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-16 leading-tight text-balance"
        >
          <span className="text-accent">Protecting your privacy</span>, keeping you safe, and{" "}
          <span className="text-accent">transforming your drive</span>. Join our community today.
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
          >
            <div className="mb-4">
              <span className="font-serif text-7xl md:text-8xl font-bold">100</span>
              <span className="text-accent text-5xl md:text-6xl font-serif font-bold">%</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Privacy Protected</h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Your phone number stays private. No more public displays, no stalking risks, no data scraping concerns.
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
          >
            <div className="mb-4">
              <span className="font-serif text-7xl md:text-8xl font-bold">24</span>
              <span className="text-accent text-5xl md:text-6xl font-serif font-bold">/7</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Road Awareness</h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Live community-powered alerts for hazards, potholes, waterlogging, and police checks—always on.
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
          >
            <div className="mb-4">
              <span className="font-serif text-7xl md:text-8xl font-bold">1</span>
              <span className="text-accent text-5xl md:text-6xl font-serif font-bold">💪</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4">All-in-One Platform</h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Dashboard for service tracking, compliance reminders, and document management—everything in one place.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
