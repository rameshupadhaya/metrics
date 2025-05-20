import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import {
    StatsHighlight as StatsContainer,
    StatCard,
    StatNumber,
    StatLabel
} from '../styles/StyledComponents';
import { calculateSummaryStats } from '../utils/data';

const StatsHighlight = ({ performanceData }) => {
    const containerRef = useRef(null);
    const stats = calculateSummaryStats(performanceData);

    useEffect(() => {
        // Add animation class
        const container = containerRef.current;
        if (container) {
            setTimeout(() => {
                container.classList.add('active');
            }, 200);
        }
    }, []);

    return (
        <StatsContainer ref={containerRef} className="fade-in">
            <StatCard>
                <StatNumber>{stats.avgImprovement}%</StatNumber>
                <StatLabel>Average Improvement</StatLabel>
            </StatCard>

            <StatCard>
                <StatNumber>{stats.apiCount}</StatNumber>
                <StatLabel>Optimized APIs</StatLabel>
            </StatCard>

            <StatCard>
                <StatNumber>{stats.timeSavedStr}</StatNumber>
                <StatLabel>Time Saved</StatLabel>
            </StatCard>
        </StatsContainer>
    );
};

export default StatsHighlight;