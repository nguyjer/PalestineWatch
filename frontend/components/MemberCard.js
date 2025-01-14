import { useState } from "react";

export default function MemberCard({ member }) {
  const [showMore, setShowMore] = useState(false);  // Local state for each card

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);  // Toggles only this card's state
  };

  return (
    <div className="col-md-2 mb-3 d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={member.photo}
          className="card-img-top"
          alt="member headshot"
          style={{ objectFit: "cover", height: "35vh", width: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title">{member.name}</h5>
          <p className="card-text">
            {showMore ? member.bio : `${member.bio.substring(0, 100)}...`}  {/* Only affects this card */}
          </p>
          {showMore && (
            <p>
              Responsibilities: {member.responsibilities}
            </p>
          )}
        </div>
        <div className="d-flex justify-content-start" style={{ padding: '0 16px 16px' }}>
          <button
            className="btn btn-outline-dark"
            onClick={toggleShowMore}  // Only toggles for this card
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">No. of commits: {member.commits}</li>
          <li className="list-group-item">No. of issues created: {member.issues}</li>
          <li className="list-group-item">No. of unit tests created: {member.utests}</li>
          <li className="list-group-item">Role: {member.role}</li>
        </ul>
      </div>
    </div>
  );
}
