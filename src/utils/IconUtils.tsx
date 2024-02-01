import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TiSocialPinterest } from "react-icons/ti"
import { SocialLink } from '../modal/Section';



interface IconMap {
    [key: string]: React.ComponentType<SocialLink>;
}

const iconMap: IconMap = {
    facebook: FaFacebook,
    instagram: FaInstagram,
    linkedin: FaLinkedin,
    pinterest: TiSocialPinterest,
    // Add more icons as needed
};

const Icon: React.FC<SocialLink> = ({ id, name, className, size, color, link }) => {
    const IconComponent = iconMap[name];

    if (!IconComponent) {
        // Handle the case where the specified icon name is not found
        return null;
    }

    return (
        <IconComponent
            id={id}
            name={name}
            className={className}
            size={size}
            color={color}
            onClick={() => link && window.open(link, '_blank')}
        />
    );
};

export default Icon;
