import { STORE_LOCATIONS } from "@/lib/mock-data";
import { StoreCard } from "@/components/store-card";

export default function LocationsPage() {
  return (
    <main className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl text-forest lowercase">
            visit us
          </h1>
        </div>

        {/* Store Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STORE_LOCATIONS.map((store) => (
            <StoreCard
              key={store.name}
              name={store.name}
              address={store.status === "open" ? store.address : undefined}
              city={
                store.status === "open"
                  ? `${store.city}, ${store.state} ${store.zip}`
                  : undefined
              }
              hours={store.status === "open" ? store.hours : undefined}
              mapQuery={
                store.status === "open"
                  ? `${store.address}, ${store.city}, ${store.state} ${store.zip}`
                  : undefined
              }
              comingSoon={store.status === "coming soon"}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
