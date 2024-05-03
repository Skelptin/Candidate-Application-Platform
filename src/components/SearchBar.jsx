import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from 'react-redux';
import "./SearchBar.css"

const SearchBar = ({ setSearchTerm, setMinSalaryFilter, setMinExperienceFilter }) => {

    const { loading, error, data } = useSelector((state) => state.job);

    const [jobRoles, setJobRoles] = useState([]);
    const [locations, setLocations] = useState([]);
    const [minSalary, setMinSalary] = useState([]);
    const [minExperience, setMinExperience] = useState([]);
    const [remoteOptions, setRemoteOptions] = useState(['Remote', 'On-Site']);

    useEffect(() => {

        //Getting unique data from the json to show option in the Text Field
        if (data) {
            const uniqueRoles = [...new Set(data.jdList.map((job) => job.jobRole))];
            setJobRoles(uniqueRoles);

            const uniqueLocations = [...new Set(data.jdList.map((job) => job.location))];
            setLocations(uniqueLocations);

            const validMinSalaries = data.jdList.map((job) => job.minJdSalary).filter((salary) => salary !== null);
            const uniqueMinSalaries = [...new Set(validMinSalaries)];
            setMinSalary(uniqueMinSalaries);

            const uniqueMinExperiences = [...new Set(data.jdList.map((job) => job.minExp).filter(exp => exp !== null))];
            setMinExperience(uniqueMinExperiences);
        }
    }, [data]);

    return (
        <div className='container'>

            <Autocomplete
                disablePortal
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
                options={minSalary}
                getOptionLabel={(option) => (option !== null ? String(option) : '')}
                onChange={(event, value) => setMinSalaryFilter(value || null)}
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
                options={minExperience}
                getOptionLabel={(option) => (option !== null ? String(option) : '')}
                onChange={(event, value) => setMinExperienceFilter(value !== null ? value : null)}
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
