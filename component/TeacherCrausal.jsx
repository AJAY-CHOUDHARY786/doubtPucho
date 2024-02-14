import React ,{useState} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const TeacherCrausal = () => {
  const teachers=[
   
    {
      "_id": "65b40380a5e6e0fd4aff7f8f",
      "name": "Mohit Sir",
      "education": "QA and DILR Mentor",
      "alumni": "Alumni - MNIT Jaipur",
      "about": "Meet the Founder & Director of Coachify, with  a B.Tech and MBA. With 8 years in Education Industry, this leader has guided 5000+ students so far. Also a talented singer, he brings together education, entrepreneurship, and art, creating successes.",
      "top_in": "cat-2024-democlasses",
      "url": "https://coachifylive-website.s3.ap-southeast-2.amazonaws.com/CAT+Top+Educators-01.png",
      "publicid": "er9oqiekio5dxtvq1kxr",
      "__v": 0
    },
    
    {
      "_id": "65b4079aa5e6e0fd4aff8013",
      "name": "Saurabh Sir",
      "education": "DILR Mentor",
      "alumni": "Alumni - MNIT Jaipur",
      "about": "Meet Coachify's Partner & Director, a B.Tech holder honored by the President of India. Recognized for DILR excellence, he leverages a distinguished background from Maruti Suzuki and TrucksDekho. He seamlessly blends engineering prowess, corporate expertise, and strategic acumen in every venture.",
      "top_in": "cat-2024-democlasses",
      "url": "https://coachifylive-website.s3.ap-southeast-2.amazonaws.com/CAT+Top+Educators-02.png",
      "publicid": "neumr6ddobzo21ag5gwq",
      "__v": 0
    },
   
    {
      "_id": "65b40dd9a5e6e0fd4aff8056",
      "name": "Stuti Ma'am",
      "education": "DILR Mentor",
      "alumni": "Alumni - IIM Rohtak",
      "about": "Stuti Ma'am, a DILR expert mentor, holds a B.Tech. in Mechanical Engineering and an MBA in Marketing and Strategy from IIM Rohtak. With a background in sales and marketing across the automotive, EdTech, and pharma-cosmetic industries, she has made significant contributions at Mahindra and Mahindra, Byjus, and Galderma.",
      "top_in": "cuet-2025",
      "url": "https://coachifylive-website.s3.ap-southeast-2.amazonaws.com/CAT+Top+Educators-05.png",
      "publicid": "y7qyp3wdfihm7y2qm35p",
      "__v": 0
    } ,
    {
      "_id": "65b40dd9a5e6e0fd4aff8056",
      "name": "Stuti Ma'am",
      "education": "DILR Mentor",
      "alumni": "Alumni - IIM Rohtak",
      "about": "Stuti Ma'am, a DILR expert mentor, holds a B.Tech. in Mechanical Engineering and an MBA in Marketing and Strategy from IIM Rohtak. With a background in sales and marketing across the automotive, EdTech, and pharma-cosmetic industries, she has made significant contributions at Mahindra and Mahindra, Byjus, and Galderma.",
      "top_in": "cuet-2025",
      "url": "https://coachifylive-website.s3.ap-southeast-2.amazonaws.com/CAT+Top+Educators-05.png",
      "publicid": "y7qyp3wdfihm7y2qm35p",
      "__v": 0
    }
  
  ]
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
      const [t, setT] = useState({});
  const setTeacher=(teacher)=>{
    setT(teacher)
  } 
  return (
    <>
    <div>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                  <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    <div className="modal-body">
                      <div className="pop-up p-3">
                        <div className="row">
                          <div className=" teacher-img">
                            <img
                              className="rounded teachers-img"
                              src={t?.url}
                              alt="faculties" 
                            />
                          </div>
                          <div className=" teacher-name">
                            <h3>{t.name}</h3>                            
                            <h4>{t.education}</h4>
                            <h4>{t.alumni}</h4>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="div-about" style={{ padding: "18px" }}>
                            <p>{t.about}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <Carousel responsive={responsive} infinite={true} autoPlaySpeed={2000} showDots={false} infiniteLoop={true}>
        {teachers?.map((t, i) => (
                <div key={i} className="mx-2">
                  <div className="faculty-card d-flex align-items-center justify-content-between my-2 px-3 py-2">
                    <div className="d-flex justify-content-between flex-column">
                      <span className="font-fam-bold teachers-name">{t.name}</span>
                      <span className="faculty-title">{t.education}</span>
                      <span className="faculty-title">{t.alumni}</span>
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        style={{ width: "100px !important" }}
                        className="btn btn-sm knowmore mt-2 facultyId" onClick={e=>setTeacher(t)}
                      >
                        Know More
                      </button>
                    </div>
                    <div>
                      <img
                        className="rounded"
                        src={t.url}
                        style={{ width:'88px'}}
                        alt="faculties"
                      />
                    </div>
                  </div>
                </div>
              ))}
       
      </Carousel>
    </>
  )
}

export default TeacherCrausal