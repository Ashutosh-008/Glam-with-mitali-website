import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { X } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      url: 'https://customer-assets.emergentagent.com/job_cf1db12c-e582-4d22-8a55-97938f81ec5b/artifacts/gr7u4ftc_IMG_20260203_121732.jpg.jpeg',
      alt: 'Bridal Makeup - Royal Luxe',
      category: 'Bridal'
    },
    {
      id: 2,
      url: 'https://customer-assets.emergentagent.com/job_cf1db12c-e582-4d22-8a55-97938f81ec5b/artifacts/pzrfvo47_IMG-20250825-WA0049.jpg.jpeg',
      alt: 'Elegant Makeup Look',
      category: 'Bridal'
    },
    {
      id: 3,
      url: 'https://customer-assets.emergentagent.com/job_cf1db12c-e582-4d22-8a55-97938f81ec5b/artifacts/gij8enen_IMG_20260203_121826.jpg.jpeg',
      alt: 'Bridal Hair & Makeup',
      category: 'Bridal'
    },
    {
      id: 4,
      url: 'https://customer-assets.emergentagent.com/job_cf1db12c-e582-4d22-8a55-97938f81ec5b/artifacts/7ax5smpn_DSC07102.JPG.jpeg',
      alt: 'Classic Bridal Look',
      category: 'Bridal'
    },
    {
      id: 5,
      url: 'https://customer-assets.emergentagent.com/job_cf1db12c-e582-4d22-8a55-97938f81ec5b/artifacts/toi9xqgk_DSC07107.JPG.jpeg',
      alt: 'Traditional Bridal Makeup',
      category: 'Bridal'
    },
    {
      id: 6,
      url: 'https://customer-assets.emergentagent.com/job_luxury-glam-mitali/artifacts/ljs9sjih_IMG_20251212_134711.jpg.jpeg',
      alt: 'Elegant Party Look',
      category: 'Party'
    },
    {
      id: 7,
      url: 'https://customer-assets.emergentagent.com/job_luxury-glam-mitali/artifacts/8kr6ni6t_IMG_20251212_133335.jpg.jpeg',
      alt: 'Vibrant Mehendi Makeup',
      category: 'Mehendi'
    },
    {
      id: 8,
      url: 'https://customer-assets.emergentagent.com/job_luxury-glam-mitali/artifacts/os79z8gs_DSC07108.JPG.jpeg',
      alt: 'Stunning Bridal Portrait',
      category: 'Bridal'
    },
    {
      id: 9,
      url: 'https://customer-assets.emergentagent.com/job_luxury-glam-mitali/artifacts/xds63e86_IMG_20251219_135349_132.webp',
      alt: 'Traditional Maharashtrian Look',
      category: 'Traditional'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-[#FFF0F5] via-[#FFF8F0] to-[#FAF6F1]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1B2845] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Gallery
          </h2>
          <p className="text-lg text-[#1B2845]/70 max-w-2xl mx-auto">
            Browse through our stunning transformations and witness the artistry
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden border-2 border-[#E8B4BC]/30 hover:border-[#D4AF37] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03]">
                  <CardContent className="p-0 relative aspect-square">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B2845]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-semibold text-lg">{image.alt}</p>
                        <p className="text-[#D4AF37] text-sm font-medium">{image.category}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                <div className="relative">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-[#1B2845]/70">
            Follow us on Instagram{' '}
            <a
              href="https://instagram.com/blush_with_mitali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:text-[#B8941F] hover:underline font-semibold transition-colors duration-300"
            >
              @blush_with_mitali
            </a>
            {' '}for more stunning transformations
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;