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
        name: "DIY- Denim jacket from scratch",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop...",
        videoUrl: "https://www.youtube.com/embed/lDg3W7gPG3Y?si=LFw26fMFkt1HgZJz"
    },
    {
        id: 2,
        name: "Sew Oversized T-shirt",
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket...",
        videoUrl: "https://youtube.com/embed/SbRk2cvdrXo?si=gAqnCNEc6PGirYyV"
    },
    {
        id: 3,
        name: "How to sew Jorts",
        description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for man...",
        videoUrl: "https://youtube.com/embed/5u79WrwBxMw?si=Jp1xu6gi40JdH6Wm"
    },
    {
        id: 4,
        name: "Sew along a beautiful crop top",
        description: "The color could be slightly different between on the screen and in practice...",
        videoUrl: "https://youtube.com/embed/2E90AZS74rw?si=6LYtY5pn696zD8X0"
    }
];

export default function GridThree() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">STYLISH TEEN FIT</h2>
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
