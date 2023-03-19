import { useRouter } from 'next/router';

import styles from './CoursePage.module.scss';

const CoursePage = () => {
  const router = useRouter();
  const courseId = router.query.courseId;

  return (
    <div>
      <h1>{courseId}</h1>
    </div>
  );
};
export default CoursePage;
