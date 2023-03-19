import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import axiosInstance from '@/pages/api/instance';

import { Course } from '../type';

export const fetchCourses = createAsyncThunk<Course[]>(
  'coursesInfo/getCourses',

  async () => {
    try {
      const { data } = await axiosInstance.get<{ courses: Course[] }>(
        'core/preview-courses',
      );
      return data.courses;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        throw new Error(err.response?.data.message);
      } else {
        throw err;
      }
    }
  },
);
