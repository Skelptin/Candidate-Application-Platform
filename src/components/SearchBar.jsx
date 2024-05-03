import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSampleData } from '../store/JobSlice/JobSlice';
import "./SearchBar.css";

const SearchBar = ({ setSearchTerm }) => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.job);

  const [jobRoles, setJobRoles] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [locations, setLocations] = useState([]);
  const [minSalary, setMinSalary] = useState([]);
  const [minExperience, setMinExperience] = useState([]);
  const [techStack, setTechStack] = useState([]);
  const [remoteOptions, setRemoteOptions] = useState(['Remote', 'On-Site']);

  useEffect(() => {
    dispatch(fetchSampleData());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      const uniqueRoles = [...new Set(data.jdList.map((job) => job.jobRole))];
      setJobRoles(uniqueRoles);

      const uniqueCompanies = [...new Set(data.jdList.map((job) => job.companyName))];
      setCompanies(uniqueCompanies);

      const uniqueLocations = [...new Set(data.jdList.map((job) => job.location))];
      setLocations(uniqueLocations);

      const uniqueMinSalaries = [...new Set(data.jdList.map((job) => job.minJdSalary))];
      setMinSalary(uniqueMinSalaries);

      const uniqueMinExperiences = [...new Set(data.jdList.map((job) => job.minExp))];
      setMinExperience(uniqueMinExperiences);

      const uniqueTechStacks = [...new Set(data.jdList.map((job) => job.techStack))];
      setTechStack(uniqueTechStacks);
    }
  }, [data]);

  return (
    <div className='container'>
      <Autocomplete
        disablePortal
        id="job-role-autocomplete"
        options={jobRoles}
        onChange={(event, value) => setSearchTerm(value || '')}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ width: '15rem' }}
            label="Roles"
            variant="outlined"
            InputProps={{ ...params.InputProps, style: { color: 'blue' } }}
            InputLabelProps={{ style: { color: 'grey' } }}
          />
        )}
      />

      <Autocomplete
        disablePortal
        id="company-name-autocomplete"
        options={companies}
        onChange={(event, value) => setSearchTerm(value || '')}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ width: '15rem' }}
            label="Company Name"
            variant="outlined"
            InputProps={{ ...params.InputProps, style: { color: 'blue' } }}
            InputLabelProps={{ style: { color: 'grey' } }}
          />
        )}
      />

      <Autocomplete
        disablePortal
        id="location-autocomplete"
        options={locations}
        onChange={(event, value) => setSearchTerm(value || '')}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ width: '15rem' }}
            label="Location"
            variant="outlined"
            InputProps={{ ...params.InputProps, style: { color: 'blue' } }}
            InputLabelProps={{ style: { color: 'grey' } }}
          />
        )}
      />

      <Autocomplete
        disablePortal
        id="min-salary-autocomplete"
        options={minSalary}
        onChange={(event, value) => setSearchTerm(value || '')}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ width: '15rem' }}
            label="Minimum Base Pay Salary"
            variant="outlined"
            InputProps={{ ...params.InputProps, style: { color: 'blue' } }}
            InputLabelProps={{ style: { color: 'grey' } }}
          />
        )}
      />

      <Autocomplete
        disablePortal
        id="min-experience-autocomplete"
        options={minExperience}
        onChange={(event, value) => setSearchTerm(value || '')}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ width: '15rem' }}
            label="Minimum Experience"
            variant="outlined"
            InputProps={{ ...params.InputProps, style: { color: 'blue' } }}
            InputLabelProps={{ style: { color: 'grey' } }}
          />
        )}
      />

      <Autocomplete
        disablePortal
        id="tech-stack-autocomplete"
        options={techStack}
        onChange={(event, value) => setSearchTerm(value || '')}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ width: '15rem' }}
            label="Tech Stack"
            variant="outlined"
            InputProps={{ ...params.InputProps, style: { color: 'blue' } }}
            InputLabelProps={{ style: { color: 'grey' } }}
          />
        )}
      />

      <Autocomplete
        disablePortal
        id="remote-autocomplete"
        options={remoteOptions}
        onChange={(event, value) => setSearchTerm(value || '')}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ width: '15rem' }}
            label="Remote/On-Site"
            variant="outlined"
            InputProps={{ ...params.InputProps, style: { color: 'blue' } }}
            InputLabelProps={{ style: { color: 'grey' } }}
          />
        )}
      />
    </div>
  );
};

export default SearchBar;
