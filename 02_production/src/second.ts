interface TakePhoto{
    cameraMode: string
    filter:string
    burst:number
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){}
}

class Youtube implements TakePhoto {
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){}
}


const obj1= new Instagram("h@h.com","gsr",20);