import React from 'react';

interface CustomerCardProps {
    name: string;
    title: string;
    isSelected: boolean;
    onClick: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ name, title, isSelected, onClick }) => {
    return (
        <div
            className={`p-4 w1 border cursor-pointer ${isSelected ? 'bg-blue-300' : 'bg-white'}`}
            onClick={onClick}
        >
            <h3>{name}</h3>
            <p>{title}</p>
        </div>
    );
};

export default React.memo(CustomerCard);
