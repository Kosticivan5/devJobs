const CompanyButton = ({ jobs, jobIndex, setJobIndex }) => {
  return (
    <div className="btn-container">
      {jobs.map(({ company, id }, index) => {
        return (
          <button
            key={id}
            className={jobIndex === index ? "job-btn active-btn" : "job-btn "}
            onClick={() => setJobIndex(index)}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};
export default CompanyButton;
