

 const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const cancelBtn = document.querySelector('.cancel');

  hamburger.addEventListener('click', () => {
    navMenu.classList.add('active');
  });

  cancelBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
    function hide() {
      document.getElementById('navIcon').style.display = 'none';
    }

    function show() {
      document.getElementById('navIcon').style.display = 'flex';
    }

// book now button code here.
 function redirectToWhatsApp() {
            // Phone number with country code
            const phoneNumber = '+919007062180';
            
            // Predefined booking message
            const bookingMessage = encodeURIComponent(
                "Hello, I would like to book a room at your guest house.\n\n" +
                "Please provide me with the following details:\n" +
                "- Check-in Date:\n" +
                "- Check-out Date:\n" +
                "- Number of Guests:\n" +
                "- Room Type Preference:\n\n" +
                "Thank you!"
            );
             // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${bookingMessage}`;
            
            // Open in new tab
            window.open(whatsappUrl, '_blank');
        }
     
            document.addEventListener('DOMContentLoaded', function() {
            // Sample gallery data (in a real app, this could come from an API)
            const galleryData = [
                {
                    src: './img/out.jpg',
                    alt: 'Guest House View',
                    caption: 'Guest House View'
                },
                {
                    src: './img/baranti.webp',
                    alt: 'Beautiful Nature',
                    caption: 'Nature View'
                },
                {
                    src: './img/1.jpg',
                    alt: 'Beutiful Environment',
                    caption: 'Beutiful Mountain'
                },
                {
                     src: './img/ayodhya.webp',
                    alt: 'Greenary',
                    caption: 'Green and peaceul Nature'
                },
                {
                    src: './img/header.jpg',
                    alt: 'sitting table',
                    caption: 'sitting area'
                },
                {
                    src: './img/large.jpg',
                    alt: 'Room',
                    caption: 'Cozy Haven Room'
                },
                {
                    src: './img/mithonDam.webp',
                    alt: 'Portrait photo',
                    caption: 'mithonDam Portrait'
                },
                {
                    src: './img/palash.webp',
                    alt: 'road side view',
                    caption: 'road side view'
                },
                    {
                    src: './img/recep.jpg',
                    alt: 'reception',
                    caption: 'reception & sitting area'
                },
                    {
                    src: './img/room1.jpg',
                    alt: 'Room',
                    caption: 'Warm Welcome Room'
                },
                
                    {
                    src: './img/service.jpg',
                    alt: 'service',
                    caption: 'Reception Counter'
                }
                ,
                    {
                    src: './img/small.jpg',
                    alt: 'room',
                    caption: ''
                },
            ];

            const gallery = document.querySelector('.gallery');
            const lightbox = document.querySelector('.lightbox');
            const lightboxImage = document.querySelector('.lightbox-image');
            const lightboxCaption = document.querySelector('.lightbox-caption');
            const closeBtn = document.querySelector('.lightbox-close');
            const prevBtn = document.querySelector('.lightbox-prev');
            const nextBtn = document.querySelector('.lightbox-next');
            const loading = document.querySelector('.loading');

            let currentImageIndex = 0;

            // Create gallery items
            function createGallery() {
                galleryData.forEach((item, index) => {
                    const galleryItem = document.createElement('div');
                    galleryItem.className = 'gallery-item';
                    
                    const img = document.createElement('img');
                    img.className = 'gallery-image';
                    img.src = item.src;
                    img.alt = item.alt;
                    img.dataset.index = index;
                    
                    const caption = document.createElement('div');
                    caption.className = 'gallery-caption';
                    caption.textContent = item.caption;
                    
                    galleryItem.appendChild(img);
                    galleryItem.appendChild(caption);
                    gallery.appendChild(galleryItem);
                    
                    // Add click event to open lightbox
                    img.addEventListener('click', () => openLightbox(index));
                });
            }

            // Open lightbox with selected image
            function openLightbox(index) {
                currentImageIndex = index;
                updateLightbox();
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }

            // Close lightbox
            function closeLightbox() {
                lightbox.classList.remove('active');
                document.body.style.overflow = ''; // Re-enable scrolling
            }

            // Navigate to previous image
            function prevImage() {
                currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
                updateLightbox();
            }

            // Navigate to next image
            function nextImage() {
                currentImageIndex = (currentImageIndex + 1) % galleryData.length;
                updateLightbox();
            }

            // Update lightbox content
            function updateLightbox() {
                loading.classList.add('active');
                lightboxImage.style.display = 'none';
                
                const img = new Image();
                img.onload = function() {
                    lightboxImage.src = this.src;
                    lightboxImage.alt = galleryData[currentImageIndex].alt;
                    lightboxCaption.textContent = galleryData[currentImageIndex].caption;
                    lightboxImage.style.display = 'block';
                    loading.classList.remove('active');
                };
                img.src = galleryData[currentImageIndex].src;
            }

            // Keyboard navigation
            function handleKeyDown(e) {
                if (!lightbox.classList.contains('active')) return;
                
                switch(e.key) {
                    case 'Escape':
                        closeLightbox();
                        break;
                    case 'ArrowLeft':
                        prevImage();
                        break;
                    case 'ArrowRight':
                        nextImage();
                        break;
                }
            }

            // Event listeners
            closeBtn.addEventListener('click', closeLightbox);
            prevBtn.addEventListener('click', prevImage);
            nextBtn.addEventListener('click', nextImage);
            document.addEventListener('keydown', handleKeyDown);
            
            // Close when clicking outside the image
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });

            // Initialize the gallery
            createGallery();
        });


        // get in toiuch code here 


        document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for reaching out! We will get back to you soon.');
  this.reset(); // Optional: clear the form
});

