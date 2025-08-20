export default function Head() {
  return (
    <>
      <title>Colnect | Online Collectibles Catalog & Global Collector Community</title>
      <meta
        name="description"
        content="Join Colnect: the global platform to manage, catalog, and swap collectibles online. Explore 40+ categories and connect with collectors worldwide."
      />
      <meta
        name="keywords"
        content="online collectibles catalog, coin collecting community, manage stamp collection, collectibles marketplace, collector's app, swap rare items online"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is Colnect free to use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Colnect is free to join and use. You can manage your collection, connect with collectors, and explore the catalog without any cost.",
                },
              },
              {
                "@type": "Question",
                name: "What types of collectibles can I manage on Colnect?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Colnect supports over 40 categories, including stamps, coins, banknotes, phonecards, tea bags, trading cards, and many more.",
                },
              },
              {
                "@type": "Question",
                name: "How does the auto-matching feature work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our smart system automatically connects you with collectors who have what you want and want what you have. This makes swapping items easy and efficient.",
                },
              },
              {
                "@type": "Question",
                name: "Is Colnect available on mobile?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Colnect has a dedicated mobile app available for both iOS and Android, allowing collectors to manage their inventory on the go.",
                },
              },
              {
                "@type": "Question",
                name: "Can I sell items through Colnect?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Colnect offers a marketplace where verified collectors can list and sell their items to a global audience.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
