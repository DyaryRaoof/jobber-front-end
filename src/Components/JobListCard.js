const JobListCard = ({ job }) => {
  return (
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
        <button className="btn btn-primary m-1">CALL</button>
        <button className="btn btn-primary">MESSAGE</button>
      </div>
    </div>
  );
};

export default JobListCard;
