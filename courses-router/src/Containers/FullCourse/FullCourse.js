import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../../Contexts/courses";

const FullCourse = (props) => {
  const all_courses = useContext(courses);

  const [COURSE, setCourse] = useState([{}]);

  useEffect(() => {
    const [newCourse] = all_courses.filter(
      (course) => `${course.id}` === props.match.params.id
    );
    setCourse(newCourse);
  }, [props.match.params.id, all_courses]);

  return (
    <div className="FullCourse">
      <h3>{COURSE.title}</h3>
      <p className="price">
        <strong>${COURSE.price}</strong>
      </p>
      <p className="teacher">{COURSE.teacher}</p>
      <Link
        to={{
          pathname: `/courses/course`,
          search: `?title=${COURSE.title}&price=${COURSE.price}&desc=${COURSE.desription}&teacher=${COURSE.teacher}`,
        }}
      >
        See More...
      </Link>
    </div>
  );
};

export default FullCourse;
