// pages/about.js
import styles from "../styles/Home.module.css";
import Head from "next/head";
import MemberCard from "../components/MemberCard.js";


export default function About() {

    const members = [
	{
	    name: "Aryan Samal",
		gitid: "aryan.samal",
	    photo: "",
	    bio: "Aryan bio",
	    responsibilities: "Aryan responsibilities",
	    commits: "Aryan commits",
	    issues: "issues",
	    utests: "unit tests"
	},
	{
	     name: "Jeremy Nguyen",
		 gitid: "nguyjer",
	     photo: "",
		 bio: "Jeremy bio",
		 responsibilities: "Jeremy responsibilities",
		 commits: "Jeremy commits",
		 issues: "issues",
		 utests: "unit tests"
	},
	{
	     name: "Kenny Nguyen",
		 gitid: "kenken17621",
	     photo: "",
		 bio: "Kenny bio",
		 responsibilities: "Kenny responsibilities",
		 commits: "Kenny commits",
		 issues: "issues",
	     utests: "unit tests"
	},
	{
	     name: "Rohan Damani",
		 gitid: "rdamani1",
	     photo: "",
	     bio: "Rohan bio",
	     responsibilities: "Rohan responsibilities",
	     commits: "Rohan commits",
	     issues: "issues",
	     utests: "unit tests"
	},
	{
	     name: "Will Matherne",
		 gitid: "wcm4284",
	     photo: "",
	     bio: "Will bio",
	     responsibilities: "Will responsibilities",
	     commits: "Will commits",
	     issues: "issues",
	     utests: "unit tests"
	}];


	const apiKey = 'glpat-dFrzisSrHFEZuhewUGLK';

	const getBranches = async () => 
	{
		const response = await fetch('https://gitlab.com/api/v4/projects/61909583/repository/branches', {
			headers: {
				'PRIVATE-TOKEN': `${apiKey}`,
			},
		});

		return await response.json();
	};
	
	getBranches().then(branches => {
		for (let branch of branches) {
			console.log(branch.name);
		}
	});


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
			{members.map((member) => (
				<MemberCard key={member.name} member={member}/>
			))}
		</div>
	  </main>
	</div>
    );
}
