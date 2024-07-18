document.addEventListener('DOMContentLoaded', () => {
    const galleryData = [
        {
            src: 'images/hd/1.jpg',
            title: 'Image 1',
            caption: 'This is the caption for image 1',
            description: 'Description of image 1'
        },
        {
            src: 'images/hd/2.jpg',
            title: 'Image 2',
            caption: 'This is the caption for image 2',
            description: 'Description of image 2'
        },
        {
            src: 'images/hd/3.jpg',
            title: 'Image 3',
            caption: 'This is the caption for image 3',
            description: 'Description of image 3'
        },
        {
            src: 'images/hd/4.jpg',
            title: 'Image 4',
            caption: 'This is the caption for image 4',
            description: 'Description of image 4'
        },
        {
            src: 'images/hd/5.jpg',
            title: 'Image 5',
            caption: 'This is the caption for image 5',
            description: 'Description of image 5'
        },
        {
            src: 'images/hd/6.jpg',
            title: 'Image 6',
            caption: 'This is the caption for image 6',
            description: 'Description of image 6'
        },
        {
            src: 'images/hd/7.jpg',
            title: 'Image 7',
            caption: 'This is the caption for image 7',
            description: 'Description of image 7'
        },
        {
            src: 'images/hd/8.jpg',
            title: 'Image 8',
            caption: 'This is the caption for image 8',
            description: 'Description of image 8'
        },
        {
            src: 'images/hd/9.jpg',
            title: 'Image 9',
            caption: 'This is the caption for image 9',
            description: 'Description of image 9'
        },
        {
            src: 'images/hd/10.jpg',
            title: 'Image 10',
            caption: 'This is the caption for image 10',
            description: 'Description of image 10'
        },
        {
            src: 'images/hd/11.jpg',
            title: 'Image 11',
            caption: 'This is the caption for image 11',
            description: 'Description of image 11'
        },
        {
            src: 'images/hd/12.jpg',
            title: 'Image 12',
            caption: 'This is the caption for image 12',
            description: 'Description of image 12'
        },
        {
            src: 'images/hd/13.jpg',
            title: 'Image 13',
            caption: 'This is the caption for image 13',
            description: 'Description of image 13'
        },
        {
            src: 'images/hd/14.jpg',
            title: 'Image 14',
            caption: 'This is the caption for image 14',
            description: 'Description of image 14'
        },
        {
            src: 'images/hd/15.jpg',
            title: 'Image 15',
            caption: 'This is the caption for image 15',
            description: 'Description of image 15'
        },
        {
            src: 'images/hd/16.jpg',
            title: 'Image 16',
            caption: 'This is the caption for image 16',
            description: 'Description of image 16'
        },
        {
            src: 'images/hd/17.jpg',
            title: 'Image 17',
            caption: 'This is the caption for image 17',
            description: 'Description of image 17'
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
            caption: 'This is the caption for image 19',
            description: 'Description of image 19'
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
