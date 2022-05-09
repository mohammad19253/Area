import React,{useRef, useState,useEffect}from "react";
import ArrowIcon from './images/arrow.png'
import cards from './slideshow-data'


const  language = 'english  '
const SlideShow = (props) =>{
    const cardContainerRef=useRef()
    const backgroundBlurRef=useRef()
    const cardsRef=useRef([])
    const [slide_id,set_Slide_id]=useState(0)
 
    const leftArrow=()=>{
        if( slide_id === 0 ){
            backgroundBlurRef.current.scrollTo({left:(cards.length)*(backgroundBlurRef.current.clientWidth+20),behavior:'smooth'})
            cardContainerRef.current.scrollTo({left:(cards.length)*(cardsRef.current[slide_id].clientWidth+20),behavior:'smooth'})
            set_Slide_id(cards.length-1)
        }else{
            backgroundBlurRef.current.scrollTo({left:(slide_id-1)*(backgroundBlurRef.current.clientWidth+20),behavior:'smooth'})
            cardContainerRef.current.scrollTo({left:(slide_id-1)*(cardsRef.current[slide_id].clientWidth+20),behavior:'smooth'})
            set_Slide_id(slide_id-1)
        }
    }
    const rightArrow=()=>{
        if( slide_id === cards.length-1 ){
            backgroundBlurRef.current.scrollTo({left:0,behavior:'smooth'})
            cardContainerRef.current.scrollTo({left:0,behavior:'smooth'})
            set_Slide_id(0)
        }else{
            backgroundBlurRef.current.scrollTo({left:(slide_id+1)*(backgroundBlurRef.current.clientWidth),behavior:'smooth'})
            cardContainerRef.current.scrollTo({left:(slide_id+1)*(cardsRef.current[slide_id].clientWidth+20),behavior:'smooth'})
            set_Slide_id(slide_id+1)
        }
    }
    return (
        <div className="slideShow-container" id="designs">
            <div className="background-blur-slideshow" ref={backgroundBlurRef}>
                    {
                        cards.map( (card,index)=>{
                            return <div className="each-slide" key={index}>
                                    <div  className='slideShow-slide-image' style={{backgroundImage: `url(${card.image.src})`}}>
                                    </div>
                            </div>
                        })
                    }
            </div>
           
            <div className="box-container" >
                <div className="box">
                    <div className="left-arrow" onClick={()=>{leftArrow()}}>
                       <img src={ArrowIcon.src}  alt="left-arrow" />
                    </div>
                    <div className="cards-container" ref={cardContainerRef}>
                        {
                            cards.map((card,index)=>{
                                return   <div className={'card'} key={index} ref={e=>{cardsRef.current[index]=e}}>
                                <div className="card-image" style={{backgroundImage: `url(${card.image.src})`}}></div>
                                <div className="card-title" style={ {color:card.color}}>
                                    <div  style={ {border:`3px solid ${card.color}`}}>
                                        <div>{language.type === 'farsi' ? card.titleFarsi : card.titleEnglish}</div>
                                    </div>
                                </div>
                                <div className="card-text"  style={{color:card.color}}>
                                    <div>{language.type  === 'farsi' ? card.textFarsi : card.textEnglish}</div>
                                </div>
                            </div>
                            })
                        }
                    </div>
                    <div className="right-arrow" onClick={()=>{rightArrow()}}>
                        <img src={ArrowIcon.src} alt="right-arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SlideShow