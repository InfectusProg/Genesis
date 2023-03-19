import { Course, Status } from '../type';

export interface CoursesSliceState {
  status: Status;
  courses: Course[];
  Error?: string;
}
