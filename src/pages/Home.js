import { Box } from '@mui/material';
import React, { useState } from 'react';
import Banner from '../components/Banner';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
	return (
		<Box>
			<Banner />
			<SearchExercises />
			<Exercises />
		</Box>
	);
};

export default Home;
