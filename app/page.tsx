export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold text-blue-500">U-Dev</h1>
        <div className="space-x-6">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="/get-quote" className="bg-blue-600 px-4 py-2 rounded">
            Get Quote
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-20">
        <h2 className="text-5xl font-bold leading-tight">
          Build Smart Solutions <br /> For Your Business
        </h2>

        <p className="mt-6 text-lg text-gray-400">
          Custom development using cost-efficient technologies. 
          No monthly fees. Pay once, scale forever.
        </p>

        <div className="mt-8 space-x-4">
          <a
            href="/get-quote"
            className="bg-blue-600 px-6 py-3 rounded text-white"
          >
            Get Quote Today
          </a>

          <a
            href="#"
            className="border border-gray-600 px-6 py-3 rounded"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        <div className="p-6 bg-gray-900 rounded">
          <h3 className="text-xl font-semibold">Cost Efficient</h3>
          <p className="text-gray-400 mt-2">
            We use free-tier technologies to reduce your cost.
          </p>
        </div>

        <div className="p-6 bg-gray-900 rounded">
          <h3 className="text-xl font-semibold">Fast Delivery</h3>
          <p className="text-gray-400 mt-2">
            Projects completed in 1–3 weeks.
          </p>
        </div>

        <div className="p-6 bg-gray-900 rounded">
          <h3 className="text-xl font-semibold">Full Stack</h3>
          <p className="text-gray-400 mt-2">
            Websites, dashboards, and automation systems.
          </p>
        </div>
      </section>

    </main>
  );
}