import React from 'react';
import PhotoGrid from './PhotoGrid';

interface CustomerDetailProps {
    customer: {
        name: string;
        title: string;
        address: string;
    } | null;
}

const CustomerDetail: React.FC<CustomerDetailProps> = ({ customer }) => {
    if (!customer) {
        return <div className="w-7/12 p-4 text-center">Select a customer to view details</div>;
    }

    return (
            <div className="customer-detail-container w-7/12 p-4 text-center">
            <h2 className="text-2xl font-semibold mb-4">Customer Details</h2>
            <h3 className="text-xl font-medium mb-2"><strong>Name:</strong> {customer.name}</h3>
            <p className="text-lg mb-2"><strong>Title:</strong> {customer.title}</p>
            <p className="text-base mb-4"><strong>Address:</strong> {customer.address}</p>
            <PhotoGrid customerId={1} />
        </div>
    );
};

export default CustomerDetail;
