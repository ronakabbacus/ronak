import React from "react";
import {Link, useParams } from "react-router-dom";
import MemberData from "../../json/users-detail.json";
import Footer from "../footer";

const MemberDetail = () => {
  const { id } = useParams();
  const member = MemberData.users.find((user) => user.id === id);

  if (!member) {
    return <div>Member not found.</div>;
  }

  return (
    <>
    <div className="container">
      <ul className='breadcrumb'>
        <li><Link to={'/'}>home</Link></li>
        <li><Link to={'/our-team'}>our team</Link></li>
        <li>{member.firstname} {member.lastname}</li>
      </ul>
    </div>
    <section className="team-detail-sec">
      <div className="container">
        <div className="member-info-wrp">
          <div className="img-wrp">
            <img src={member.profile} alt={member.firstname} />
          </div>
          <div className="member-info-cnt">
            <span className="red-lable-btn">{member.lable}</span>
            <h2>{member.firstname} {member.lastname}</h2>
            <p><strong>designation :</strong> {member.post} {member.designation}</p>
            <p><strong>d.o.b :</strong> {member.DOB}</p>
            <p><strong>join date :</strong> {member.joinDate}</p>
            <p><strong>address :</strong> {member.street}, {member.city}, {member.taluka}, {member.district}, {member.state} - {member.pincode}</p>
            <p><strong>experience :</strong> {member.experience}</p>
            <p><strong>linkedin profile :</strong> <Link to={member.linkedin} target="_blank" title={member.linkedin}>go to profile</Link></p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default MemberDetail;
