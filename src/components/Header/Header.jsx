import { Navbarr } from '../Navbar/Navbarr'
import './header.css'
import { Brand } from '../Brand/Brand'
import { FacebookFilled, InstagramFilled, YoutubeFilled } from '@ant-design/icons'



export const Header =()=> {
    return(
            <div className='header-style'>
                <Brand/>
                <Navbarr/>
                <div className='socialbar'>   
                    <a href='#' className='social-item'><FacebookFilled style={{ fontSize: '26px', color: '#989DA6'}}/></a>
                    <a href='#'><InstagramFilled style={{ fontSize: '26px', color: '#989DA6'}} className='social-item'/></a>
                    <a href='#'><YoutubeFilled style={{ fontSize: '28px', color: '#989DA6'}} className='social-item'/></a>
                </div>
            </div>
    )
}

export default Header;