// pages/about.js
import styles from "../styles/Home.module.css";
import Head from "next/head";
import MemberCard from "../components/MemberCard.js";
import { useState, useEffect } from 'react';

function TotalStats( {stats} ) {

	return (
		<section>
			<h2>Overall Stats</h2>
			<p>Total No. of Issues: {stats.issues}</p>
			<p>Total No. of Commits: {stats.commits}</p>
			<p>Total No. of Unit Tests: {stats.utests}</p>
		</section>
	);
}

export default function About() {

    const initMembers = [
	{
	    name: "Aryan Samal",
		gitid: "aryan.samal",
	    photo: "/headshots/as.png",
	    bio: "Aryan bio",
	    responsibilities: "Aryan responsibilities",
	    commits: 0,
	    issues: 0,
	    utests: 0
	},
	{
	     name: "Jeremy Nguyen",
		 gitid: "nguyjer",
	     photo: "/headshots/jn.png",
		 bio: "Jeremy bio",
		 responsibilities: "Jeremy responsibilities",
		 commits: 0,
		 issues: 0,
		 utests: 0
	},
	{
	     name: "Kenny Nguyen",
		 gitid: "kenken17621",
	     photo: "/headshots/kn.png",
		 bio: "Kenny bio",
		 responsibilities: "Kenny responsibilities",
		 commits: 0,
		 issues: 0,
	     utests: 0
	},
	{
	     name: "Rohan Damani",
		 gitid: "rdamani1",
	     photo: "/headshots/rd.png",
	     bio: "Rohan bio",
	     responsibilities: "Rohan responsibilities",
	     commits: 0,
	     issues: 0,
	     utests: 0
	},
	{
	     name: "Will Matherne",
		 gitid: "willcmatherne",
	     photo: "/headshots/wm.png",
	     bio: "Will bio",
	     responsibilities: "Will responsibilities",
	     commits: 0,
	     issues: 0,
	     utests: 0
	}];

	const apiKey = 'glpat-dFrzisSrHFEZuhewUGLK';
	const id = '61909583';

	const getBranches = async () => 
	{
	    const response = await fetch(`https://gitlab.com/api/v4/projects/${id}/repository/branches`, {
	    	headers: {
				'PRIVATE-TOKEN': `${apiKey}`,
	    	},
	    }).catch(error => {
			console.error(`Error fetching branches:`, error)
	    });

	    return await response.json();
	};

	const [members, updateMembers] = useState(initMembers);
	const [stats, setStats] = useState( { 
											issues: 0,
											commits: 0,
											utests: 0
										});

	useEffect(() => {
		if (members.length > 0) {
			let totalIssues = 0;
			let totalCommits = 0;
			let totalUTests = 0;
			for (let member of members) {
				totalIssues += Number(member.issues);
				totalCommits += Number(member.commits);
				totalUTests += Number(member.utests);
			}

			setStats ({ issues: totalIssues, commits: totalCommits, utests: totalUTests });
		}
	}, [members]);


	const getIssues = async (member) => {
		try {
			const response = await fetch(`https://gitlab.com/api/v4/projects/${id}/issues?author_username=${member.gitid}`, {
				headers: {
					'PRIVATE-TOKEN': `${apiKey}`,
				},
			});

			if (!response.ok) {
				member.issues = "Error fetching issues";
				throw new Error(`Error: ${response.status} ${response.statusText}`);
			}

			const issues = await response.json();
			return issues.length;

		} catch (error) {

			console.error(`Error fetching issues for ${member.name}:`, error);
			return "Error fetching issues";
			
		}
	};
	
	/* 		 this will be a little funky
	    the way gitlab's api works, we have to 
		get each branch, and then search each
		branch for commits by each member.
		sum those up, and we should have the
		total number of commits.	   		   */
	const getCommits = async (member) => {
		try {
			const branches = await getBranches();

				let totalCommits = 0;
				for (let branch of branches) {
					const response = await fetch(`https://gitlab.com/api/v4/projects/${id}/repository/commits?author=${member.gitid}&ref_name=${branch.name}`, {	
						headers: {
							'PRIVATE-TOKEN': `${apiKey}`,
						},
					});

					if (!response.ok) {
						console.error(`Error: ${response.status} ${response.statusText}`);
					}
					
					const data = await response.json();
					totalCommits += data.length;
				}

				return totalCommits;

		} catch (error) {
			console.error(`Error fetching issues for ${member.name} on ${branch.name}`);
			return totalCommits;
		}
	}	
	
	// TODO: update this to use useState, will have to use .map
	const updateMemberIssues = async () => {	
		const updatedMembers = await Promise.all(
			members.map(async (member) => {
				const issueNum = await getIssues(member);
				const commitNum = await getCommits(member);
				return { ...member, issues: issueNum, commits: commitNum };
			})
		);
		updateMembers(updatedMembers);
	};

	useEffect(() => {
		updateMemberIssues();
	}, []);
	
	
    return (
	  <div>
	    <Head>
	      <title>Palestine Watch</title>
	      <link rel="icon" href="/favicon.ico" />
	    </Head>
 
 	    <main className={styles.mainContent}>
	      <h1>About Page</h1>
	      <p>
	        Welcome to Palestine Watch! The purpose of this website is to inform you about the ongoing conflict
		    between Israel and Palestine, and, if you'd like, how you can help! Here, you'll be able to find
		    different news sources about the latest events in the conflict, as well as support groups that you
		    can donate to to help those in need. You'll also be able to find information about other countries
		    that are involved in the conflict.
	      </p>
		  <div className="container">
		    <h2>Members</h2>
			  {members.map((member) => (
				<MemberCard key={member.name} member={member}/>
			  ))}
		  </div>
		  <TotalStats key={stats.issues} stats={stats}/>
		  <div className="datahere">
		    <h2>Data</h2>
			<p>Links</p>
			<p>desc</p>
		  </div>
		  <div className="toolshere">
		    <h2>Tools</h2>
			<p>List tools</p>
		  </div>
		  <h2>Links</h2>
		  <a href="https://gitlab.com/nguyjer/cs373-fall-2024-group-06" target="_blank" rel="noopener noreferrer">Gitlab Repository</a>
		  <p/>
		  <a href="https://group-06.postman.co/" target="_blank" rel="noopener noreferrer">Postman API</a>
	    </main>
	  </div>
    );
}
