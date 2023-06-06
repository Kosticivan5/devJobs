import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import CompanyButton from "./CompanyButton";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [jobIndex, setJobIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setJobs(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="job-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <CompanyButton
        jobs={jobs}
        jobIndex={jobIndex}
        setJobIndex={setJobIndex}
      />
      <JobInfo jobs={jobs} jobIndex={jobIndex} />
    </section>
  );
};
export default App;
