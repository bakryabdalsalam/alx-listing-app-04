import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
        setError(error.response?.data?.message || 'Failed to fetch property details');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <p className="text-lg">Loading...</p>
    </div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen">
      <p className="text-lg text-red-600">{error}</p>
    </div>;
  }

  if (!property) {
    return <p>Property not found</p>;
  }

  return <PropertyDetail property={property} />;
}