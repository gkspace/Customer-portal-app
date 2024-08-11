import React from 'react';
import CustomerCard from './CustomerCard';

interface Customer {
    id: number;
    name: string;
    title: string;
}

interface CustomerListProps {
    customers: Customer[];
    selectedCustomerId: number | null;
    onSelectCustomer: (customerId: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomerId, onSelectCustomer }) => {
    return (
        <div
            className="customer-list overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-md p-4 h-screen"
        >
            <h2 className="text-lg font-semibold mb-4">Customer List</h2>
            {customers.length === 0 ? (
                <p className="text-gray-500">No customers available</p>
            ) : (
                customers.map((customer) => (
                    <CustomerCard
                        key={customer.id}
                        name={customer.name}
                        title={customer.title}
                        isSelected={selectedCustomerId === customer.id}
                        onClick={() => onSelectCustomer(customer.id)}
                    />
                ))
            )}
        </div>
    );
};

export default CustomerList;
