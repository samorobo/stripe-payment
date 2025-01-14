import Link from "next/link";

interface Product {
    id: number;
    name: string;
    description: string;
    videoUrl: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "How to cut corset in 2 ways",
        description: "Your perfect pack for a very fashionable and snatched waist be it for that wedding or any other indegenious social event...",
        videoUrl: "https://www.youtube.com/embed/qYVkJnC0BF4"
    },
    {
        id: 2,
        name: "How to cut and sew a mermaid skirt",
        description: "Slim-fitting style, that center around the waist, highligting the curves and shape...",
        videoUrl: "https://youtube.com/embed/mtpDUxhUtnE?si=AoGcf_O0J6qLmVqi" 
    },
    {
        id: 3,
        name: "How to cut and sew a Milkmade dress",
        description: "Great outerwear for Summer, very comfy , yet fashinable and stylish...",
        videoUrl: "https://youtube.com/embed/G402zKTKQu0?si=7tWMBZxvusBgpEWL"
    },
    {
        id: 4,
        name: "How to create a flaterring Ankara with side-draped fabric",
        description: "Creating the most iconic african side drape for a fashinable, classy look...",
        videoUrl: "https://youtube.com/embed/0DrFocYp86M?si=75GnBYrMD8c3q99x"
    }
];

export default function GridOne() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">TRENDY FEMINININE STYLE</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="border rounded-lg p-4 shadow-md">
                            {/* Video Embed */}
                            <div className="w-full h-64 relative">
                                <iframe
                                    className="w-full h-full rounded-md"
                                    src={product.videoUrl}
                                    title={product.name}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-gray-600 mt-2">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
