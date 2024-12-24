import React from 'react';
import style from './Courses.module.css';
import Card from '../../../components/card';
import coursesData from '../../../data/courses.json';
import {Link} from 'react-router-dom';

 
function Courses() {
  return (
    <div className={style.courses_container}>
      <div className={style.heading}>
        <h1>Explore Courses</h1>
        <h4>Choose your Katana ⚔️</h4>
      </div>
      <div className={style.courses}>
        {coursesData.map((course, index) => {
          return (
            <div key={index} className={style.card_container}>
             {/* Third Task :Added link to individual cards*/}
             <Link to = {`/courses/${course.id}`}>
              <Card
                key={course.id}
                id={course.id}
                title={course.title}
                img={course.img}
              />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
