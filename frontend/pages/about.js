// pages/about.js
import Head from "next/head";
import MemberCard from "../components/MemberCard.js";
import { useState, useEffect } from "react";

function TotalStats({ stats }) {
  return (
    <section>
      <h2 className="text-center pt-5">Overall Stats</h2>
      <div className="text-center">
      <p>Total No. of Issues: {stats.issues}<br></br>
      Total No. of Commits: {stats.commits}<br></br>
      Total No. of Unit Tests: {stats.utests}</p>
      </div>
    </section>
  );
}

export default function About() {
  const initMembers = [
    {
      name: "Aryan Samal",
      gitid: ["Aryan Samal"],
      photo: "/headshots/as.png",
      bio: "My name is Aryan Samal, I am a junior CS student. I like kayaking, cliff jumping, and trying new food.",
      responsibilities:
        "News page & instances, Postman documentation, technical report, conflict carousel",
      commits: 0,
      issues: 0,
      utests: 0,
      role: "Backend",
    },
    {
      name: "Jeremy Nguyen",
      gitid: ["nguyjer"],
      photo: "/headshots/jn.png",
      bio: "Hi, my name is Jeremy Nguyen, and I am currently a junior at UT Austin studying computer science. I am interested in \
            fashion, climbing, basketball, and modeling.",
      responsibilities:
        "Support groups model & instances, Nav bar, hosting on AWS and connecting custom domain, and some style",
      commits: 0,
      issues: 0,
      utests: 0,
      role: "Full Stack",
    },
    {
      name: "Kenny Nguyen",
      gitid: ["Kenny Nguyen"],
      photo: "/headshots/kn.png",
      bio: "Hello World! My name is Kenny Nguyen, and I am a junior at UT Austin studying computer science. I have a variety of hobbies \
            including playing volleyball, bouldering, and the occasional game of Hearthstone.",
      responsibilities:
        "Worked on API implementation for countries page, and worked on AWS deployment.",
      commits: 0,
      issues: 0,
      utests: 0,
      role: "Frontend",
    },
    {
      name: "Rohan Damani",
      gitid: ["Rohan Damani"],
      photo: "/headshots/rd.png",
      bio: "My name is Rohan Damani, and I'm a junior at UT Austin pursuing a degree in computer science and mathematics. I enjoy \
            playing poker, tennis, and hanging out with friends.",
      responsibilities:
        "Countries page & instances, Linking instances to other model instances",
      commits: 0,
      issues: 0,
      utests: 0,
      role: "Backend",
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
      role: "Full Stack",
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
        const response = await fetch(
          `https://gitlab.com/api/v4/projects/${id}/issues?per_page=100&page=${pn}`,
          {
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
        console.log(issues);
        if (issues.length === 100) {
          pn += 1;
        } else {
          more = false;
        }
        for (let issue of issues) {
          if (issue["author"]["name"] === member.gitid[0]) {
            totalIssues += 1;
          } else {
            console.log(issue["author"]["name"]);
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

      <main>
        <h1 className="text-center">Our Mission</h1>
          <p className="px-5 pt-3 text-center">
            Welcome to Palestine Watch! The purpose of this website is to inform
            you about the ongoing conflict between Israel and Palestine, and, if
            you'd like, how you can help! Here, you'll be able to find different
            news sources about the latest events in the conflict, as well as
            support groups that you can donate to to help those in need. You'll
            also be able to find information about other countries that are
            involved in the conflict.
          </p>

        <h2 className="text-center py-3">Members</h2>
          <div className="row justify-content-center">
            {members.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>

        <TotalStats key={stats.issues} stats={stats} />
        <h2 className="text-center pt-5"> Sources </h2>
          <p className="text-center">
            https://www.cfr.org/global-conflict-tracker/conflict/israeli-palestinian-conflict{" "}
            <br></br>
            https://www.un.org/unispal/history/ <br></br>
            https://www.britannica.com/place/Palestine <br></br>
            Palestine Causality Toll: 42,385 Palestinians Killed
          </p>
        <div className="datahere text-center">
          <h2 className="pt-5">Data</h2>
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
          <a href="https://restcountries.com/" target="_blank" rel="noopener noreferrer">
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
        <div className="container my-5">
  <h2 className="text-center pt-5 pb-3">Tools</h2>
  <div className="row">
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h3 className="card-title text-center">Docker</h3>
          <p className="card-text text-center">
            We used Docker to ensure a consistent environment across testing,
            development, and production. This made it much easier for us to
            deploy our website without worrying about different machine
            configurations.
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h3 className="card-title text-center">AWS</h3>
          <p className="card-text text-center">
            We used AWS to host our website infrastructure.
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h3 className="card-title text-center">Bootstrap</h3>
          <p className="card-text text-center">
            We used Bootstrap as a CSS framework, allowing us to streamline our
            front-end development.
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h3 className="card-title text-center">Axios</h3>
          <p className="card-text text-center">
            We used Axios as a method of sending HTTP requests in order to fetch
            data from our APIs.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    <h2 className="text-center">Links</h2>
    <div className="text-center link-primary pb-5">
      <a
        href="https://gitlab.com/nguyjer/cs373-fall-2024-group-06"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gitlab Repository
      </a>
      <br></br>
      <a
        href="https://documenter.getpostman.com/view/38731121/2sAXxLBDwn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Postman API
      </a>
    </div>
      </main>
    </div>
  );
}
