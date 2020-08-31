import React from 'react';
import SummaryCard from '../components/SummaryCard';
import styles from '../styles/home.module.css';

const Home = () => {
    return (
        <div className={styles.container} >
            <SummaryCard />
        </div>
    );
};

export default Home;
