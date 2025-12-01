  // =======================================
        // JavaScript voor Interactiviteit
        // =======================================
        let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const indicator = document.getElementById('slide-indicator');

        function updateSlide(newIndex) {
            // Zorg ervoor dat de index binnen de grenzen blijft
            if (newIndex < 0 || newIndex >= totalSlides) {
                return;
            }

            // Verberg de huidige slide
            slides[currentSlideIndex].classList.remove('active');
            
            // Toon de nieuwe slide
            currentSlideIndex = newIndex;
            slides[currentSlideIndex].classList.add('active');

            // Knoppen updaten
            prevBtn.disabled = currentSlideIndex === 0;
            nextBtn.disabled = currentSlideIndex === totalSlides - 1;

            // Indicator updaten
            indicator.textContent = `Slide ${currentSlideIndex + 1} van ${totalSlides}`;
        }

        // Event listeners voor de knoppen
        prevBtn.addEventListener('click', () => {
            updateSlide(currentSlideIndex - 1);
        });

        nextBtn.addEventListener('click', () => {
            updateSlide(currentSlideIndex + 1);
        });

        // Eerste keer de slides initialiseren (Slide 0 is al 'active')
        updateSlide(0);