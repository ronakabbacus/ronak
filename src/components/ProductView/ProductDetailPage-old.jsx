import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import ProjectsData from '../../json/projects.json';
import BackArrow from '../../assets/images/arrow-prev.svg';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const product = ProjectsData.images.find(item => item.id === parseInt(id));

  useEffect(() => {
    // Set the first image from the slider as the default selected image
    if (product && product.dimages.length > 0 && !selectedImage) {
      setSelectedImage(Object.values(product.dimages[0].imageSlider)[0]);
    }
  }, [product, selectedImage]);

  const goBack = () => {
    navigate('/project');
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className='product-details-sec'>
      <div className='container'>
        <div className='back-button-wrp'>
          <button onClick={goBack} className='go-back-btn'><img src={BackArrow} alt="BackArrow" /></button>
        </div>
        <ul>
          <li>project /</li>
          <li>{product.name}</li>
        </ul>
        <div className="row">
          <div className="col-lg-6">
            <div className="image-wrp">
              <img src={selectedImage || product.image} alt={product.name} />
            </div>
            {product.dimages.map((dimage) => (
            <OwlCarousel loop={false} margin={10} nav={false} dots={true} dotsEach={2} items={5} smartSpeed={700} slideBy={1} navText={[]} key={dimage.id} >
              {Object.values(dimage.imageSlider).map((subimg, index) => (
                <div className={`item ${subimg === selectedImage ? 'active' : ''}`} key={index} onClick={() => handleImageClick(subimg)} >
                  <img src={subimg} alt={product.name} />
                </div>
              ))}
            </OwlCarousel>
          ))}
          </div>
          <div className="col-lg-6">
            <span className='red-lable-btn'>{product.dimages[0].lable}</span>
            <h5>{product.name}</h5>
            <ul>
              {Object.entries(product.dimages[0].attributes).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}: </strong>
                  {value}
                </li>
              ))}
            </ul>
            <p><strong>employer:</strong>{product.dimages[0].employer}</p>
            <p><strong>project completion time:</strong>{product.dimages[0].project_time}</p>
            <div>
              <span>description</span>
              <p>{product.dimages[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
