const modal = document.querySelector('.modal');
const imgModal = modal.querySelector('img');
const titleModal = modal.querySelector('h2');
const titleDescription = modal.querySelector('p');


class Gallery {
    constructor(gallery){
        this.gallery = gallery;
        this.showModal = this.showModal(this.gallery);
        this.modalControl = this.modalControl(modal);
    }

    showModal(gallery){
        gallery.addEventListener('click', (e) => {
        if(e.target != e.currentTarget) 
        this.currentPic = e.target;
        imgModal.setAttribute('src', this.currentPic.getAttribute('src'));
        titleModal.innerText = this.currentPic.getAttribute('title');
        titleDescription.innerText = this.currentPic.getAttribute('data-description');
        modal.classList.add('flex');
        })
    }
    changePic(pic){
        imgModal.setAttribute('src', pic.getAttribute('src'));
        titleModal.innerText = pic.getAttribute('title');
        titleDescription.innerText = pic.getAttribute('data-description');
    }
    modalControl(modal){
        modal.addEventListener('click', e => {
            if(e.target == e.currentTarget){
                modal.classList.remove('flex');
                modal.classList.add('hidden');
            }
            if(e.target.classList.contains('prev')){
                this.currentPic = (this.currentPic.previousElementSibling || this.gallery.lastElementChild);
                this.changePic(this.currentPic);
            }
            if(e.target.classList.contains('next')){
                this.currentPic = (this.currentPic.nextElementSibling || this.gallery.firstElementChild);
                this.changePic(this.currentPic);
            }
            });
    }
}



const galery1 = new Gallery(document.querySelector('.gallery_1'));
const galery2 = new Gallery(document.querySelector('.gallery_2'));

