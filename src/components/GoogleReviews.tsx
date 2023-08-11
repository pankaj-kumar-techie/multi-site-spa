import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Review {
  author_name: string;
  rating: number;
  text: string;
}

const GoogleReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      const placeId = 'ChIJo-g_02CJDzkRnH3v1VxQ3QA'; // Replace with your actual Google Place ID
      const apiKey = 'YOUR_GOOGLE_API_KEY'; // Replace with your actual Google API Key
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

      try {
        const response = await axios.get(url);
        setReviews(response.data.result.reviews);
      } catch (error) {
        console.error('Error fetching Google Reviews:', error);
      }
    };

    fetchGoogleReviews();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Google Reviews</h1>
      <ul>
        {reviews.map((review, index) => (
          <li key={index} className="mb-4">
            <p className="text-lg font-semibold">{review.author_name}</p>
            <p className="text-yellow-500 mb-1">Rating: {review.rating}</p>
            <p className="text-gray-600">{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleReviews;
