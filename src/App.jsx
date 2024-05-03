import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSampleData } from './store/JobSlice/JobSlice';
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';

function App() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.job);

  const [searchTerm, setSearchTerm] = useState('');
  const [minSalaryFilter, setMinSalaryFilter] = useState(null);
  const [minExperienceFilter, setMinExperienceFilter] = useState(null);

  useEffect(() => {
    dispatch(fetchSampleData());
  }, [dispatch]);

  const filteredJobs = data
    ? data.jdList.filter((job) => {
      const matchesSearchTerm =
        job.jobRole.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesMinSalary = !minSalaryFilter || job.minJdSalary >= minSalaryFilter;
      const matchesMinExperience = !minExperienceFilter || job.minExp >= minExperienceFilter;

      return matchesSearchTerm && matchesMinSalary && matchesMinExperience;
    })
    : [];

  return (
    <>
      <SearchBar
        setSearchTerm={setSearchTerm}
        setMinSalaryFilter={setMinSalaryFilter}
        setMinExperienceFilter={setMinExperienceFilter}
      />

      <div className="card-container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <Cards key={job.jdUid} job={job} />)
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </>
  );
}

export default App;
