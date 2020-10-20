export class Service {
    fid?: string;
    id: number;
    carModel: string;
    customer: string;
    status: string;
    timestamp: number;
    changes?: {
        timestamp: number;
        newTimestamp: number;
    }[]
}