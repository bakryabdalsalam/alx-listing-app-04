import axios from "axios";
import { useState, useEffect } from "react";

const ReviewSection = ({ propertyId }: { propertyId: string }) => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchReviews();
    }
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!reviews.length) return <p>No reviews available.</p>;

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <p>{review.comment}</p>
          <p>Rating: {review.rating}</p>
          {/* Display more review info if available */}
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
