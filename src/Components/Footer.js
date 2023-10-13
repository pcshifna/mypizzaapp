import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook"
import "../Styles/footer.css"
function Footer() {
  return (
    <div className='footer'>
      
      <div className='socialmedia'>
      <InstagramIcon /><TwitterIcon /><LinkedInIcon/><FacebookIcon/>
      </div>
      <p>@copy right</p>
    </div>
  )
}

export default Footer
