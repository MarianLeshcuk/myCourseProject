export class Item {
    _id: string;
    title: string;
    description: string;
    price: number;
    imageSrc: string;

    constructor(title, description, price, imageSrc) {
         this.title = title;
         this.description = description;
         this.price = price;
         this.imageSrc = imageSrc;
    }

}