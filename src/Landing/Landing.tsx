import './landing.scss'
import * as img from '../assets/LangingPage/langingImg'
function Landing(params:any) {
    return(
        <div className='bgImg' style={{backgroundImage:`url(${img.landingBg})`}}>
            <button >Sign In</button>
        </div>
    )
    
}
export default Landing