"use client"

import Image from 'next/image';
import { useState } from 'react';

interface ProductImages {
    name: string
    imageUrls: string[]
}
const ProductImages = ({ imageUrls, name }: ProductImages) => {

    const [currentImage, setCurrentImage] = useState(imageUrls[0])

    function handleImageClick(imageUrl: string) {
        setCurrentImage(imageUrl)
    }

    return (
        <div className="flex flex-col">
            <div
                className="bg-accent h-[380px] w-full flex items-center justify-center"
            >
                <Image
                    src={currentImage}
                    width={0}
                    height={0}
                    alt={name}
                    className="h-auto max-h-[70%] w-auto max-w-[80%]"
                    sizes='100vw'
                    style={{
                        objectFit: 'contain'
                    }}
                />
            </div>

            <div className='grid grid-cols-4 gap-2 mt-8 px-5'>
                {imageUrls.map((imageUrl) => (
                    <button
                        key={imageUrl}
                        className={`
                        bg-accent rounded-lg flex justify-center items-center h-[80px]
                        ${imageUrl === currentImage && 'border-2 border-solid border-primary'}
                        `}
                        onClick={() => handleImageClick(imageUrl)}

                    >
                        <Image
                            src={imageUrl}
                            alt={name}
                            width={0}
                            height={0}
                            sizes='100vw'
                            className='h-auto max-h-[70%] w-auto max-w-[80%]'
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ProductImages;