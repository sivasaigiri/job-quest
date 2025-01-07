import React from "react";
import "../styles/Joblist.css"

export default function Jobs() {
  const jobs = [
    {
      id: 1,
      title: "Intern",
      company: "Appit Software Solutions",
      rating: 4.0,
      reviews: 20,
      experience: "0 Yrs",
      salary: "₹ 50,000-1 Lacs PA",
      location: "Hyderabad",
      requirements: "Graduate/Post Graduate with training in AI, Data Science, or Machine Learning",
      skills: ["Data Science", "Artificial Intelligence", "Machine Learning", "Python"],
      date: "1 Day Ago",
    },
    {
      id: 2,
      title: "Python Developer Fresher",
      company: "Jobsmill",
      rating: null,
      reviews: null,
      experience: "0 Yrs",
      salary: "₹ 3-5 Lacs PA",
      location: "Hyderabad, Bangalore",
      requirements: "Experience in Python development | Develop and maintain Python applications",
      skills: ["Python", "Python Development", "Development"],
      date: "5 Days Ago",
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "TechWorks",
      rating: 4.5,
      reviews: 50,
      experience: "1-3 Yrs",
      salary: "₹ 8-12 Lacs PA",
      location: "Pune, Remote",
      requirements: "Experience in full-stack development with React.js and Node.js",
      skills: ["React.js", "Node.js", "Full-Stack", "JavaScript"],
      date: "2 Days Ago",
    },
    {
      id: 4,
      title: "Data Analyst",
      company: "Insight Solutions",
      rating: 4.2,
      reviews: 30,
      experience: "2-4 Yrs",
      salary: "₹ 6-9 Lacs PA",
      location: "Mumbai",
      requirements: "Proficiency in data analysis tools like Excel, SQL, and Tableau",
      skills: ["Excel", "SQL", "Tableau", "Data Analysis"],
      date: "3 Days Ago",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudMatrix",
      rating: 4.8,
      reviews: 15,
      experience: "3-5 Yrs",
      salary: "₹ 10-15 Lacs PA",
      location: "Chennai, Remote",
      requirements: "Hands-on experience with CI/CD pipelines and cloud platforms like AWS",
      skills: ["AWS", "CI/CD", "Docker", "Kubernetes"],
      date: "4 Days Ago",
    },
    {
      id: 6,
      title: "UI/UX Designer",
      company: "DesignFlow",
      rating: 4.3,
      reviews: 25,
      experience: "1-3 Yrs",
      salary: "₹ 4-6 Lacs PA",
      location: "Bangalore",
      requirements: "Strong portfolio showcasing UI/UX design skills",
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping"],
      date: "1 Week Ago",
    },
  ];

  return (
    <div className="jobs-container">
      {jobs.map((job) => (
        <div className="job-card" key={job.id}>
          <div className="job-header">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            {job.rating && (
              <span className="rating">
                ⭐ {job.rating} | {job.reviews} Reviews
              </span>
            )}
          </div>
          <div className="job-details">
            <div className="info">
              <span>📅 {job.experience}</span>
              <span>💸 {job.salary}</span>
              <span>📍 {job.location}</span>
            </div>
            <p className="requirements">{job.requirements}</p>
            <div className="skills">
              {job.skills.map((skill, index) => (
                <span key={index} className="skill">
                  {skill}
                </span>
              ))}
            </div>
            <p className="date">{job.date}</p>
          </div>
          <div className="job-actions">
            <button className="action-btn">Hide</button>
            <button className="action-btn">Save</button>
          </div>
        </div>
      ))}
    </div>
  );
}
