import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Sidebar from "@/app/components/Sidebar";
import ProductCard from "@/app/components/ProductGrid";

export default async function Home({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const category = searchParams?.category;
  const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : "https://fakestoreapi.com/products";

  const res = await fetch(url, { cache: "no-store" });
  const products = await res.json();

  return (
    <div className="font-roboto">
      <Header />
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black text-center mb-6">
          Discover Our Products
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          accumsan.
        </p>

        <div className="flex flex-col lg:flex-row -mx-6">
          <Sidebar />
          <section className="w-full lg:w-3/4 px-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-xl font-bold">Recommended</h2>
              <div className="flex flex-wrap gap-3">
                <a className="text-gray-700 hover:text-black" href="#">
                  Newest First
                </a>
                <a className="text-gray-700 hover:text-black" href="#">
                  Popular
                </a>
                <a className="text-gray-700 hover:text-black" href="#">
                  Price: High to Low
                </a>
                <a className="text-gray-700 hover:text-black" href="#">
                  Price: Low to High
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border border-gray-200">
              {products.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
