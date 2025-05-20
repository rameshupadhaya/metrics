import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.4s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ModalContent = styled.div`
  background-color: var(--card-bg);
  border-radius: 20px;
  padding: 2rem;
  width: 420px;
  max-width: 90%;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  position: relative;
  transform: ${props => props.isOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)'};
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid rgba(255, 255, 255, 0.08);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
    pointer-events: none;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`;

export const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: var(--text-secondary);
  font-size: 1.25rem;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: var(--text-primary);
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:hover {
    color: var(--text-primary);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  position: relative;
`;

export const Label = styled.label`
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  
  &:focus-within {
    .focus-ring {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const FocusRing = styled.div`
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  border-radius: 15px;
  box-shadow: 0 0 0 3px rgba(45, 119, 246, 0.25);
  pointer-events: none;
  opacity: 0;
  transform: scale(0.98);
  transition: opacity 0.2s ease, transform 0.2s ease;
`;

export const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 1rem;
  padding: 0.85rem 1rem;
  transition: all 0.25s ease;
  font-family: inherit;
  width: 100%;
  -webkit-appearance: none;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  letter-spacing: -0.01em;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    background-color: rgba(255, 255, 255, 0.06);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
  
  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Select = styled.select`
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 1rem;
  padding: 0.85rem 1rem;
  transition: all 0.25s ease;
  font-family: inherit;
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    background-color: rgba(255, 255, 255, 0.06);
    box-shadow: 0 0 0 3px rgba(45, 119, 246, 0.2), inset 0 1px 2px rgba(0, 0, 0, 0.05);
  }
`;

export const InputIcon = styled.span`
  position: absolute;
  right: 1rem;
  color: var(--text-secondary);
  pointer-events: none;
`;

export const UnitLabel = styled.span`
  position: absolute;
  right: 1rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  pointer-events: none;
`;

export const InputHint = styled.div`
  color: var(--text-secondary);
  font-size: 0.75rem;
  margin-top: 0.25rem;
  opacity: 0.8;
`;

export const ErrorMessage = styled.div`
  color: #ff3b30;
  font-size: 0.75rem;
  margin-top: 0.3rem;
  font-weight: 500;
`;

export const SubmitButton = styled.button`
  background: linear-gradient(90deg, var(--accent), #9b56ff);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 1.5rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(45, 119, 246, 0.3);
    
    &::before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 8px rgba(45, 119, 246, 0.2);
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(45, 119, 246, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
