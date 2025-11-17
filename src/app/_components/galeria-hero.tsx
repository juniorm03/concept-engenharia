// Componente feito pela IA DeepSeek, com  prompt: preciso fazer uma galeria em tailwindcss e typescritpt, a galeria deve ser da seguinte forma:
// duas colunas, imagens na vertical com tamanhos diferentes
// Estudar cada linha posteriormente

'use client'

import { useState } from 'react'

interface GalleryItem {
    id: number
    src: string
    alt: string
    height: 'short' | 'medium' | 'tall'
}

const GalleryItems: GalleryItem[] = [
    {id: 1, src: "/images/casa1.jpg", alt: "Casa 1", height: "short"},
    {id: 2, src: "/images/casa2.jpg", alt: "Casa 2", height: "tall"},
    {id: 3, src: "/images/casa3.jpg", alt: "Casa 3", height: "short"},
    {id: 4, src: "/images/casa4.jpg", alt: "Casa 4", height: "medium"},
    {id: 5, src: "/images/casa5.jpg", alt: "Casa 5", height: "short"},
    {id: 6, src: "/images/casa6.jpg", alt: "Casa 6", height: "medium"},
]

const heightClasses = {
    short: "h-48",
    medium: "h-64",
    tall: "h-80",
}

export default function Galeria() {
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

    return (
        <div className="columns-1 md:columns-2 gap-4">
            {GalleryItems.map((item) => (
                <div 
                    key={item.id}
                    className="relative overflow-hidden rounded-lg mb-2">
                    <img
                        src={item.src}
                        alt={item.alt}
                        className={`
                            w-full object-cover ${heightClasses[item.height]}
                        `}
                    />
                </div>
            ))}
        </div>
    )
}