// pages/about.js
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useState } from "react";

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

	const [memberIndex, setmemberIndex] = useState(0);

	
    return (
	<div>
	  <Head>
	    <title>Palestine Watch</title>
	    <link rel="icon" href="/favicon.ico" />
	  </Head>

	  <main className={styles.mainContent}>
	    <h1 >About Page</h1>
	    <p>
	      This is the About page for Palestine Watch.
	    </p>
	  </main>
	</div>
    );
}
