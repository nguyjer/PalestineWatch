// import styles from "MemberCard.module.css";
//import PropTypes from 'prop-types'; /* should probably add these later */

export default function MemberCard({ member }) {
  return (
    <div className="col-md-2 mb-3 d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={member.photo}
          className="card-img-top"
          alt="member headshot"
        />
        <div className="card-body">
          <h5 className="card-title">{member.name}</h5>
          <p className="card-text">{member.bio}</p>
          <p>Responsibilities: {member.responsibilities}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">No. of commits: {member.commits}</li>
          <li className="list-group-item">
            No. of issues created: {member.issues}
          </li>
          <li className="list-group-item">
            No. of unit tests created: {member.utests}
          </li>
        </ul>
      </div>
    </div>
  );
}
