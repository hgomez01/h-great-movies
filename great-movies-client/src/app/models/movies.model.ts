export class Movies {
    constructor(
        public title: string,
        public description: string,
        public coverUrl: string,
        public stock: number,
        public rentalPrice: number,
        public salePrice : number,
        public availability : string,
        public status : string
    ) { }
}
