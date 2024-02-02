import { BaseType } from './BaseType';

export interface Students extends BaseType{
    email: string;
    password: string;
    enrolledToCourse: string;
}