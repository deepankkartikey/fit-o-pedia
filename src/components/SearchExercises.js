import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScollbar from './HorizontalScollbar';

const SearchExercises = () => {
	const [search, setSearch] = useState('');
	const [exercises, setExercises] = useState([]);
	const [bodyParts, setbodyParts] = useState([]);

	useEffect(() => {
		const fetchExercisesData = async () => {
			const bodyParts = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
				exerciseOptions
			);

			setbodyParts(['all', ...bodyParts]);
		};

		fetchExercisesData();
	}, []);

	const handleSearch = async () => {
		if (search) {
			const url = 'https://exercisedb.p.rapidapi.com/exercises';
			const exercisesData = await fetchData(url, exerciseOptions);
			const searchedExercises = exercisesData.filter(
				exercise =>
					exercise.name.toLowerCase().includes(search) ||
					exercise.target.toLowerCase().includes(search) ||
					exercise.equipment.toLowerCase().includes(search) ||
					exercise.bodypart.toLowerCase().includes(search)
			);
			setSearch('');
			setExercises(searchedExercises);
		}
	};

	return (
		<Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
			<Typography
				fontWeight={700}
				sx={{ fontSize: { lg: '44px', xs: '30px' } }}
				mb="50px"
				textAlign="center"
			>
				Awesome Exercises <br /> You Should Know
			</Typography>
			<Box position="relative" mb="72px">
				<TextField
					sx={{
						input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
						width: { lg: '800px', xs: '350px' },
						backgroundColor: '#fff 40px',
					}}
					height="76px"
					value={search}
					onChange={e => {
						setSearch(e.target.value.toLowerCase());
					}}
					placeholder="Search Exercises"
					type="text"
				/>
				<Button
					className="search-btn"
					sx={{
						bgcolor: '#ff2625',
						color: '#fff',
						textTransform: 'none',
						width: { lg: '175px', xs: '80px' },
						fontSize: { lg: '20px', xs: '14px' },
						height: '56px',
						position: 'absolute',
						right: '0',
					}}
					onClick={handleSearch}
				>
					Search
				</Button>
			</Box>
			<Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
				<HorizontalScollbar data={bodyParts} />
			</Box>
		</Stack>
	);
};

export default SearchExercises;
