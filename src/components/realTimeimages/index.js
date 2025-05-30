import './index.css'

const RealTimeSamples = () => {
  const sampleCardList = [
    {
      imgurl: "/imagesAndIcons/realTimeImg/img1.png",
      name: "Dr. Meera Sharma",
      location: "Delhi"
    },
    {
      imgurl: "/imagesAndIcons/realTimeImg/img2.png",
      name: "Dr. Rajiv Menon",
      location: "Mumbai"
    },
    {
      imgurl: "/imagesAndIcons/realTimeImg/img3.png",
      name: "Dr. Anjali Verma",
      location: "Hyderabad"
    },
    {
      imgurl: "/imagesAndIcons/realTimeImg/img4.png",
      name: "Dr. Vivek Rao",
      location: "Bangalore"
    }
  ];

  const sampleCard = (val) => {
    const { imgurl, name, location } = val;

    return (
      <div className="sample_card_div" key={name + location}>
        <img src={imgurl} alt="sampleImg" className="sample_card_img" />
        <div className="d-flex justify-content-between sample_card_text">
          <p>{name}</p>
          <p>{location}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="real_time_samples_section">
      <h4>True Smiles, Real Transformations</h4>
      <p>See the life-changing results our dental implant patients enjoy</p>
      <div className="d-flex justify-content-xl-center gap-3 mt-3 real_time_sample_div">
        {sampleCardList.map(sampleCard)}
      </div>
    </div>
  );
};

export default RealTimeSamples;
