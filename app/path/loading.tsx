import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Navigation Skeleton */}
      <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="w-32 h-8 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
          <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section Skeleton */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="w-64 h-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-full h-16 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-full h-24 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-32 h-12 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-40 h-12 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md h-80 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators Skeleton */}
        <section className="w-full py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {[...Array(5)].map((_, i) => (
                <div key={i}>
                  <div className="w-16 h-8 bg-gray-200 rounded animate-pulse mx-auto mb-2"></div>
                  <div className="w-20 h-4 bg-gray-200 rounded animate-pulse mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section Skeleton */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="w-80 h-8 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
              <div className="w-96 h-4 bg-gray-200 rounded animate-pulse mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse mx-auto mb-4"></div>
                  <div className="w-32 h-6 bg-gray-200 rounded animate-pulse mx-auto mb-3"></div>
                  <div className="w-full h-16 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Journey Section Skeleton */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="w-72 h-8 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
              <div className="w-full max-w-4xl h-6 bg-gray-200 rounded animate-pulse mx-auto"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse mb-4"></div>
                  <div className="w-32 h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
                  <div className="w-full h-20 bg-gray-200 rounded animate-pulse mb-6"></div>
                  <div className="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section Skeleton */}
        <section className="w-full py-16 md:py-24 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="w-80 h-8 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
              <div className="w-96 h-4 bg-gray-200 rounded animate-pulse mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
                    ))}
                  </div>
                  <div className="w-full h-24 bg-gray-200 rounded animate-pulse mb-6"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                    <div>
                      <div className="w-24 h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                      <div className="w-32 h-3 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section Skeleton */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="w-80 h-8 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
              <div className="w-96 h-4 bg-gray-200 rounded animate-pulse mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border border-gray-200 rounded-lg px-6 bg-gray-50">
                  <div className="w-full h-12 bg-gray-200 rounded animate-pulse my-4"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section Skeleton */}
        <section className="w-full py-16 md:py-24 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="w-96 h-8 bg-blue-400 rounded animate-pulse mx-auto mb-4"></div>
              <div className="w-full max-w-2xl h-4 bg-blue-400 rounded animate-pulse mx-auto"></div>
            </div>
            <div className="w-64 h-12 bg-white rounded animate-pulse mx-auto"></div>
          </div>
        </section>

        {/* Loading Indicator */}
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-green-200 rounded-full animate-pulse"></div>
            <Loader2 className="h-8 w-8 animate-spin absolute top-4 left-4 text-green-600" />
          </div>
          <p className="text-muted-foreground mt-4 text-lg">Loading Your Collecting Path...</p>
          <p className="text-sm text-muted-foreground mt-2">Preparing your personalized journey</p>
        </div>
      </main>
    </div>
  )
}
