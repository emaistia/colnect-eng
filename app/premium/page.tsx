import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowLeft, Star } from "lucide-react"
import LanguageSelector from "../components/language-selector"

export default function PremiumPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="w-[120px] h-[40px] relative">
                <Image src="/images/colnect-logo.png" alt="Colnect Logo" fill className="object-contain" />
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#benefits" className="text-sm font-medium text-purple-900 hover:text-purple-500">
              Benefits
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium text-purple-900 hover:text-purple-500">
              Testimonials
            </Link>
            <Link href="/#faq" className="text-sm font-medium text-purple-900 hover:text-purple-500">
              FAQ
            </Link>
            <Link href="/#bonus" className="text-sm font-medium text-purple-900 hover:text-purple-500">
              Bonus
            </Link>
            <Link href="/premium" className="text-sm font-medium text-purple-900 hover:text-purple-500">
              Premium
            </Link>
            <LanguageSelector />
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSelector className="md:hidden" />
            <Link href="/">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white">Sign Up Free</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <Link href="/" className="flex items-center text-purple-600 hover:text-purple-700 mb-2">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                Enhance Your Collecting Experience
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Upgrade to Premium for advanced features that help serious collectors get the most out of Colnect
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {/* Monthly Plan */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Monthly</h3>
                    <div className="mt-2 flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-purple-900">€11.88</span>
                      <span className="text-gray-600 ml-1">/ month</span>
                    </div>
                  </div>
                  <Button className="w-full mb-6 bg-purple-500 hover:bg-purple-600 text-white">Get Monthly</Button>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Cancel anytime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">All premium features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Monthly billing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Annual Plan */}
              <Card className="border-none shadow-lg relative lg:scale-110 z-10 bg-white">
                <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500 rounded-t-lg"></div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Best Value!
                </div>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Annual</h3>
                    <div className="mt-2 flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-900">€8.33</span>
                      <span className="text-gray-600 ml-1">/ month</span>
                    </div>
                    <p className="text-green-600 font-medium mt-1">30% discount</p>
                    <p className="text-gray-600 text-sm mt-1">€99.88 charged annually</p>
                  </div>
                  <Button className="w-full mb-6 bg-purple-500 hover:bg-purple-600 text-white">Get Annual</Button>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Best price guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">All premium features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Annual billing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Multi-Year Plan */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900">3-Year</h3>
                    <div className="mt-2 flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-purple-900">€7.66</span>
                      <span className="text-gray-600 ml-1">/ month</span>
                    </div>
                    <p className="text-green-600 font-medium mt-1">8% additional discount</p>
                  </div>
                  <Button className="w-full mb-6 bg-purple-500 hover:bg-purple-600 text-white">Get 3-Year</Button>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Maximum savings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">All premium features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">One-time payment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                Premium Membership Benefits
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-lg">
                Enhance your collecting experience with these powerful features
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="flex flex-col items-start p-6 bg-purple-50 rounded-lg">
                <div className="p-3 bg-purple-100 rounded-full mb-4">
                  <Check className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Unlimited Best Matches</h3>
                <p className="text-gray-600">Find your most suitable swap partners on Colnect.</p>
              </div>
              <div className="flex flex-col items-start p-6 bg-purple-50 rounded-lg">
                <div className="p-3 bg-purple-100 rounded-full mb-4">
                  <Check className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Unlimited Auto-Matching</h3>
                <p className="text-gray-600">Match your wish list with a collector's swap list with one click.</p>
              </div>
              <div className="flex flex-col items-start p-6 bg-purple-50 rounded-lg">
                <div className="p-3 bg-purple-100 rounded-full mb-4">
                  <Check className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Extended Custom Personal Lists</h3>
                <p className="text-gray-600">Create custom personal lists to suit your needs.</p>
              </div>
              <div className="flex flex-col items-start p-6 bg-purple-50 rounded-lg">
                <div className="p-3 bg-purple-100 rounded-full mb-4">
                  <Check className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Mark</h3>
                <p className="text-gray-600">Add/remove multiple items to your lists with one click.</p>
              </div>
              <div className="flex flex-col items-start p-6 bg-purple-50 rounded-lg">
                <div className="p-3 bg-purple-100 rounded-full mb-4">
                  <Check className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Extended Export List</h3>
                <p className="text-gray-600">Export any list for offline use at up to 10,000 items at a time.</p>
              </div>
              <div className="flex flex-col items-start p-6 bg-purple-50 rounded-lg">
                <div className="p-3 bg-purple-100 rounded-full mb-4">
                  <Check className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Private Item Notes</h3>
                <p className="text-gray-600">Add notes to your lists that only you can view.</p>
              </div>
              <div className="flex flex-col items-start p-6 bg-purple-50 rounded-lg">
                <div className="p-3 bg-purple-100 rounded-full mb-4">
                  <Check className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Members Highlighting</h3>
                <p className="text-gray-600">Highlight your profile on collectors lists and your personal page.</p>
              </div>
              <div className="flex flex-col items-start p-6 bg-purple-50 rounded-lg">
                <div className="p-3 bg-purple-100 rounded-full mb-4">
                  <Check className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Top Collectors List</h3>
                <p className="text-gray-600">
                  See who offers for trade most of collectibles of a specific country or theme.
                </p>
              </div>
              <div className="flex flex-col items-start p-6 bg-purple-50 rounded-lg">
                <div className="p-3 bg-purple-100 rounded-full mb-4">
                  <Check className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Remove Ads</h3>
                <p className="text-gray-600">Browse Colnect completely ad free.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                What Premium Members Say
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-lg">
                Hear from collectors who have enhanced their experience with Premium
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "The unlimited auto-matching feature alone is worth the premium subscription. I've found so many
                    more swap partners and completed my collection much faster than I expected."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-purple-100 p-1 h-12 w-12 flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-lg">M</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Marco</p>
                      <p className="text-sm text-gray-500">Italy</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "Being able to export my entire collection and having private notes for each item has made managing
                    my rare coin collection so much easier. Premium is definitely worth it for serious collectors."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-purple-100 p-1 h-12 w-12 flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-lg">S</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Sarah</p>
                      <p className="text-sm text-gray-500">United States</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "I've been a Premium member for 3 years now. The ad-free experience and premium highlighting have
                    made my collecting journey much more enjoyable. I've connected with top collectors worldwide."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-purple-100 p-1 h-12 w-12 flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-lg">J</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Johan</p>
                      <p className="text-sm text-gray-500">Sweden</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                Frequently Asked Questions About Premium
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-lg">
                Everything you need to know about Colnect Premium membership
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">Do I need Premium to use Colnect?</h3>
                <p className="text-gray-600">
                  No, Colnect is completely free to use! All core features are available to free users, including
                  managing your collection, finding swap partners, and communicating with other collectors. Premium is
                  an optional upgrade for collectors who want enhanced features.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">Can I cancel my Premium subscription?</h3>
                <p className="text-gray-600">
                  Yes, you can cancel your Premium subscription at any time. We respect our community members and make
                  it easy to cancel. Your Premium benefits will continue until the end of your billing period.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">Is there a free trial for Premium?</h3>
                <p className="text-gray-600">
                  We occasionally offer free trial periods for new users. Check our promotions or contact our support
                  team to inquire about current trial offers.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept major credit cards, PayPal, and various other payment methods including Crypto, IBAN, ACH,
                  Zelle, and Wise. For longer subscriptions (3-5 years), we offer additional discounts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 bg-purple-900 text-white">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Enhance Your Experience?</h2>
              <p className="text-purple-100 md:text-lg">
                Upgrade to Premium today and take your collecting to the next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                  Get Premium Now
                </Button>
                <Link href="/">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-purple-800">
                    Try Free Version First
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-50 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="w-[100px] h-[30px] relative">
              <Image src="/images/colnect-logo.png" alt="Colnect Logo" fill className="object-contain" />
            </div>
            <p className="text-sm text-gray-500">We respect your privacy. Unsubscribe anytime.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 hover:text-purple-600">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600">
                Contact Us
              </a>
              <Link href="/" className="text-gray-500 hover:text-purple-600">
                Home
              </Link>
            </div>
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} Colnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
