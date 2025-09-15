import { useEffect, useMemo, useState } from "react";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";
import NewsletterSubscribe from "../../Components/NewsletterSubscribe ";
import { Helmet } from "react-helmet-async";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // filters state
  const [filters, setFilters] = useState({
    categories: [],
    price: [0, 1500],
    rating: 0,
    tags: [],
    q: "",
    sort: "latest",
  });

  useEffect(() => {
    // fetch products from public/products.json
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // adjust price default to data range
        const prices = data.map((p) => p.price);
        const maxPrice = Math.ceil(Math.max(...prices, 1500));
        const minPrice = Math.floor(Math.min(...prices, 0));
        setFilters((prev) => ({ ...prev, price: [minPrice, maxPrice] }));
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    if (!products.length) return [];

    let out = products.slice();

    // categories
    if (filters.categories.length) {
      out = out.filter((p) => filters.categories.includes(p.category));
    }

    // price upper bound
    out = out.filter(
      (p) => p.price >= filters.price[0] && p.price <= filters.price[1]
    );

    // rating
    if (filters.rating) {
      out = out.filter((p) => Math.floor(p.rating) >= filters.rating);
    }

    // tags
    if (filters.tags.length) {
      out = out.filter((p) =>
        (p.tags || []).some((t) => filters.tags.includes(t))
      );
    }

    // search
    if (filters.q) {
      const q = filters.q.toLowerCase();
      out = out.filter((p) => p.name.toLowerCase().includes(q));
    }

    // sort
    if (filters.sort === "price-asc") out.sort((a, b) => a.price - b.price);
    else if (filters.sort === "price-desc")
      out.sort((a, b) => b.price - a.price);
    else out.sort((a, b) => a.id - b.id);

    return out;
  }, [products, filters]);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <>
      <Helmet>
        <title>EcoBazar Shopping | Shopping </title>
      </Helmet>
      <div className="container mx-auto min-h-screen  p-6">
        <div className="  grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          <Sidebar
            products={products}
            filters={filters}
            setFilters={setFilters}
          />

          <main>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold">Vegetables</h1>
                <div className="text-sm text-gray-500">
                  {filtered.length} Results Found
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="search"
                  placeholder="Search products..."
                  value={filters.q}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, q: e.target.value }))
                  }
                  className="border rounded px-3 py-2"
                />

                <select
                  value={filters.sort}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, sort: e.target.value }))
                  }
                  className="border rounded px-3 py-2"
                >
                  <option value="latest">Latest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            <ProductGrid products={filtered} />
          </main>
        </div>
      </div>
      <NewsletterSubscribe></NewsletterSubscribe>
    </>
  );
}
