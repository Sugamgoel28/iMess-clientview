import React from 'react';

const ProfilePhoto = ({ imageUrl, altText, size }) => {
    return (
        <div className={`profile-photo ${size}`}>
            <img src={imageUrl} alt={altText} className="rounded-full" />
        </div>
    );
};

export default ProfilePhoto;