import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Review {
    author_name: string;
    rating: number;
    text: string;
}

interface PlaceDetails {
    reviews: Review[];
}

interface GoogleReviewsProps {
    placeId: string;
    apiKey: string;
}

const GoogleReviews: React.FC<GoogleReviewsProps> = ({ placeId, apiKey }) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGoogleReviews = async () => {
            try {
                const response = await axios.get<PlaceDetails>(
                    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
                );
                setReviews(response.data.reviews);
            } catch (error) {
                setError('Error fetching Google Reviews');
            } finally {
                setLoading(false);
            }
        };

        fetchGoogleReviews();
    }, [placeId, apiKey]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

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
