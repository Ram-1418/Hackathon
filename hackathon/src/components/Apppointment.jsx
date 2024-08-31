import React, { useEffect, useState } from 'react'

function Apppointment() {
    const[ contactData, setContactData] = useState([]);
    useEffect(()=>{
        fetch('./contact.json')
        .then(response=>response.json())
        .then((data)=>{
            setContactData(data.data)
            console.log(data);
        })
        .catch(error=>console.log(error))
    }, [])
  return (
    <div className='h-screen w-full pt-[300px]'>
        <h2>Apppointment</h2>
        <div className="contact-container flex justify-center items-center gap-5 flex-wrap">
            {
                contactData.map((contact, idx)=>{
                    return (
                        <div key={idx} className='contact-card shadow-sm bg-slate-50 w-[200px] min-h-[100px]'>
                            <img src={contact.image_url} alt="" srcset="" />
                            <h3 className='text-center'>{contact.name}</h3>
                            <p className='text-center'>{contact.qulification}</p>
                            
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Apppointment