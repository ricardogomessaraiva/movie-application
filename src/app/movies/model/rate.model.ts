// export interface Rate {
//     id: string,
//     chosen: boolean,
//     description: string,
//     iconPath: string,
//     comment: string
// }

export class Rate {
    constructor(public id: string,
        public chosen: boolean,
        public description: string,
        public iconPath: string,
        public comment: string) { }
}