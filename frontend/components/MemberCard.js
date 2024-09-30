// import styles from "MemberCard.module.css";
//import PropTypes from 'prop-types'; /* should probably add these later */

export default function MemberCard({member}) {

	return (
		<div className="card">
			<h2>{member.name}</h2>
			// <img src={member.img} alt={member.name}/>
			<p>{member.bio}</p>
			<p>{member.responsibilities}</p>
			<p>{member.commits}</p>
			<p>{member.issues}</p>
			<p>{member.utests}</p>
		</div>	
	);
};

