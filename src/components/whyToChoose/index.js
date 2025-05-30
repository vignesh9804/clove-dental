import './index.css'

const WhyToChoose = () => {

    const reasonsList = ["DORI - A.I. enabled Dental chair","10x Safety and 4 steps sterilization process","Experienced and Certified implantologist","Regular audits for safety protocols","Updated with world class equipments"]

    return(
        <div className='mt-5'>
            <h5 className='text-center'>Why Choose Clove Dental</h5>
            <p className='text-center'>Clove Dental is India’s Leading dental care brand with 600+ clinic nationwide</p>
            <div className='d-xl-flex justify-content-xl-center mt-5'>
                <ul className='reasons_ul order-0 order-xl-0'>
                    {reasonsList.map((eachItem) =>
                    <div className='d-flex justify-content-between align-items-center'>
                        <li className='list_reasons'>{eachItem}</li>
                        <p className='list_reasons_plus_icon'>+</p>
                    </div>)}
                </ul>
                <img src="/imagesAndIcons/whyToChoose/img1.png" alt="reason_sample" className='img_reasons order-1 order-xl-1'/>
            </div>

        </div>
    )
}

export default WhyToChoose