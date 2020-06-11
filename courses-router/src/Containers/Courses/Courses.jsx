import React, { Component, Fragment } from "react";
import { Route, Link } from "react-router-dom";
import "./Courses.css";

import FullCourse from "../FullCourse/FullCourse";
import Course from "../../Components/Course/Course";
import { courses } from "./../../Contexts/courses";

class Courses extends Component {
  state = {
    courses: [
      {
        id: 1,
        title: "React Js",
        price: 109.99,
        desription: "Become a React Js web developer expert",
        teacher: "Max Steel",
      },
      {
        id: 2,
        title: "JavaScript Bootcamp",
        price: 199.99,
        desription:
          "Become a frontend developer by dominating every aspect of JS",
        teacher: "Johanna Simpson",
      },
      {
        id: 3,
        title: "React Native",
        price: 95.98,
        desription: "Become React Native Mobile developer expert",
        teacher: "Simon Rock",
      },
      {
        id: 4,
        title: "Node Js Fullstack Guide",
        price: 209.89,
        desription: "With this course you will master the back-end part of JS",
        teacher: "Victoria Luquet",
      },
    ],
    error: false,
  };

  render() {
    return (
      <courses.Provider value={this.state.courses}>
        <Fragment>
          <section className="all-courses">
            {this.state.courses.map((course) => (
              <Course
                key={course.title}
                id={course.id}
                title={course.title}
                teacher={course.teacher}
                price={course.price}
              />
            ))}
          </section>
          <div className="Course-Present">
            <Route path="/courses/:id" component={FullCourse} />
          </div>
        </Fragment>
      </courses.Provider>
    );
  }
}

export default Courses;
