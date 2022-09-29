import React from 'react';
import SidebarItem from './sidebar-item';

import styles from './styles.module.scss';

const Sidebar = () => {
	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<h2 className={styles.title}>Blockchain foundations</h2>
				<div className={styles.progress}>
					<div className={styles.progressValue} />
				</div>
			</div>
			<div className={styles.list}>
				{/* TODO move to constant */}
				<SidebarItem
					index={1}
					time="12:33"
					title="Blockchain foundations"
					isCompleted
				/>
				<SidebarItem
					index={2}
					time="12:33"
					title="The technical side"
					isCompleted
				/>
				<SidebarItem
					index={3}
					time="12:33"
					title="Blockchain in use"
					isCompleted
				/>
				<SidebarItem
					index={4}
					time="12:33"
					title="Blockchain foundations"
					isActive
				/>
				<SidebarItem index={5} time="12:33" title="Blockchain foundations" />
				<SidebarItem index={6} time="12:33" title="Next steps" isLast />
			</div>
		</div>
	);
};

export default Sidebar;
