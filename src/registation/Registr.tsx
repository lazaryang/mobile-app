import Input from '../Components/Input'
import logo from '../welcome/img/Logo.svg'
import {Link} from 'react-router-dom'


function Registr(){
    return <div>
        <div className='registr1'>
            <img className='registr-img' src={logo} alt='logo' />
            <p><h2>Get`s things done <br/> 
            with TODO</h2><br/>
            Let`s help you meat up your tosks
            </p>
        </div>
        <div className='registr2'>
            <Input typeInput='text' placeholder='Enter your Full name'/>
            <Input typeInput='email' placeholder='Enter your email'/>
            <Input typeInput='password' placeholder='Enter password'/>
            <Input typeInput='password' placeholder='Confirm Password' />
        </div>
        <button className='registr-Button' > <Link to='/registr2'><h2>Registr</h2></Link></button>
        <p>Aiready have an account ? <a href='https://www.google.com/' >Sing In</a></p>
    </div>
}

export default Registr