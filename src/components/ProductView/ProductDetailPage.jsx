import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import ProjectsData from '../../json/projects.json';
import Footer from '../footer';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const product = ProjectsData.images.find(item => item.id === parseInt(id));

  useEffect(() => {
    // Set the first image from the slider as the default selected image
    if (product && product.dimages.length > 0 && !selectedImage) {
      setSelectedImage(Object.values(product.dimages[0].imageSlider)[0]);
    }
  }, [product, selectedImage]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <section className='product-details-sec'>
        <div className='container'>
          <ul className='breadcrumb'>
          <li><Link to={'/'}>home</Link></li>
            <li><Link to={'/project'}>project</Link></li>
            <li>{product.name}</li>
          </ul>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 col-left">
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
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 col-right">
              <span className='red-lable-btn'>{product.dimages[0].lable}</span>
              <h5>{product.name}</h5>
              <p className='employer-name'><strong>employer</strong>{product.dimages[0].employer}</p>
              <p className='project_time'><strong>project completion time</strong>{product.dimages[0].project_time}</p>
              <div className='description'>
                <span>description</span>
                <p>{product.dimages[0].description}</p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="stacks-wrp">
                <h6>project stacks :</h6>
                <ul>
                  {product.project_stacks.map((stack, index) => (
                    Object.entries(stack).map(([stackName, stackImage]) => (
                      <li key={index}>
                        <img src={stackImage} alt={stackName} />
                      </li>
                    ))
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="site-links">
                    <h6>links :</h6>
                    <ul>
                      <li><Link className='btn btn-blue' to="https://www.facebook.com/">view website</Link></li>
                      <li><Link className='btn btn-red' to="https://www.facebook.com/">android app</Link></li>
                      <li><Link className='btn btn-red' to="https://www.facebook.com/">ios app</Link></li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetail;
