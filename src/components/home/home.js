import SlideShow from '../slideshow/slideshow'
import homepageStyles from '../../../styles/Home.module.scss'
import InstagramLogo  from '../../img/icons/instagram.svg'
import TwiiterLogo  from '../../img/icons/twitter.svg'
import TelegramLogo  from '../../img/icons/telegram.svg'
import LinkdingLogo  from '../../img/icons/linkdin.svg'
import Github  from '../../img/icons/github.svg'
import YouTube  from '../../img/icons/mohammad-mirzaei-YouTube-channel.svg'
import Favicon from '../../img/icons/favicon.svg'
import Link from 'next/link'
export default function Home() {
  return (
    <div  className='w-100' style={{height:'75vh'}}>
       <SlideShow />
       <div className='container p-5'>
          <h1>Lorem Ipsum</h1>
          <div>
              <h2>inja dg chi benevisam</h2>
              <p className='w-50'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
          </div>
          <footer className={homepageStyles.footer_container}>
            <div className={` w-100 h-100`} >
            <div  className={`${homepageStyles.footer} container d-flex`}>
                <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="mohammad-mirzaei-05269221b" data-version="v1"></div>
                <div className={`${homepageStyles.contact_me} w-30`}>
                        <h4 >Contact me</h4>
                        <div>
                            <div className={`${homepageStyles.location} d-flex`}>
                                    <Favicon  alt='nft logo of mohammad mirzaei/ محمد میرزایی' />
                                    <label>
                                    <div className="fs-7">Location:</div>
                                        <div>Tehran,iran</div>
                                       
                                    </label>
                                
                            </div>
                            <Link href='https://twitter.com/mirzae19253?t=TEe8zp3dG4lp2v_1VKSkmQ&s=09' >
                                <a target="_blank" title="twitter">
                                    <TwiiterLogo  alt='twitter mohammad mirzaei/ محمد میرزایی'/>
                                    <label>@mirzae19253</label>
                                </a>
                            </Link> 
                            <Link href='https://t.me/mirzae19253' >
                                <a target="_blank"  title="telegram">
                                    <TelegramLogo  alt='telegram mohammad mirzaei/ محمد میرزایی'/>
                                    <label>@mirzae19253</label>
                                </a>
                            </Link> 
                            <Link href='https://github.com/mohammad19253' >
                                <a target="_blank" title="github">
                                    <Github  alt='github mohammad mirzaei/ محمد میرزایی'/>
                                    <label>mohammad19253 </label>
                                </a>
                            </Link>
                            <Link href='https://instagram.com/mohammadmirzaei_ir?utm_medium=copy_link' >
                            <a target="_blank" title="instagram">
                                <InstagramLogo alt='instagram mohammad mirzaei/ محمد میرزایی' />
                                <label>mohammadmirzaei_ir</label>
                            </a>
                            </Link> 
                            <Link href='https://www.linkedin.com/in/mohammad-mirzaei-05269221b' >
                                <a target="_blank" title="linkdIn">
                                    <LinkdingLogo alt='linkdIn mohammad mirzaei/محمد میرزایی'/>
                                    <label>mohammad mirzaei</label>
                                </a>
                            </Link> 
                            <Link href='https://www.youtube.com/channel/UCsfUOj7XQYj_p7Xyo1GHqeg' >
                                <a target="_blank" title="mohammad mirzaei YoutubeChannel">
                                    <YouTube alt='YouTube mohammad mirzaei/محمد میرزایی'/>
                                    <label>YouTube Channel </label>
                                </a>
                            </Link> 
                                   
                        </div>
                </div> 
            </div>
            </div>
            <div  className={`${homepageStyles.privacy} p-3 fs-7`}>
                &copy; Mohammad Mirzaei    
            </div>
        </footer>
       </div>
    </div>
  )
}
