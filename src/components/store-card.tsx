import { Button } from "@/components/ui/button";

interface StoreCardProps {
  name: string;
  address?: string;
  city?: string;
  phone?: string;
  hours?: string;
  mapQuery?: string;
  comingSoon?: boolean;
}

export function StoreCard({
  name,
  address,
  city,
  phone,
  hours,
  mapQuery,
  comingSoon = false,
}: StoreCardProps) {
  return (
    <div className="border border-sage-mist rounded-md overflow-hidden bg-warm-white">
      {/* Map or coming soon placeholder */}
      <div className="aspect-[16/10] bg-light-sage">
        {comingSoon ? (
          <div className="w-full h-full flex items-center justify-center">
            <p className="font-playfair text-xl text-olive-gray italic">
              Coming Soon
            </p>
          </div>
        ) : mapQuery ? (
          <iframe
            src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${name}`}
          />
        ) : null}
      </div>

      {/* Store info */}
      <div className="p-6 space-y-3">
        <h3 className="font-playfair text-2xl text-forest lowercase">
          {name}
        </h3>
        {address && (
          <p className="font-inter text-sm text-olive-gray">{address}</p>
        )}
        {city && (
          <p className="font-inter text-sm text-olive-gray">{city}</p>
        )}
        {phone && (
          <p className="font-inter text-sm text-olive-gray">{phone}</p>
        )}
        {hours && (
          <p className="font-inter text-sm text-olive-gray">{hours}</p>
        )}
        {!comingSoon && mapQuery && (
          <div className="pt-2">
            <Button
              variant="cta"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
            >
              Get Directions
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
