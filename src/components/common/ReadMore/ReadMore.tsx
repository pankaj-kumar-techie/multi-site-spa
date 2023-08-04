import React, { useState } from 'react';

interface ReadMoreButtonProps {
    text: string;
    maxLength: number;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ text, maxLength }) => {
    const [isTruncated, setIsTruncated] = useState(true);

    const toggleTruncate = () => {
        setIsTruncated(!isTruncated);
    };

    return (
        <div>
            <p>
                {isTruncated ? text.slice(0, maxLength) : text}
                {text.length > maxLength && (
                    <span>
            {isTruncated ? '...' : ''}
                        <button
                            className="text-blue-500 ml-1"
                            onClick={toggleTruncate}
                        >
              {isTruncated ? 'Read more' : 'Show less'}
            </button>
          </span>
                )}
            </p>
        </div>
    );
};

export default ReadMoreButton;
