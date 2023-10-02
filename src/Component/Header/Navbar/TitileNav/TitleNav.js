import Button from '../Button/Button';

const TitleNav = () => {
    return (
        <div className='d-flex justify-content-between align-item-center mb-4'>
            <a className="navbar-brand text-light" href="http://localhost:3000/"><h3>Booking Website</h3></a>
            <div className=''>
                {/* //buuton */}
                <Button name='Register'/>
                <Button name='Login'/>
            </div>
        </div>
    )
}

export default TitleNav;