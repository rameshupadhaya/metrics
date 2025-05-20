import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import {
    PerfCard,
    PerfTitle,
    Metrics,
    MetricColumn,
    MetricLabel,
    MetricValue,
    MetricUnit,
    BarContainer,
    Bar,
    Improvement,
    ImprovementValue,
    ImprovementLabel,
    DeleteButton
} from '../styles/StyledComponents';

const PerformanceCard = ({ data, index, onRemove }) => {
    const { id, name, before, after, unit } = data;
    const cardRef = useRef(null);
    const barRef = useRef(null);

    const handleRemove = (e) => {
        e.stopPropagation();
        onRemove(id);
    };

    // Calculate improvement percentage
    const improvementPercent = ((before - after) / before * 100).toFixed(1);
    const isNegativeImprovement = after > before;

    useEffect(() => {
        // Add animation class after a delay based on index
        const card = cardRef.current;
        if (card) {
            setTimeout(() => {
                card.classList.add('active');
            }, index * 100);
        }

        // Initialize bar width animation
        setTimeout(() => {
            if (barRef.current) {
                barRef.current.style.width = `${(after / before) * 100}%`;
                // Update bar color if negative improvement
                if (isNegativeImprovement) {
                    barRef.current.style.backgroundColor = 'var(--danger, #ff3b30)';
                }
            }
        }, 300);
    }, [index]);

    return (
        <PerfCard ref={cardRef} className="fade-in">
            <DeleteButton className="delete-button" onClick={handleRemove}>×</DeleteButton>
            <PerfTitle>{name}</PerfTitle>
            <Metrics>
                <MetricColumn>
                    <MetricLabel>Before</MetricLabel>
                    <MetricValue>
                        {before}<MetricUnit>{unit}</MetricUnit>
                    </MetricValue>
                </MetricColumn>
                <MetricColumn>
                    <MetricLabel>After</MetricLabel>
                    <MetricValue>
                        {after}<MetricUnit>{unit}</MetricUnit>
                    </MetricValue>
                </MetricColumn>
            </Metrics>
            <BarContainer>
                <Bar ref={barRef} width="0%" />
            </BarContainer>
            <Improvement>
                <ImprovementValue negative={isNegativeImprovement}>
                    {isNegativeImprovement ? '↑' : '↓'} {Math.abs(improvementPercent)}%
                </ImprovementValue>
                <ImprovementLabel>
                    {isNegativeImprovement ? 'Slower response' : 'Faster response'}
                </ImprovementLabel>
            </Improvement>
        </PerfCard>
    );
};

export default PerformanceCard;