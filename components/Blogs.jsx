import React from 'react'
import style from '../styles/blogs.module.css'
const Blogs = () => {
  return (
    <div className={style.container}>
           <span className={style.titleText}> <div className={style.box}></div> OUR BLOGS</span>
        <span className={style.subTitleText}>
        CHECK OUT OUR LATEST STORIES
        </span>
    <div className={style.blogs}>
        <div className={style.blog}>
        <img src="http://themes.potenzaglobalsolutions.com/html/fitness/images/blog/01.jpg" alt="tariner" />
        <div className={style.blogMeta}>
        by Sara Lisbon / May 26 , 2021 / 01
        </div>
        <span className={style.blogTitle}>AT HOME AB WORKOUT</span>
        <span className={style.blogSubtitle}>Reflect and experiment until you find the right combination of motivators for...</span>
        </div>
        <div className={style.blog}>
        <img src="http://themes.potenzaglobalsolutions.com/html/fitness/images/blog/02.jpg" alt="tariner" />
        <div className={style.blogMeta}>
        by Ora Bryan /
 March 10, 2021 / 
02
        </div>
        <span className={style.blogTitle}>31-DAY FITNESS CALENDAR</span>
        <span className={style.blogSubtitle}>Let success motivate you. Find a picture of what epitomizes success to you...</span>
        </div>
        <div className={style.blog}>
        <img src="http://themes.potenzaglobalsolutions.com/html/fitness/images/blog/03.jpg" alt="tariner" />
        <div className={style.blogMeta}>
        by Aaron Sharp / 
April 03, 2021 / 
03
        </div>
        <span className={style.blogTitle}>FULL BODY HOME WORKOUT</span>
        <span className={style.blogSubtitle}>Do it today. Remind yourself of someone you know who died suddenly and the fact...</span>
        </div>
    </div>
    </div>
  )
}

export default Blogs