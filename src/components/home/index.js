import './index.css'

const Home = () => {
    const scrollItems = [
        {
            imgSrc: "/imagesAndIcons/home/plusIcon.png",
            count: "600+",
            label: "Clinics",
        },
        {
            imgSrc: "/imagesAndIcons/home/dentistIcon.png",
            count: "1300+",
            label: "Dentists",
        },
        {
            imgSrc: "/imagesAndIcons/home/baloonsIcon.png",
            count: "30 L+",
            label: "Happy Patients",
        },
        {
            imgSrc: "/imagesAndIcons/home/teethIcon.png",
            count: "35K+",
            label: "Ortho Cases",
        },
        {
            imgSrc: "/imagesAndIcons/home/toothImplantIcon.png",
            count: "55 K+",
            label: "Implants Places",
        },
    ];

    const homeBottomScrollSection = () => (
        <div className="home_bottom_scroll_section_wrapper col-12 order-1 order-xl-2">
            <div className="home_bottom_scroll_section">
            {scrollItems.concat(scrollItems).map((item, index) => (
                <div className="home_scroll_item_div" key={index}>
                <img
                    src={item.imgSrc}
                    alt="scroll Logo"
                    className="scroll_logo_img"
                />
                <p>
                    <span className="scroll_name_span">{item.count}</span> {item.label}
                </p>
                </div>
            ))}
            </div>
        </div>
        );



    const homeFormSection = () =>  
        <div className='home_form_section col-12 col-xl-4 home_outer_container_div_2 order-2 order-xl-1 mt-4 mt-xl-0'>
            <h5>Get Expert Dental Guidance in Delhi</h5>
            <p>Book your free consultation today and take the first step towards healthy, beautiful teeth.</p>
            <form className='home_form_div'>
                <input type='text' placeholder='Name' className='form_input_tag'/>
                <input type='text' placeholder='Mobile Number' className='form_input_tag'/>
                <div className='form_captha_section'>
                    <input type='text' placeholder='Captcha' className='form_input_tag form_input_tag_captcha'/>
                    <div className='form_captcha_div'>
                        <p>1514</p>
                    </div>
                 </div>
                <div className='form_terms_section'>
                    <input type='checkbox' /> 
                    <p>I agree to CLOVE Dental’s Terms and Privacy Policy and consent to contact via phone, email, or SMS.</p>
                </div>
                <button type='button' className='navbar_book_appointment form_book_appointement'>Book a Free Consultation</button>
            </form>
        </div>


    return (
        <div className="container-fluid home_outer_container_div">
            <div className="row home_outer_row_div">
                <div className="col-12 col-xl-8 home_full_outer_div order-0">
                    <div className="home_main_bg_div">
                        <div className='home_main_content_matter_div'>
                            <p className='home-content-desktop'>Painless Root Canal Treatment in Delhi</p>
                            <p className='home-content-mobile'>Your Smile,<br/>Our Priority At <br/><span className='home-content-mobile-span'>Clove Dental</span></p>
                            <p className='home-content-mobile-p2'>Expert RCT. Zero Pain. Right Here in Delhi.</p>
                            <div className='navbar_book_appointment home_book_appointment'>
                                <img src="/imagesAndIcons/home/bookAppointment.png" alt='book-appointement-logo' className='navbar_items_logo'/>
                                <p className='home_book_appointement_mobile_text'>Book Appointement</p>
                            </div>
                        </div>
                        <img src="/imagesAndIcons/home/homeDoctorImg.png" alt="DoctorImg" className="home_main_doctor_img"/>
                    </div>
                </div>
                {homeFormSection()}
                {homeBottomScrollSection()}
            </div>
        </div>
    )
}

export default Home