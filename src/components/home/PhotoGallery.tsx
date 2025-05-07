import React, { useRef, useEffect } from 'react';

const images = [
  {
    id: 1,
    alt: "Gym equipment",
    image: "https://images.unsplash.com/photo-1738870558728-720a366830a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D",
    className: "col-span-1 row-span-1",
  },
  {
    id: 2,
    alt: "Person working out",
    image: "https://images.unsplash.com/photo-1584863528123-65b675cc9009?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGd5bSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D",
    className: "col-span-1 row-span-2",
  },
  {
    id: 3,
    alt: "Yoga class",
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltJTIwZ3V5fGVufDB8fDB8fHww",
    className: "col-span-1 row-span-1",
  },
  {
    id: 4,
    alt: "Group fitness",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3ltJTIwZ3V5fGVufDB8fDB8fHww",
    className: "col-span-1 row-span-1",
  },
  {
    id: 5,
    alt: "Weightlifting",
    image: "https://images.unsplash.com/photo-1545346315-f4c47e3e1b55?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGd5bSUyMGd1eXxlbnwwfHwwfHx8MA%3D%3D",
    className: "col-span-1 row-span-1",
  },
  {
    id: 6,
    alt: "Personal training",
    image: "https://media.istockphoto.com/id/1849342293/photo/happy-athletic-couple-talking-while-walking-out-through-the-gym.jpg?s=612x612&w=0&k=20&c=7IkFYd3qAFCtb2DnbHEHqWt16Lcf-bLWEYLWE4OcLjk=",
    className: "col-span-1 row-span-1",
  }
];

const PhotoGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const photos = entry.target.querySelectorAll('.photo-animate');
            photos.forEach((photo, index) => {
              setTimeout(() => {
                photo.classList.add('animate-scale-in');
                photo.classList.remove('opacity-0');
              }, index * 100);
            });

            const heading = entry.target.querySelector('.heading-animate');
            if (heading) {
              heading.classList.add('animate-slide-up');
              heading.classList.remove('opacity-0');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  return (
    <section className="py-2 bg-gray-50 dark:bg-gray-900" id="gallery" ref={galleryRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-4 opacity-0 heading-animate">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Our <span className="text-gradient">Fitness</span> Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a virtual tour of our state-of-the-art facilities and community in action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`${image.className} relative overflow-hidden rounded-xl opacity-0 photo-animate`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square w-full h-full overflow-hidden rounded-xl border border-border/40">
                <img
                  src={image.image}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 text-center">
          <p className="text-muted-foreground italic">
            Photos showcase our premium equipment, expert trainers, and vibrant community atmosphere
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
