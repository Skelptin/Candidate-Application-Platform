import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSampleData } from '../store/JobSlice/JobSlice';
import "./SearchBar.css"

const SearchBar = () => {

    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((state) => state.job);

    useEffect(() => {
        dispatch(fetchSampleData());
    }, [dispatch]);



    return (
        <div className='container'>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                renderInput={(params) => (
                    <TextField
                        {...params}
                        sx={{
                            width: '10rem',
                            borderColor: 'red'
                        }}
                        label="Roles "
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            style: { color: 'blue', borderColor: 'green' },
                        }}
                        InputLabelProps={{
                            ...params.InputLabelProps,
                            style: { color: 'grey' },
                        }}
                    />
                )}
            />

            <Autocomplete
                disablePortal
                id="combo-box-demo"
                renderInput={(params) => (
                    <TextField
                        {...params}
                        sx={{
                            width: '15rem',
                        }}
                        label="Number Of Employees"
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            style: { color: 'blue', borderColor: 'green' },
                        }}
                        InputLabelProps={{
                            ...params.InputLabelProps,
                            style: { color: 'grey' },
                        }}
                    />
                )}
            />

            <Autocomplete
                disablePortal
                id="combo-box-demo"
                renderInput={(params) => (
                    <TextField
                        {...params}
                        sx={{
                            width: '10rem',
                        }}
                        label="Experience "
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            style: { color: 'blue', borderColor: 'green' },
                        }}
                        InputLabelProps={{
                            ...params.InputLabelProps,
                            style: { color: 'grey' },
                        }}
                    />
                )}
            />

            <Autocomplete
                disablePortal
                id="combo-box-demo"
                renderInput={(params) => (
                    <TextField
                        {...params}
                        sx={{
                            width: '10rem',
                        }}
                        label="Remote"
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            style: { color: 'blue', borderColor: 'green' },
                        }}
                        InputLabelProps={{
                            ...params.InputLabelProps,
                            style: { color: 'grey' },
                        }}
                    />
                )}
            />

            <Autocomplete

                disablePortal
                id="combo-box-demo"
                renderInput={(params) => (
                    <TextField
                        {...params}
                        sx={{
                            width: '20rem',
                        }}
                        label="Minimum Base Pay Salary"
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            style: { color: 'blue', borderColor: 'green' },
                        }}
                        InputLabelProps={{
                            ...params.InputLabelProps,
                            style: { color: 'grey' },
                        }}
                    />
                )}
            />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                renderInput={(params) => (
                    <TextField
                        {...params}
                        sx={{

                            width: '15rem',
                        }}
                        label="Search Company Name"
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            style: { color: 'blue', borderColor: 'grey' },
                        }}
                        InputLabelProps={{
                            ...params.InputLabelProps,
                            style: { color: 'grey' },
                        }}
                    />
                )}
            />
        </div>
    );
};

export default SearchBar;
