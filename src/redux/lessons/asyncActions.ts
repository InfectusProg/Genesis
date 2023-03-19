import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import axiosInstance from '@/pages/api/instance';

import { FetchLessonsParams, Lessons } from './type';

export const fetchLessons = createAsyncThunk<Lessons, FetchLessonsParams>(
  'lessons/getLessons',

  async params => {
    try {
      const { data } = await axiosInstance.get<Lessons>(
        `core/preview-courses/${params.id}`,
      );
      return data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        throw new Error(err.response?.data.message);
      } else {
        throw err;
      }
    }
  },
);
