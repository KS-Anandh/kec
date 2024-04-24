import React from 'react'
import Service from './Service'
import clg from '../assets/images/college.jpeg'
import News from './News'
import Place from './Place'
const Article = () => {
  return (
    <>
    <div className='main_article'>
    <div className='article'>
    <img src={clg}/>
    <p><span className="p-start">Kuppam Engineering College was established in 2001 and is located in Chittoor</span>, Andhra Pradesh,
                     the institute offers courses in full-time mode and is approved by AICTE. A student can pursue any programme
                     from various After 10th, PG and UG courses from the institute's Degree and Diploma programs such as After 10th Diploma,
                     B.E. / B.Tech, M.E./M.Tech, MBA/PGDM. Also, students can choose these programs to pursue their careers in their respective 
                     fields. Kuppam Engineering College gives its students an offer to gain expertise through its trained and experienced faculty
                     in different fields such as Electrical Engineering, Electrical Engineering, Electronics and Communication Engineering, 
                     Mechanical Engineering, Civil Engineering, Electronics and Communication Engineering, Computer Science Engineering,
                     Electrical Engineering, Mechanical Engineering, Civil Engineering, Computer Science Engineering, Power Engineering, VLSI
                     Design, Artificial Intelligence and Machine Learning, Computer Science Engineering. The institute offers courses to a 
                     maximum of 918 candidates. The courses offered by the institute have an approximate fee of INR 72,000-199,760. The 
                     institute has a well-supported campus with facilities to support students' learning.</p>
    </div>
    <div className='rightBar'>
    <h3 className='news_title'>Latest News</h3>
    <div className='news'>
           <News  end="false" title="Anveshana 2024" summary="In Our College Got Second and Third Prices along with One Console Price Program Organized by Agasthya In Mother Theresa College."/>
           <News  end="false" title="Adudham Andhra Sports" summary="In Adudham Andhra Sports ,Our College Got Firts Price in Kabaddi,Volibal and third in Chess Game"/>
           <News end="false" title="Anthariksha 2K24" summary=" Anthariksha 2K24 Symposium Condected in Our College CSE Department. Here Conducted Paper Presentation,Web-Design,Code Debugging and Non-technical Events" />
           <News end="true" title="MSME Project" summary="In Our College one Project Idea was Select in MSME and now that is in Progress and  that will be Monitoring by Dr.Kodanda Ramayya Phd (ECE-HOD and R&D Director)"/>
    </div>
    <a className='news_more' href="#">More..</a>
    </div>
    </div>
    <div className='services'>
      <Service service="ADMISSIONS" img="src\assets\images\admissions.png" info=" Here to Apply Addmision form forB-Tech,M-Tech,Diploma,MBA and Degree." link="https://kec.ac.in/admissions/"/>
      <Service service="ACADEMICS" img="src\assets\images\academics.jpg" info=" When Technology moves too fast, We must learn to adapt that's why we team everything from the basics.'" link="https://kec.ac.in/academics/"/>
      <Service service="COURSES OFFERED" img="src\assets\images\courses.png" info=" Kuppam Polytechnic offers a Four year Diploma programmes in Three core disciplines." link="https://kec.ac.in/courses/"/>
      <Service service="EXAM DETAILS" img="src\assets\images\exam.jpg" info=" Download all notifications pertaining to the examinations being organized by the University." link="https://kec.ac.in/exam-details/"/>
      <Service service="LIFE @ KEC" img="src\assets\images\life.jpg" info=" The mangement provides hostel facilities separately for men and women within the campus." link="https://kec.ac.in/placements/"/>
      <Service service="PLACEMENTS" img="src\assets\images\placements.png" info=" An approach, which is just the right mix of tradition and modern education techniques." link="https://kec.ac.in/lifekec/"/>
    </div>
    </>
  )
}

export default Article