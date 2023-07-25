import React, { useState } from "react";
import { Link } from "react-router-dom";
import MemberData from "../json/users-detail.json";
import NextPage from '../assets/images/page-arrow-next.svg';
import PrevPage from '../assets/images/page-arrow-prev.svg';

const itemsPerPage = 8; // Number of items to display per page

const TeamMember = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(MemberData.users.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = MemberData.users.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? "active" : ""}>
          <span onClick={() => setCurrentPage(i)}>{i}</span>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      <section className="team-member-sec">
        <div className="container">
          <div className="card-wrp">
            {currentItems.map((user) => (
              <div className="member-card" key={user.id} title={`${user.firstname} ${user.lastname}`}>
                <div className="member-img">
                  <img src={user.profile} alt={user.firstname} />
                </div>
                <div className="member-content">
                  <h2>
                    {user.firstname} {user.lastname}
                  </h2>
                  <p>{user.designation}</p>
                  <Link to={`/team-details/${user.id}`}>View Details</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="custom_pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1} className={currentPage === 1 ? "disable" : ""}>
              <img src={PrevPage} alt="Icon" />
            </button>
            <ul className="page-numbers">{renderPageNumbers()}</ul>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className={currentPage === totalPages ? "disable" : ""}>
              <img src={NextPage} alt="Icon" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMember;
