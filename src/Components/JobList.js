import DUYMMY_JOBS from '../DUMMY_DATA/jobs';
import './JobList.css';

const JobList = () => {
  return (
    <div>
      <h1>Job List</h1>
      <div className="job-list-card-container">
        {DUYMMY_JOBS.map((job) => (
          <div key={job.id}>
            <div className="job-list-card">
              <h2>{job.title}</h2>
              <p>{job.description}</p>
              <p>{job.duration}</p>
              <p>{job.tags}</p>
              <p>{job.budget}</p>
              <p>{job.user.name}</p>
              <p>{job.status}</p>
              <p>{job.createdAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
