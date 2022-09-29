import React from 'react';

import styles from './styles.module.scss';

interface SidebarItemProps {
	isCompleted?: boolean;
	isActive?: boolean;
	isSaved?: boolean;
	title?: string;
	index?: number;
	time?: string;
	isLast?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
	isCompleted,
	isSaved,
	isActive,
	title,
	index,
	time,
	isLast,
}) => {
	return (
		<div className={styles.root}>
			<div className={styles.status}>
				<div
					className={`${styles.circle} ${isCompleted && styles.completedBg}`}
				></div>
				{!isLast && (
					<div
						className={`${styles.line} ${isCompleted && styles.completedBg}`}
					/>
				)}
			</div>
			<div className={styles.info}>
				<div className={styles.header}>
					<div className={styles.label}>Unit</div>
					{isSaved && <div className={styles.saved}></div>}
					<p className={styles.completed}>
						{isCompleted ? 'Completed' : 'InCompleted'}
					</p>
				</div>
				<div className={styles.main}>
					<h3 className={`${styles.title} ${isActive && styles.activeTitle}`}>
						<span
							className={`${styles.index} ${isActive && styles.activeTitle}`}
						>
							{index}.
						</span>
						{title}
					</h3>
					<p className={styles.time}>{time}</p>
				</div>
			</div>
		</div>
	);
};

export default SidebarItem;
