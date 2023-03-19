export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type Course = {
  id: string;
  title: string;
  tags: string[];
  launchDate: string;
  status: string;
  description: string;
  duration: number;
  lessonsCount: number;
  containsLockedLessons: true;
  previewImageLink: string;
  rating: number;
  meta: {
    fullCourseProductId?: string;
    fullCourseProductFamily?: string;
    slug: string;
    skills?: string[];
    courseVideoPreview?: {
      link: string;
      duration: number;
      previewImageLink: string;
    };
  };
};
