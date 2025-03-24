import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6">
      {/* Property Name and Location */}
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img
          src={property.image}
          alt={property.name}
          className="col-span-2 w-full h-96 object-cover rounded-lg"
        />
        {/* Add more images here if available */}
      </div>

      {/* Description */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>
          This is a beautiful {property.name} located in {property.address.city},{" "}
          {property.address.country}. Enjoy the luxury amenities and stunning
          views.
        </p>
      </div>

      {/* Amenities */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="flex flex-wrap space-x-4">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
      </div>

      {/* Booking Section */}
      <div className="mt-8">
        <BookingSection price={property.price} />
      </div>

      {/* Review Section */}
      <div className="mt-8">
        <ReviewSection
          reviews={[
            {
              name: "John Doe",
              rating: 4.5,
              comment: "Great place! Highly recommended.",
              avatar: "https://example.com/avatar1.jpg",
            },
            {
              name: "Jane Smith",
              rating: 5,
              comment: "Amazing experience! Will visit again.",
              avatar: "https://example.com/avatar2.jpg",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default PropertyDetail;