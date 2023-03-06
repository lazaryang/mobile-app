import Logo from '../welcome/img/Logo.svg'
import Input from '../Components/Input'
import {Link} from 'react-router-dom'



function Registr2 () {
    return <div>
        <div className='registr1'>
            <img className='registr-img' src={Logo} alt='logo' />
            <p>Wlecome back <br/>
            to <br/>
            <h2>OUR REMINDER</h2><br/>
            </p>
        </div>
        <div className='registr2'>
            <Input typeInput='email' placeholder='Enter your email'/>
            <Input typeInput='password' placeholder='Enter password'/>
        </div>
        <p>Forgot Password</p>
        <div className='register-3'>
            <button className='registr-Button' > <Link to='/welcome'><h2>Sing In</h2></Link></button>
        <p>Don`thave an account ? <a href='https://www.google.com/' >Sing In</a></p>
        </div>
        
    </div>
    
}

export default Registr2