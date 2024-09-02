import React from 'react'

function About() {
  return (
    <div className='pt-12 bg-amber-200'>About
      <div className='container mx-auto flex justify-between'>
        <div className='p-3'><p className='text-2xl font-bold'>For psychology students</p>
        <p className='text-xl font-semibold'>Who can register?</p><b/>
        <p className='p-3'>Undergraduates as well as post-graduates can join the training program through a simple registration procedure, and can opt for both mandatory and volunteering internships.</p>
        <p className='p-3 text-xl font-semibold'>What’s in it for you?</p>
        <div className='p-3'>
          <ul className='list-disc'>
            <li>A week of induction, including psychology and technical training</li>
            <li>Access to more than 500 hours of psychology-based reading material, including skill labs, worksheets, questionnaires, etc. related to online counseling and therapy</li>
            <li>One-on-one sessions with trainers and mentors</li>
            <li>Live chats with escalation and mentoring matrix in place</li>
            <li>Certificate and LOR on successful completion of minimum 60 hours of effective counseling practice. LOR for Colleges and Universities in India will be submitted as per the desired format.</li>
            
          </ul>
        </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default About