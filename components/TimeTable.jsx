import React, { useState } from 'react'
import style from '../styles/timetable.module.css'

const TimeTable = () => {
    const [days, setDays] = useState([
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ])

   const [ show, setShow] = useState(true)
    const [select, setSelect] = useState(0)
    const  handleClick =  (index) =>{
        setSelect(index)
       setShow(false)
         setTimeout(()=>{
          setShow(true)
        }, 500)
      
        
      
     }

    const dayItems = days.map((d, i)=> 
     i === select? 
     <span className={style.day}  style={{background : '#da1d25'}} >{d}</span>
    :   <span className={style.day} onClick={handleClick.bind(this, i)}>{d}</span>

    )
  return (
    <div className={style.container}>
   
    
         <span className={style.titleText}> <div className={style.box}></div>CLASS LIST BY GOALS</span>
        <span className={style.subTitleText}>
        WHAT IS TIMETABLE FOR CLASSES
        </span>
    <div className={style.days}>
    {dayItems}
    </div>
{
  show?
    <div className={style.timeTable}>
    <div className={style.row}>
    <span className={style.topRow}>Time</span>
    <span className={style.topRow}>Class Type</span>
    <span className={style.topRow}>Coach Name</span>
    </div>
    <div className={style.row}>
    <span className={style.tableRow}>06.00 - 07.00</span>
    <span className={style.tableRow}>Fitness</span>
    <span className={style.tableRow}>
    <img src="http://themes.potenzaglobalsolutions.com/html/fitness/images/avatar/01.jpg" alt="trainer" />
    Paul Flavius
    </span>
    </div>
    <div className={style.row}>
    <span className={style.tableRow}>07.00 - 08.00</span>
    <span className={style.tableRow}>Boxcycle</span>
    <span className={style.tableRow}>
    <img src="http://themes.potenzaglobalsolutions.com/html/fitness/images/avatar/02.jpg" alt="trainer" />
    Ricardo Marshall
    </span>
    </div>
    <div className={style.row}>
    <span className={style.tableRow}>08.00 - 09.00</span>
    <span className={style.tableRow}>Body builing</span>
    <span className={style.tableRow}>
    <img src="http://themes.potenzaglobalsolutions.com/html/fitness/images/avatar/03.jpg" alt="trainer" />
        Joana Williams
    </span>
    </div>
    <div className={style.row}>
    <span className={style.tableRow}>09.00 - 10.00</span>
    <span className={style.tableRow}>Crosfit</span>
    <span className={style.tableRow}>
    <img src="http://themes.potenzaglobalsolutions.com/html/fitness/images/avatar/04.jpg" alt="trainer" />
    Gwen Bass
    </span>
    </div>
    <div className={style.row}>
    <span className={style.tableRow}>10.00 - 11.00</span>
    <span className={style.tableRow}>Cardio</span>
    <span className={style.tableRow}>
    <img src="http://themes.potenzaglobalsolutions.com/html/fitness/images/avatar/05.jpg" alt="trainer" />
    Melanie Byrd
    </span>
    </div>
    <div className={style.row}>
    <span className={style.tableRow}>11.00 - 12.00</span>
    <span className={style.tableRow}>Yoga Basics</span>
    <span className={style.tableRow}>
    <img src="http://themes.potenzaglobalsolutions.com/html/fitness/images/avatar/06.jpg" alt="trainer" />
    Maria Fields
    </span>
    </div>
    <div className={style.row}>
    <span className={style.tableRow}>12.00 - 01.00</span>
    <span className={style.tableRow}>Sports</span>
    <span className={style.tableRow}>
    <img src="http://themes.potenzaglobalsolutions.com/html/fitness/images/avatar/07.jpg" alt="trainer" />
    Melvin Harvey
    </span>
    </div>
    </div>
: null
}
    </div>
  )
}

export default TimeTable