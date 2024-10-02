// import styles from "MemberCard.module.css";
//import PropTypes from 'prop-types'; /* should probably add these later */

export default function MemberCard({member}) {

	return (
		<div className="card">
			<h3>{member.name}</h3>
			<img src={member.photo} alt={member.name}/>
			<p>{member.bio}</p>
			<p>Responsibilities: {member.responsibilities}</p>
			<p>No. of commits: {member.commits}</p>
			<p>No. of issues created: {member.issues}</p>
			<p>No. of unit tests created: {member.utests}</p>
		</div>	
	);
};

