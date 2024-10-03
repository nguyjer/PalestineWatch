// pages/about.js
import styles from "../styles/ModelPage.module.css";
import Head from "next/head";
import MemberCard from "../components/MemberCard.js";
import { useState, useEffect } from "react";

function TotalStats({ stats }) {
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
      gitid: ["Aryan Samal"],
      photo: "/headshots/as.png",
      bio: "Aryan bio",
      responsibilities: "News page & instances",
      commits: 0,
      issues: 0,
      utests: 0,
    },
    {
      name: "Jeremy Nguyen",
      gitid: ["nguyjer"],
      photo: "/headshots/jn.png",
      bio: "Jeremy bio",
      responsibilities:
        "Initial support group model setup, Nav bar, hosting on AWS",
      commits: 0,
      issues: 0,
      utests: 0,
    },
    {
      name: "Kenny Nguyen",
      gitid: ["Kenny Nguyen"],
      photo: "/headshots/kn.png",
      bio: "Kenny bio",
      responsibilities: "Kenny responsibilities",
      commits: 0,
      issues: 0,
      utests: 0,
    },
    {
      name: "Rohan Damani",
      gitid: ["Rohan Damani"],
      photo: "/headshots/rd.png",
      bio: "Rohan bio",
      responsibilities: "Countries page & instances",
      commits: 0,
      issues: 0,
      utests: 0,
    },
    {
      name: "Will Matherne",
      gitid: ["Will Matherne", "wcm4284"],
      photo: "/headshots/wm.png",
      bio: "My name is Will Matherne, and I'm a junior computer science student. I like playing chess, soccer, and bouldering.",
      responsibilities: "About page",
      commits: 0,
      issues: 0,
      utests: 0,
    },
  ];

  const apiKey = "glpat-dFrzisSrHFEZuhewUGLK";
  const id = "61909583";

  const [members, updateMembers] = useState(initMembers);
  const [stats, setStats] = useState({
    issues: 0,
    commits: 0,
    utests: 0,
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

      setStats({
        issues: totalIssues,
        commits: totalCommits,
        utests: totalUTests,
      });
    }
  }, [members]);

  const getIssues = async (member) => {
    try {
		let totalIssues = 0;
		let more = true;
		let pn = 1;

		while (more) {

			const response = await fetch(`https://gitlab.com/api/v4/projects/${id}/issues?per_page=100&page=${pn}`,	{
					headers: {
						"PRIVATE-TOKEN": `${apiKey}`,
					},
				}
			);

			if (!response.ok) {
				member.issues = "Error fetching issues";
				throw new Error(`Error: ${response.status} ${response.statusText}`);
			}

			const issues = await response.json();
			if (issues.length === 100) {
				pn += 1;
			} else {
				more = false;
			}
			for (let issue of issues) {
				if (issue['author']['name'] === member.gitid[0]) {
					totalIssues += 1;
				} else {
					console.log(issue['author']['name']);
				}
			}
		}
		return totalIssues;
    } catch (error) {
      console.error(`Error fetching issues for ${member.name}:`, error);
      return "Error fetching issues";
    }
  };

  const getCommits = async (member) => {
    try {
		let totalCommits = 0;
        for (let gid of member.gitid) {
            let more = true;
            let pn = 1;

            while (more) {
      				const response = await fetch(
				`https://gitlab.com/api/v4/projects/${id}/repository/commits?per_page=100&page=${pn}&author=${gid}&all=true`,
				{
					headers: {
						"PRIVATE-TOKEN": `${apiKey}`,
					},
				}
				);

				if (!response.ok) {
					console.error(`Error: ${response.status} ${response.statusText}`);
					return totalCommits;
				}

				const data = await response.json();
				totalCommits += data.length;
				if (data.length === 100) {
					pn += 1;
				} else {
					more = false;
				}
			}
		}
     	return totalCommits;
    } catch (error) {
      console.error("Error fetching issues");
      return totalCommits;
    }
  };

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
          Welcome to Palestine Watch! The purpose of this website is to inform
          you about the ongoing conflict between Israel and Palestine, and, if
          you'd like, how you can help! Here, you'll be able to find different
          news sources about the latest events in the conflict, as well as
          support groups that you can donate to to help those in need. You'll
          also be able to find information about other countries that are
          involved in the conflict.
        </p>
        <div className="container">
          <h2>Members</h2>
          {members.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
        <TotalStats key={stats.issues} stats={stats} />
        <div className="datahere">
          <h2>Data</h2>
          <a
            href="https://uscpr.org/connect-with-a-local-group/"
            target="_blank"
            rel="noopener noreferrer"
          >
            US Campaign for Palestinian Rights
          </a>
          <p>
            We used an API from this website to get information on our support
            group instances.
          </p>
          <a href="restcountries.com" target="_blank" rel="noopener noreferrer">
            Rest Countries
          </a>
          <p>We used this API to get information on our country instances.</p>
          <a
            href="https://newsdata.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            News Data
          </a>
          <p>
            We used this API to get information on different news sources and
            articles
          </p>
        </div>
        <div className="toolshere">
          <h2>Tools</h2>
          <h4>Docker</h4>
          <p>
            We used Docker to ensure a consistent environment across testing,
            development, and production. This made it much easier for us to
            deploy our website without worrying about different machine
            configurations.
          </p>
          <h4>AWS</h4>
          <p>We used AWS to host our website infrastructure.</p>
          <h4>Bootstrap</h4>
          <p>
            We used Bootstrap as a CSS framework, allowing us to streamline our
            front-end development.
          </p>
          <h4>Axios</h4>
          <p>
            We used Axios as a method of sending HTTP requests in order to fetch
            data from our APIs.
          </p>
        </div>
        <h2>Links</h2>
        <a
          href="https://gitlab.com/nguyjer/cs373-fall-2024-group-06"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gitlab Repository
        </a>
        <p />
        <a
          href="https://group-06.postman.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Postman API
        </a>
      </main>
    </div>
  );
}
