import React from 'react'

const StudyInUSA = () => {
  const data = {
    countrie: "USA",
    p1: "English is the language which is most commonly spoken all round the globe and the world today demands a fluent English speaker, and for that you should own a mastery reading, listening, and speaking. People say that it becomes the toughest task to learn English language, if you are not a native speaker of English But at Pacific Education Consultant, the course content is structured in such a manner that it give you practice in all the three areas i.e. Reading, listening, and speaking at the same time. For this we have a unique training methodology for the Spoken English Course. This is what makes us stand ahead and aloof of others. Our Spoken English Course which is tailor made according to the specific needs and goals of the student. Our courses will retrain your mind and your tongue to learn to speak fluent spoken English.",
    p2: "Apart from being a fabulous tourist destination, the country is multicultural and the most sought-after study-abroad destination across the globe. The USA also opens doors for STEM courses, innovative research, ample work opportunities to students during and after the completion of academic courses. As of 2022, about 2,11,930 Indian students were recorded in the United States. Read here till the end for more information about popular courses, top colleges, 2024 intakes, visa requirements, and best student cities to study in USA!",
    p3: "The United States of America has been ranked 3rd in the world in attracting international students to study abroad. Indian student enrollment in the United States increased by 19% in 2021-22, surpassing China in 2022-23. 82,000 US visas were issued to Indian students from June to August, the highest among all nations. Here are the key factors to know for your USA study plan:",
    p4 : "Coming to the education system in the USA, American institutions are of 4 different types namely State colleges or universities, private colleges, Community colleges, and Technology institutes. Also, there are three types of degrees offered by about 4,500 accredited higher education institutions in the USA. Similar to India, here, students in the USA join public or private colleges and universities to pursue higher education after completing high school.",
    p5 : "After high school (12th standard), a full-time undergraduate degree (Bachelor’s) has a course duration of 4 years. An associate degree (equivalent to Diploma) at the UG level, offered by community colleges, has 2 years of duration. Similarly, a Graduate or Master’s degree from a USA university covers 2-3 academic years. A PhD or Doctorate takes 5 to 8 years to complete successfully.",
    p6 : 'A question always arises for foreign students: "Is it worth studying in the USA?" To know what makes the USA most preferable for students, let’s have a look at the benefits of studying in USA:',
    li1 : 'Flexible Education System: The US higher education system is very flexible in terms of determining program structure and selecting courses. The credit transfer system, online/offline classes and suitable timings enhances flexibility for students.',
    li2 : 'Top Universities: The USA is home to the top educational institutions in the world and their degrees are recognised worldwide. According to the QS world university rankings, the top 4 universities are MIT, Stanford, Harvard, and Caltech.    '
  }
  return (<>
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center" >
      <div className=" p-lg-5 mx-auto my-5">
        <h1 className=" fw-bold">Study in {data.countrie}
        </h1>
        <h3 className="fw-normal text-muted mb-3">
          Experience a World-Class Education!
        </h3>
        <div className="d-flex gap-3 justify-content-center lead fw-normal">
          <a className="icon-link" href="#">
            Book Free Counseling Now
            <svg className="bi">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
          <a className="icon-link" href="#">
            Search {data.countrie} University
            <svg className="bi">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
        </div>
      </div>
      <div className="product-device shadow-sm d-none d-md-block" />
      <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
    </div>

    <div className='container'>
      <h1 className='text-left pt-4'>Study In {data.countrie}?</h1>
      <p>{data.p1}</p>
      <p>{data.p2}</p>
      <h1 className='text-left pt-4'>Study in {data.countrie} Key Facts</h1>
      <p>{data.p3}</p>
      <h1 className='text-left pt-4'>{data.countrie} Education System?</h1>
      <p>{data.p4}</p>
      <p>{data.p5}</p>
      <h1 className='text-left pt-4'>Top 6 Benefits of Studying in {data.countrie}</h1>
      <p>{data.p6}</p>  
    </div>
  </>
  )
}

export default StudyInUSA