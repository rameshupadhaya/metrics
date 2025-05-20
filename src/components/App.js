import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import GlobalStyle from '../styles/GlobalStyle';
import {
    Header,
    Headline,
    Subheadline,
    PerfGrid,
    GradientDivider,
    FloatingButton
} from '../styles/StyledComponents';
import StatsHighlight from './StatsHighlight';
import PerformanceCard from './PerformanceCard';
import Modal from './Modal';
import Footer from './Footer';
import { initialPerformanceData } from '../utils/data';

const App = () => {
    // State for performance data
    const [performanceData, setPerformanceData] = useState(initialPerformanceData);

    // State for modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle adding a new performance metric
    const handleAddMetric = (newMetric) => {
        setPerformanceData(prevData => [...prevData, newMetric]);
    };

    // Handle removing a performance metric
    const handleRemoveMetric = (id) => {
        setPerformanceData(prevData => prevData.filter(item => item.id !== id));
    };

    // Initialize intersection observer for fade-in animations
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all elements with the fade-in class
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Clean up
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <Fragment>
            <GlobalStyle />
            <div className="container">
                <Header className="fade-in">
                    <Headline>Performance Metrics</Headline>
                    <Subheadline>
                        Visualizing significant improvements in performance and efficiency across key operations.
                    </Subheadline>
                </Header>

                {/* <StatsHighlight performanceData={performanceData} /> */}

                <PerfGrid>
                    {performanceData.map((item, index) => (
                        <PerformanceCard
                            key={item.id}
                            data={item}
                            index={index}
                            onRemove={handleRemoveMetric}
                        />
                    ))}
                </PerfGrid>

                <GradientDivider />

                <FloatingButton onClick={() => setIsModalOpen(true)}>+</FloatingButton>

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddMetric}
                />
            </div>

            <Footer />
        </Fragment>
    );
};

export default App;