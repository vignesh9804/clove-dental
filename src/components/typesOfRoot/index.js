import './index.css'

const TypesOfRoot = () => {
  const rootCardList = [
    {
      cardName: "Single Sitting RCT",
      subName: "Quick and effective treatment",
      types: ["Root Canal Treatment", "Split RCT", "Split RCT with rubber dam", "Split RCT with laser"],
      startingPrince: "₹2,500",
      rootImg: "/imagesAndIcons/typesofRoot/root1.png"
    },
    {
      cardName: "Microscopic RCT",
      subName: "High precision root canal treatment",
      types: ["Re-RCT with rubber dam", "Re-RCT laser specialist", "Re-RCT with retrieval of old RCT filling"],
      startingPrince: "₹4,000",
      rootImg: "/imagesAndIcons/typesofRoot/root2.png"
    }
  ];

  const rootCard = (rootCardVal) => {
    const { cardName, subName, types, startingPrince, rootImg } = rootCardVal;

    return (
      <div className="d-xl-flex mb-4 root_card_outer_div" key={cardName}>
        <img src={rootImg} alt="root type" className="root_card_img" />
        <div className='m-xl-4'>
          <h5>{cardName}</h5>
          <p>{subName}</p>
          <p><strong>Types of RCT</strong></p>
          <ul>
            {types.map((eachItem, index) => (
              <li key={index}>{eachItem}</li>
            ))}
          </ul>
          <p><strong>Starting Price:</strong> {startingPrince}</p>
          <button type='button' className='navbar_book_appointment form_book_appointement mb-3 mb-xl-0'>Get Consultation Free</button>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-5 d-flex flex-column align-items-center">
      <h4 className="mb-3">Types of Root Canal Treatments</h4>
      <p className="mb-4">
        In a root canal, the dentist removes infected pulp, cleans the tooth, and fills it with special material.
      </p>
      <ul className='d-flex justify-content-xl-center all_route_card_div'>
        {rootCardList.map((rootCardVal) => rootCard(rootCardVal))}
      </ul>
    </div>
  );
};

export default TypesOfRoot;
