document.addEventListener('DOMContentLoaded', () => {
    const galleryData = [
        {
            src: 'images/hd/1.jpg',
            title: 'Image 1',
            caption: 'Amsterdam at Twilight',
            
            description: 'A serene view of Amsterdam's canal at dusk, with vibrant lights reflecting on the water.'
        },
        {
            src: 'images/hd/2.jpg',
            title: 'Image 2',
            caption: 'Sunset by the Sea',
            description: ' Tranquil beach scene with umbrellas and sunbeds silhouetted against a golden sunset.'
        },
        {
            src: 'images/hd/3.jpg',
            title: 'Image 3',
            caption: 'Harbor Harmony',
            
            description: ' A picturesque harbor with boats floating peacefully against a backdrop of a distant city skyline.'
        },
        {
            src: 'images/hd/4.jpg',
            title: 'Image 4',
            caption: 'Sparrow ',
            
            description: ' A sparrow perches delicately on a tree branch, its feathers ruffled by a gentle breeze. The branch, adorned with fresh green leaves, provides a serene vantage point as sunlight filters through, casting a warm glow on the scene.'
        },
        {
            src: 'images/hd/5.jpg',
            title: 'Image 5',
            caption: 'Blue Elegance',
            description: 'A vibrant blue butterfly rests gracefully on a flower, its iridescent wings shimmering in the sunlight, creating a captivating display of natural beauty.'
        },
        {
            src: 'images/hd/6.jpg',
            title: 'Image 6',
            caption: ' Azure Wings',
            description: 'A delicate butterfly perches on a flower, its iridescent wings glowing in the sunlight, showcasing nature's intricate beauty.
'
        },
        {
            src: 'images/hd/7.jpg',
            title: 'Image 7',
            caption: 'Tiny Red Wonder',
            description: 'A bright red ladybug rests on a green leaf, its black spots contrasting sharply with its vibrant shell, capturing the simple charm of nature.'
        },
        {
            src: 'images/hd/8.jpg',
            title: 'Image 8',
            caption: ' Scarlet Bloom',
            description: 'A vibrant red flower stands in full bloom, its petals radiating with rich color and delicate beauty, set against a backdrop of lush green foliage.
'
        },
        {
            src: 'images/hd/9.jpg',
            title: 'Image 9',
            caption: 'Golden Radiance',
            description: 'A sunflower stands tall and proud, its bright yellow petals radiating around a rich brown center, capturing the essence of summer against a clear blue sky.'
        },
        {
            src: 'images/hd/10.jpg',
            title: 'Image 10',
            caption: 'Serenity in Bloom',
            description: ' A young woman in a flowing dress holds a bouquet of delicate white flowers, their soft petals contrasting with the natural grace of her calm demeanor. The scene captures a moment of peaceful elegance, as if the purity of the flowers mirrors the tranquility of her spirit.'
        },
        {
            src: 'images/hd/11.jpg',
            title: 'Image 11',
            caption: 'Sunset Bliss',
            description: ' As the sun sets over the horizon, painting the sky in shades of orange and pink, a girl swings joyfully on a swing set placed right on the beach. The golden light casts a warm glow over the scene, and the gentle waves lap at the shore as she enjoys the carefree moment. The combination of the tranquil sunset and her radiant happiness creates a picturesque scene of serene delight.'
        },
        {
            src: 'images/hd/12.jpg',
            title: 'Image 12',
            caption: 'Celestial Glow',
            description: ' The moon, in its full splendor, illuminates the night sky with a soft, silvery light. Its craters and surface details are subtly visible, casting a gentle glow that contrasts with the deep indigo of the surrounding cosmos.'
        },
        {
            src: 'images/hd/13.jpg',
            title: 'Image 13',
            caption: 'Mountain Serenity',
            description: 'Majestic mountains rise against a brilliant blue sky, their peaks lightly dusted with snow. Below, the sea stretches out in a tranquil expanse, its deep blue waters mirroring the clarity of the sky above. '
        },
        {
            src: 'images/hd/14.jpg',
            title: 'Image 14',
            caption: 'Charming Bloom',
            description: ' A single pink rose, its velvety petals unfurled in delicate layers, is elegantly arranged in a rustic bucket. The soft blush of the rose contrasts beautifully with the simplicity of the bucket, adding a touch of timeless charm. '
        },
        {
            src: 'images/hd/15.jpg',
            title: 'Image 15',
            caption: 'Tulip RadianceTulip',
            description: 'A vibrant field of yellow tulips stretches out under a clear blue sky, their bright petals glowing against the backdrop of the expansive, sunlit heavens. The cheerful yellow of the tulips contrasts beautifully with the serene blue sky, creating a lively and uplifting scene that captures the essence of spring's renewal and the simple joy of nature's beauty.'
        },
        {
            src: 'images/hd/16.jpg',
            title: 'Image 16',
            caption: 'Tranquil Haven',
            description: 'A serene pond nestled amidst lush greenery reflects the calm blue of the sky, with nearby houses peeking through the verdant foliage. The gentle ripples on the water's surface mirror the surrounding landscape, creating a peaceful and idyllic setting.'
        },
        {
            src: 'images/hd/17.jpg',
            title: 'Image 17',
            caption: 'Ice Majesty',
            description: ' A vast glacier stretches across the landscape, its icy blue and white hues glistening under the soft light. The glacier's massive, intricate formations and crevasses create a breathtaking display of nature's frozen artistry. '
        },
        {
            src: 'images/hd/18.jpg',
            title: 'Image 18',
            caption: 'This is the caption for image 18',
            description: 'Description of image 18'
        },
        {
            src: 'images/hd/19.jpg',
            title: 'Image 19',
            caption: 'Sun-Kissed Radiance',
            description: ' A young woman stands bathed in the warm, golden glow of sunlight, her skin softly illuminated and glowing with a sun-kissed hue. The gentle rays highlight her natural beauty, casting a radiant light that enhances her joyful expression. The background, subtly blurred, emphasizes the serene and enchanting quality of the moment, capturing the essence of carefree summer days and the uplifting power of sunshine'
        },
        // Image 20 removed
    ];

    const gallery = document.getElementById('gallery');
    const modal = document.querySelector('.modal');

    galleryData.forEach((imageData, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.classList.add('thumbnail');
        thumbnail.innerHTML = `
            <img data-src="${imageData.src}" alt="${imageData.title}">
            <div class="overlay">${imageData.title}</div>
        `;
        thumbnail.addEventListener('click', () => showModal(index));
        gallery.appendChild(thumbnail);
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
        img.src = img.dataset.src;
        img.onload = () => img.classList.add('loaded');
    });

    const closeModal = () => {
        modal.classList.remove('show');
        modal.querySelector('.caption').innerText = ''; // Clear caption
    };

    modal.querySelector('.close').addEventListener('click', closeModal);
    modal.addEventListener('click', closeModal);

    const showModal = (index) => {
        const imageData = galleryData[index];
        modal.querySelector('img').src = imageData.src;
        modal.querySelector('p').innerText = imageData.description;
        modal.querySelector('.caption').innerText = imageData.caption; // Set caption
        modal.classList.add('show');
    };
});
