import './index.css'

const Navbar = () => <div className='navbar_full_outer_div'>
    <img src="/imagesAndIcons/home/logo.png" alt="logo" className='navbar_logo' />
    <div className='navbar_itmes_div'>
        <div className='navbar_book_appointment navbar_book_appointement_mobile'>
            <img src="/imagesAndIcons/home/bookAppointment.png" alt='book-appointement-logo' className='navbar_items_logo'/>
            <p>Book Appointement</p>
        </div>
        <div className='navbar_book_appointment navbar_contact_div'>
            <img src="/imagesAndIcons/home/phoneIcon.png" alt='phone-logo' className='navbar_items_logo'/>
            <p>985-6589-510</p>
        </div>
    </div>
</div>

export default Navbar