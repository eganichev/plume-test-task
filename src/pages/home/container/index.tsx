import React from 'react';
import Sidebar from 'shared/ui/sidebar';

import styles from './styles.module.scss';

const Home = () => {
	return (
		<div className={styles.root}>
			<Sidebar />
		</div>
	);
};

export default Home;
