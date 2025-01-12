import React from 'react'
import "./Card.css"
const Card = () => {
  const courses = [
    {
        id:1,
        course_img : "https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png",
        course_name:"Code with Chai",
        course_desc:""
     },
     {
        id:2,
        course_img : "https://i.ytimg.com/vi/rHn9af16O_E/maxresdefault.jpg",
        course_name:"Striver A-Z DSA",
        course_desc:""
     },
     {
        id:3,
        course_img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIrvsbiKXKL1R4PqXaIzSxR49kPmTqubKag&s",
        course_name:"Sheryian Frontend Domination",
        course_desc:""
     },
     {
        id:4,
        course_img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJLIaHiNE9E6QntDtzF1WY5x4hedqSDB6Fg&s",
        course_name:"Coder-army DSA",
        course_desc:""
     },
     {
        id:5,
        course_img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb72H9TwDPcsLNXxQxVuIhWMMep6DoLTrTcw&s",
        course_name:"Apna College JAVA",
        course_desc:""
     }
  ]
  return (
    <>
    {courses.map((course)=>(
        <div key={course.id} className='card-div'>
    <div className='img-div'>
      <img className='img' src={course.course_img} alt='course-img'/>
    </div>
    <div className='course-name'>
    {course.course_name}
    </div>
    <p className='course-desc'>
   {course.course_desc}</p>
    </div>
    ))}

    </>
  )
}

export default Card
