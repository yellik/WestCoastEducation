import { BaseType } from './BaseType';
import { Course } from './CourseModel';

export interface ResponseModel {
     
      results: (BaseType | Course)[];
    }
    