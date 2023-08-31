import React, { useContext } from 'react';
import { ThemeContext } from '../../themes/ThemeProvider';

const DetailsPage = () => {
    const { theme } = useContext(ThemeContext);
    const article = {
        title: 'The Art of Blogging',
        content: 'Blogging is a creative outlet...',
        imageUrl: 'https://images.unsplash.com/photo-1587547131116-a0655a526190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        author: {
            name: 'Jane Doe',
            imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
            bio: 'Passionate blogger and storyteller',
        },
        date: 'July 12, 2023',
    };

    const comments = [
        {
            id: 1,
            author: 'User1',
            text: 'Great post! Thanks for sharing.',
        },
        {
            id: 2,
            author: 'User2',
            text: 'I found this very informative.',
        },
        // Add more comments as needed
    ];

    return (
        <div className={`${theme.background.primary} container mx-auto px-4 py-8` }>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                    <h1 className="text-2xl font-bold mb-4">Page Title</h1>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Page content goes here.
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img
                                className="w-12 h-12 rounded-full mr-4"
                                src={article.author.imageUrl}
                                alt="Author"
                            />
                            <div>
                                <p className="text-gray-900 font-semibold">{article.author.name}</p>
                                <p className="text-gray-600">{article.author.bio}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 px-6 py-4">
                        <h2 className="text-lg font-semibold mb-4">Comments</h2>
                        {comments.map(comment => (
                            <div key={comment.id} className="mb-4">
                                <div className="flex items-center">
                                    <img
                                        className="w-8 h-8 rounded-full mr-2"
                                        src={`https://i.pravatar.cc/40?u=${comment.author}`}
                                        alt="Comment Author"
                                    />
                                    <p className="text-gray-900 font-medium">{comment.author}</p>
                                </div>
                                <p className="text-gray-700">{comment.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
