export class Service {
    fid?: string;
    id: number;
    carModel: string;
    customer: string;
    HStatus: {
        status:string;
        timestamp: number;
    }[];
    status:string;
    timestamp: number;
    stimateTimestamp: number;
    coments?:string;
    asesor?:string;
    tec?:string;
    changes?: {
        timestamp: number;
        newTimestamp: number;
    }[]
}