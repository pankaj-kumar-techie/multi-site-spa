import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Media {
    id: string;
    media_url: string;
    caption: string;
}

const InstagramFeed: React.FC = () => {
    const [media, setMedia] = useState<Media[]>([]);

    useEffect(() => {
        const fetchInstagramFeed = async () => {
            const accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN'; // Replace with your access token
            const userId = 'YOUR_INSTAGRAM_USER_ID'; // Replace with your Instagram user ID
            const url = `https://graph.instagram.com/v12.0/${userId}/media?fields=id,media_url,caption&access_token=${accessToken}`;

            try {
                const response = await axios.get<{ data: Media[] }>(url);
                setMedia(response.data.data);
            } catch (error) {
                console.error('Error fetching Instagram feed:', error);
            }
        };

        fetchInstagramFeed();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Instagram Feed</h1>
            <div className="grid grid-cols-2 gap-4">
                {media.map((item) => (
                    <div key={item.id} className="bg-white rounded-md p-2">
                        <img src={item.media_url} alt={item.caption} className="w-full h-auto" />
                        <p className="text-gray-600 mt-2">{item.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstagramFeed;
