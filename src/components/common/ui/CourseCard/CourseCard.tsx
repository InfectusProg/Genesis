import React from 'react';

import styles from './CourseCard.module.scss';
interface CourseCardProps {
  id: string;
  tags: string[];
  title: string;
  description: string;
  image: string;
  lessonsCount: number;
  skills?: string[];
  rating: number;
  video?: string;
  slug: string;
  fullCourseProductId?: string;
  fullCourseProductFamily?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  tags,
  title,
  description,
  image,
  lessonsCount,
  skills,
  rating,
  video,
  slug,
  fullCourseProductId,
  fullCourseProductFamily,
}) => {
  return (
    <div className={styles.courseCard}>
      <img src={`${image}/cover.webp`} className={styles.courseImg}></img>
      {/* <video className={styles.courseVideo} src={video}></video> */}
      {/* {isPlaying && <video src={video} autoPlay loop muted />} */}
      <div className={styles.courseInfo}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.lessons}>
          Amount of Lessons: <strong>{lessonsCount}</strong>{' '}
        </p>
        {skills && (
          <div className={styles.skills}>
            Skills:
            {skills?.map((skill, index) => (
              <p className={styles.skill} key={index}>
                <i>{skill}</i>
              </p>
            ))}
          </div>
        )}
        {fullCourseProductFamily && (
          <div className={styles.skills}>
            Skills:
            {skills?.map((skill, index) => (
              <p className={styles.skill} key={index}>
                {skill}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className={styles.rating}>
        Rating: <strong>{rating}/5</strong>{' '}
      </div>
    </div>
  );
};

export default CourseCard;
