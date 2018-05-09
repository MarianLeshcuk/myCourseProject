export class Item {
    _id: string;
    title: string;
    description: string;
    imageSrc: string;

    constructor(title, description, imageSrc) {
         this.title = title;
         this.description = description;
         this.imageSrc = imageSrc;
    }

}