import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSampleData } from './store/JobSlice/JobSlice';
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';

function App() {

  const dispatch = useDispatch();

  const { loading, error, data } = useSelector((state) => state.job);

  console.log('card', data)

  useEffect(() => {
    dispatch(fetchSampleData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <SearchBar />


      <div className="card-container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : data ? (
          data.jdList.map((job) => (
            <Cards
              key={job.jdUid}
              job={job}
            />
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </>
  );
}

export default App;
