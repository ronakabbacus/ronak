import React, {useEffect} from "react";
import {Link, useParams } from "react-router-dom";
import MemberData from "../../json/users-detail.json";
import Footer from "../footer";

const MemberDetail = () => {
  const { id } = useParams();
  const member = MemberData.users.find((user) => user.id === id);

  useEffect(() => {
    // Set the page title
    document.title = `${member.firstname} ${member.lastname} - rm-graphic`;
  }, [member.firstname, member.lastname]);

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
            <p><strong>designation <span>:</span></strong> <span>{member.post} {member.designation}</span></p>
            <p><strong>d.o.b <span>:</span></strong> <span>{member.DOB}</span></p>
            <p><strong>join date <span>:</span></strong> <span>{member.joinDate}</span></p>
            <p><strong>address <span>:</span></strong> <span>{member.street}, {member.city}, {member.taluka}, {member.district}, {member.state} - {member.pincode}</span></p>
            <p><strong>experience <span>:</span></strong> <span>{member.experience}</span></p>
            <p><strong>linkedin profile <span>:</span></strong> <Link to={member.linkedin} target="_blank" title={member.linkedin}>go to profile</Link></p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default MemberDetail;
