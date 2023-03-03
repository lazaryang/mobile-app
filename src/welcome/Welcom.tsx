import logo from './img/Logo.svg'
import {Link} from 'react-router-dom'

function Hader(){
return <div className="welcome">
        <div className="wel2">
         <img src={logo} alt='logo'/>
         <p>Welcome to<br/> 
         <h2>OUR REMINFER</h2>
         <br/> Lorem ipsum dolor sit amet, consectetur
         <br/>adipiscing elit. Interdum dictum tempus
         <br/> interdum at dignissim metus.Ultricies sed
         </p> 
       
        </div> 
        
        <button className='getStart'> <Link to='/registr'><h2>Get Start {'-->'}</h2></Link></button>
        </div> 
}
export default Hader