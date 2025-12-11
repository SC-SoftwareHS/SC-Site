import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px]">
        <Image
          src="/hero-image.png"
          alt="Majestic snow-capped mountain range"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-3 md:mb-4 drop-shadow-2xl tracking-tight">
              Sylvanite Capital
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 drop-shadow-lg font-light">
              Long-term investments in small and lower middle-market businesses
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="flex flex-col items-center justify-center px-4 py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl w-full space-y-16">
          {/* About Section */}
          <div className="space-y-6 text-center">
            <div className="w-16 h-1 bg-gray-300 mx-auto"></div>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
              Sylvanite Capital is a private investment firm that makes long-term investments in small and lower middle-market businesses.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                Get in Touch
              </h2>
              <p className="text-gray-600">
                For investment opportunities or general inquiries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-300">
                <div className="space-y-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Harrison Stoneham
                    </h3>
                    <p className="text-sm text-gray-500">Principal</p>
                  </div>
                  <div className="space-y-2 pt-1">
                    <a
                      href="tel:858-215-1880"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
                      aria-label="Call Harrison Stoneham at 858-215-1880"
                    >
                      <span className="text-sm font-medium group-hover:underline">
                        858-215-1880
                      </span>
                    </a>
                    <a
                      href="mailto:harrison@sylvanitecapital.com"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 group break-all"
                      aria-label="Email Harrison Stoneham"
                    >
                      <span className="text-sm font-medium group-hover:underline">
                        harrison@sylvanitecapital.com
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-300">
                <div className="space-y-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Office
                    </h3>
                    <p className="text-sm text-gray-500">La Jolla, California</p>
                  </div>
                  <div className="pt-1">
                    <a
                      href="https://maps.google.com/?q=5785+La+Jolla+Blvd+La+Jolla+CA+92037"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
                      aria-label="View address on Google Maps"
                    >
                      <p className="text-sm font-medium leading-relaxed group-hover:underline">
                        5785 La Jolla Blvd
                        <br />
                        La Jolla, CA 92037
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm">
            Copyright {new Date().getFullYear()} Sylvanite Capital, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
