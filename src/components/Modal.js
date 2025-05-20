import { h } from 'preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalTitle,
    CloseButton,
    Form,
    FormGroup,
    Label,
    InputWrapper,
    Input,
    Select,
    SubmitButton,
    UnitLabel,
    InputHint
} from '../styles/ModalStyles';

const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        before: '',
        after: '',
        unit: 'seconds'
    });

    // References to input elements for focus management
    const nameInputRef = useRef(null);
    const beforeInputRef = useRef(null);
    const afterInputRef = useRef(null);

    // Focus the name input when modal opens
    useEffect(() => {
        if (isOpen && nameInputRef.current) {
            setTimeout(() => {
                nameInputRef.current.focus();
            }, 100);
        }
    }, [isOpen]);

    // Handle input changes with proper validation for numbers
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'before' || name === 'after') {
            // Allow empty input or valid numbers (including decimals)
            if (value === '' || !isNaN(parseFloat(value))) {
                setFormData(prev => ({
                    ...prev,
                    [name]: value
                }));
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert string values to numbers with proper decimal handling
        const beforeValue = parseFloat(parseFloat(formData.before).toFixed(2));
        const afterValue = parseFloat(parseFloat(formData.after).toFixed(2));

        onSubmit({
            ...formData,
            before: beforeValue,
            after: afterValue,
            id: Date.now() // Use timestamp as unique ID
        });

        // Reset form
        setFormData({
            name: '',
            before: '',
            after: '',
            unit: 'seconds'
        });
        onClose();
    };

    // Don't render if not open
    if (!isOpen) return null;

    return (
        <ModalOverlay isOpen={isOpen} onClick={onClose}>
            <ModalContent
                isOpen={isOpen}
                onClick={e => e.stopPropagation()}
            >
                <ModalHeader>
                    <ModalTitle>Add Performance Metric</ModalTitle>
                    <CloseButton type="button" onClick={onClose}>&times;</CloseButton>
                </ModalHeader>

                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="name">API Name:</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. getUsers"
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="before">Before Time:</Label>
                        <Input
                            type="number"
                            id="before"
                            name="before"
                            value={formData.before}
                            onChange={handleChange}
                            step="any"
                            min="0"
                            placeholder="e.g. 5.2"
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="after">After Time:</Label>
                        <Input
                            type="number"
                            id="after"
                            name="after"
                            value={formData.after}
                            onChange={handleChange}
                            step="any"
                            min="0"
                            placeholder="e.g. 2.1"
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="unit">Time Unit:</Label>
                        <Select
                            id="unit"
                            name="unit"
                            value={formData.unit}
                            onChange={handleChange}
                        >
                            <option value="seconds">Seconds</option>
                            <option value="milliseconds">Milliseconds</option>
                        </Select>
                    </FormGroup>

                    <SubmitButton type="submit">Add Metric</SubmitButton>
                </Form>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;