import { BaseType } from './BaseType';

export interface Course extends BaseType{
    startDate: string;
    type: "online" | "in-class";
    duration: number;
    teacherName: string;
    price: number;
    description: string;
    avrRating: number;
}

