import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface PhotoGridProps {
    customerId: number;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ customerId }) => {
    const [photos, setPhotos] = useState<string[]>([]);

    const fetchPhotos = async () => {
        try {
            // Fetching a larger set of images
            const response = await axios.get('https://picsum.photos/v2/list?limit=50');
            const allPhotos = response.data.map((photo: any) => photo.download_url);

            // Randomly selecting 9 images from the larger set
            const selectedPhotos = [];
            for (let i = 0; i < 9; i++) {
                const randomIndex = Math.floor(Math.random() * allPhotos.length);
                selectedPhotos.push(allPhotos[randomIndex]);
                allPhotos.splice(randomIndex, 1); // Remove selected image to avoid duplicates
            }

            setPhotos(selectedPhotos);
        } catch (error) {
            console.error('Error fetching photos', error);
        }
    };

    useEffect(() => {
        fetchPhotos(); 

        // Clear the existing interval and set up a new one
        const interval = setInterval(fetchPhotos, 10000);

        return () => clearInterval(interval); 
    }, [customerId]); 

    return (
        <div className="grid grid-cols-3 gap-4">
            {photos.map((photo, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                    <img 
                        src={photo} 
                        alt={`Photo ${index}`} 
                        className="object-cover rounded-lg w-full h-full"
                    />
                </div>
            ))}
        </div>
    );
};

export default PhotoGrid;
