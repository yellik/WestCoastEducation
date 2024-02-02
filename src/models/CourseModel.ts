import { BaseType } from './BaseType';

export interface Course extends BaseType{
    starting_date: string;
    type: {
        online: boolean;
        classroom: boolean;
    };
    duration: number;
    teacherName: string;
    cost: number;
    description: string;
    avrRating: number;
}