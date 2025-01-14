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
        name: "How to cut and sew Native",
        description: "Learn how to sew the perfect native for that wedding, social gathering...",
        videoUrl: "https://www.youtube.com/embed/REYXApDSFnc?si=WYbrog5P792l2YpZ"  
    },
    {
        id: 2,
        name: "Mens Casual Premium Tee",
        description: "Slim-fitting style, contrast raglan short sleeve, three-button henley placket...",
        videoUrl: "https://youtube.com/embed/Uze1Y4ubK4s?si=R_5wvgxU-RFNJL_3"
    },
    {
        id: 3,
        name: "Sew a Perfect Jean Zipper",
        description: "Great outerwear jean zipper for Spring/Autumn/Winter, suitable for man...",
        videoUrl: "https://youtube.com/embed/JXPmXO73uxs?si=a7AGXQzHN9u6nI9T"
    },
    {
        id: 4,
        name: "How to stitch a senator neck without piping or taping",
        description: "Perfect tips and tricks to practice to proper piping and taping...",
        videoUrl: "https://youtube.com/embed/PaonEb8079A?si=mHjJEguXCyAkF7sg"
    }
];

export default function GridTwo() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">EVERY DAY MEN'S FIT</h2>
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
