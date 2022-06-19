import DUYMMY_JOBS from '../DUMMY_DATA/jobs';
import './JobList.css';
import JobListCard from './JobListCard';

const JobListPage = () => {
  return (
    <div>
      <h1>Job List</h1>
      <div className="job-list-card-container">
        {DUYMMY_JOBS.map((job) => (
          <JobListCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobListPage;
