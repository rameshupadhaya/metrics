import styled from 'styled-components';

export const Header = styled.header`
  padding: 2rem 0;
  text-align: center;
`;

export const Headline = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  background: linear-gradient(90deg, #ffffff, #a0a0a0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Subheadline = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const StatsHighlight = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const StatCard = styled.div`
  text-align: center;
`;

export const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, var(--accent), #9b56ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const StatLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
`;

export const PerfGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
`;

export const PerfCard = styled.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.1);
    
    .delete-button {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(45, 119, 246, 0.1), transparent 70%);
    pointer-events: none;
  }
`;

export const PerfTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
`;

export const Metrics = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const MetricColumn = styled.div`
  flex: 1;
`;

export const MetricLabel = styled.div`
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const MetricValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const MetricUnit = styled.span`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-left: 2px;
`;

export const Improvement = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ImprovementValue = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props => props.negative ? 'var(--danger, #ff3b30)' : 'var(--success)'};
`;

export const ImprovementLabel = styled.div`
  font-size: 0.85rem;
  color: var(--text-secondary);
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transform: translateY(-5px);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  font-size: 16px;
  font-weight: 300;
  padding: 0;
  
  &:hover {
    background-color: rgba(255, 59, 48, 0.8);
    color: white;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--accent);
  }
`;

export const BarContainer = styled.div`
  height: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
`;

export const Bar = styled.div`
  height: 100%;
  background: linear-gradient(90deg, var(--accent), #9b56ff);
  border-radius: 3px;
  width: ${props => props.width || '0%'};
  transition: width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const GradientDivider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  margin: 4rem 0;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 2rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: auto;
`;

export const FloatingButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), #9b56ff);
  color: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(45, 119, 246, 0.5);
  transition: var(--transition);
  z-index: 10;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(45, 119, 246, 0.6);
  }
  
  &:active {
    transform: translateY(0);
  }
`;
