import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSampleData } from './store/JobSlice/JobSlice';
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';

function App() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.job);

  const [searchTerm, setSearchTerm] = useState(''); // Initialize searchTerm with an empty string

  useEffect(() => {
    dispatch(fetchSampleData());
  }, [dispatch]);

  const filteredJobs = data
    ? data.jdList.filter((job) =>
        job.jobRole.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      <Navbar />
      <SearchBar setSearchTerm={setSearchTerm} />
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
