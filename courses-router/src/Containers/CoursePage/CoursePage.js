import React, { useState, useEffect } from "react";

const CoursePage = (props) => {
  const [course, setCourse] = useState({});

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const courseObj = {
      title: query.get("title"),
      price: query.get("price"),
      description: query.get("desc"),
      teacher: query.get("teacher"),
    };

    setCourse(courseObj);
  }, []);

  return (
    <article className="Course-Page">
      <button onClick={props.history.goBack}>Back</button>
      <h2>{course.title}</h2>
      <p className="price">
        <strong>${course.price}</strong>
      </p>
      <p className="description">{course.description}</p>
      <p className="teacher">{course.teacher}</p>
    </article>
  );
};

export default CoursePage;

// class CoursePage extends Component {
//     state = {};

//     componentDidMount() {
//       const query = new URLSearchParams(this.props.location.search);
//       const courseObj = {
//         title: query.title,
//         price: query.price,
//         description: query.desc,
//         teacher: query.teacher,
//       };

//       this.setState({ ...courseObj });
//     }

//     render() {
//       return (
//         <article className="Course-Page">
//           <h2>{this.state.title}</h2>
//           <p className="price">
//             <strong>{this.state.price}</strong>
//           </p>
//           <p className="description">{this.state.description}</p>
//           <p className="teacher">{this.state.teacher}</p>
//         </article>
//       );
//     }
//   }
