import {
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav";
const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        {/* xl:padding-1 */}
        {/* padding-left - 8 --mobile */}
        {/* padding-left - 16 -- laptop */}
        {/* wide:padding-r */}
        {/* padding-right - 16 --tablet */}
        {/* padding-right - 8 --mobile */}
        {/* padding-b */}
        {/* padding-bottom - 24 -- tablet */}
        {/* padding-bottom - 12 -- mobile*/}
        <Hero />
      </section>
      <section className="padding">
        {/* padding */}
        {/* tablet */}
        {/* padding - letf&right - 16 */}
        {/* padding - top&bottom - 24 */}
        {/* mobile */}
        {/* padding - left&right - 8 */}
        {/* padding - top&bottom - 12 */}
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        {/* padding-x */}
        {/* padding - left&rght - 16 -- tablet */}
        {/* padding - left&right -8 --mobile */}
        {/* py-10 */}
        {/* padding - top&bottom -10 --mobile */}

        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        {/* padding-x */}
        {/* padding - left&rght - 16 -- tablet */}
        {/* padding - left&right -8 --mobile */}
        {/* sm:py-32 */}
        {/* padding - top&bottom - 32 -- tablet */}
        {/* py-16 */}
        {/* padding - top&bottom -16 --mobile */}

        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        {/* padding-x */}
        {/* padding - left&rght - 16 -- tablet */}
        {/* padding - left&right - 8 --mobile */}
        {/* padding-t  */}
        {/* padding-top - 24 --tablet */}
        {/* padding-top -12 --mobile */}
        <Footer />
      </section>
    </main>
  );
};

export default App;
