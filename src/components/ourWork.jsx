import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectsData from '../json/projects.json';
import NextPage from '../assets/images/page-arrow-next.svg';
import PrevPage from '../assets/images/page-arrow-prev.svg';

const itemsPerPage = 12; // Adjust the number of items per page as needed
const visiblePageCount = 3; // Adjust the number of visible page numbers as needed

const OurWork = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ProjectsData.images.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(ProjectsData.images.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage;
    let endPage;

    if (totalPages <= visiblePageCount) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const halfVisibleCount = Math.floor(visiblePageCount / 2);
      if (currentPage <= halfVisibleCount) {
        startPage = 1;
        endPage = visiblePageCount;
      } else if (currentPage + halfVisibleCount >= totalPages) {
        startPage = totalPages - visiblePageCount + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - halfVisibleCount;
        endPage = currentPage + halfVisibleCount;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? 'active' : ''}>
          <span onClick={() => handlePageChange(i)}>{i}</span>
        </li>
      );
    }

    // if (totalPages > visiblePageCount) {
    //   if (currentPage > visiblePageCount - Math.floor(visiblePageCount / 3)) {
    //     pageNumbers.unshift(<span key="ellipsis-start" className="ellipsis"> ... </span>);
    //   }

    //   if (currentPage < totalPages - Math.floor(visiblePageCount / 3)) {
    //     pageNumbers.push(<span key="ellipsis-end" className="ellipsis"> ... </span>);
    //   }
    // }

    return pageNumbers;
  };
  return (
    <section className="our-work">
      <div className="container">
        <div className="row row-gap-5">
          {currentItems.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3" key={item.id} >
              <div className="item" title={item.name}>
                <Link to={`/productDetail/${item.id}`}>
                  <img src={item.image} alt={item.title} />
                </Link>
                <div className="project-title">
                  <h4>{item.name}</h4>
                  <div className="short_dec">
                    <p>{item.short_dec}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="custom_pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1} className={currentPage === 1 ? 'disable' : ''} >
            <img src={PrevPage} alt="Icon" />
          </button>
          <ul className="page-numbers">{renderPageNumbers()}</ul>
          <button onClick={handleNextPage} disabled={currentPage === totalPages} className={currentPage === totalPages ? 'disable' : ''} >
            <img src={NextPage} alt="Icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
