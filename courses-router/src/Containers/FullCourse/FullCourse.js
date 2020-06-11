import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../../Contexts/courses";

const FullCourse = (props) => {
  const all_courses = useContext(courses);

  const [COURSE, setCourse] = useState([{}]);

  useEffect(() => {
    // if (props.match.params.id !== `${COURSE.id}`) {
    const newCourse = all_courses.filter(
      (course) => `${course.id}` === props.match.params.id
    );
    setCourse(newCourse);
  }, [props.match.params.id, all_courses]);

  return (
    <div className="FullCourse">
      <h3>{COURSE[0].title}</h3>
      <p className="price">
        <strong>${COURSE[0].price}</strong>
      </p>
      <p className="teacher">{COURSE[0].teacher}</p>
      <Link
        to={{
          pathname: `/course`,
          search: `?title=${COURSE[0].title}&price=${COURSE[0].price}&desc=${COURSE[0].desription}&teacher=${COURSE[0].teacher}`,
        }}
      >
        See More...
      </Link>
    </div>
  );
};

export default FullCourse;
