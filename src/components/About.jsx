import React from 'react'
import img1 from '../assets/images/about1.jpg'
import img2 from '../assets/images/about2.jpg'

const About = () => {
  return (
    <div className='about'>
      <center>---------<h2>About Our KEC </h2>----------</center>
       <center><img src={img1}/></center> 
        <p><span className="p-start">Kuppam Engineering College (KEC) was inaugurated by the technology </span> savvy Honourable chief minister of Andhra Pradesh Sri. N. Chandra Babu Naidu garu on 11-09-2001. The Institute was promoted by a well-Known Philanthropist Mr. B. C. Nagaraj, Founder Chairman of BCN Group of Institutions. KEC is accredited by NBA, certified by ISO 9001:2008 and recognized by UGC under 2(F) & 12(B). KEC is graded ‘A’ by the Government of Andhra Pradesh. Dr. N. Sunilraj, M.B.B.S., young and dynamic Vice-Chairman is working with an objective for phenomenal growth of the Institution and for its autonomous status in the near future. The Institute is headed by a dynamic Principal, Dr. S. Sudhakar Babu who has good academic and administrative experience.</p>
       <p>Kuppam Engineering College building is constructed on a sprawling 55 acres campus of elevated land surrounded by pollution free lush green scenic vegetation on the north fringe. It is well connected by road and rail. It is only 105 Kms away from Bangalore (Silicon) city, 180 Kms away from Chennai and 110 Kms away from Chittoor. The climate is very similar to that of Bangalore. Nearest railway station is Kuppam and nearest airport is Bangalore.</p>
       <center><img src={img2}/></center> 
        <p><span className="p-start">KEC has well established laboratories, dedicated and devoted staff members </span>in the various Departments of Engineering and Humanities and Sciences. The ambience in the Institute is good and encourages the Students to take part in Co-curricular and Extra curricular activities for an overall development of the students. In order to improve the employability of the students graduating, KEC imparts value added skills through Andhra Pradesh State Skill Development Corporation, ORACLE Academy, Microsoft, Texas Instruments, CISCO and Autodesk. The Andhra Pradesh State Skill Development Corporation in collaboration with SIEMENS has established a skill development centre to help the students attains skills apart from their curriculum for better employability prospects.
          Kuppam Educational Society in addition to Kuppam Engineering College also established Kuppam Public School, Kuppam Junior College, Kuppam Polytechnic, Kuppam Degree College, Kuppam Teacher Training Institute and Kuppam College of Nursing for educational development of the society in and around Kuppam.</p>
    </div>
  )
}

export default About