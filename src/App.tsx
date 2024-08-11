import React, { useState } from 'react';
import CustomerDetail from './components/CustomerDetail';
import CustomerList from './components/CustomerList';
import './index.css';

const customers = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `Customer ${i + 1}`,
    title: `Lorem Ipsum Dolor`,
    address: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula massa nec mauris sodales, sed dictum enim interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula massa nec mauris sodales, sed dictum enim interdum. Phasellus et nisi nec leo bibendum pharetra. Aenean euismod, nisl id interdum efficitur, sapien eros varius justo, id venenatis augue risus at ipsum. In hac habitasse platea dictumst. Curabitur eu risus quis turpis fermentum ultricies${i + 1}`,
    contact_details : `Phone: 123-456-7890, Email: customer${i +1}@gmail.com`
  }));

const App: React.FC = () => {
    const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

    const selectedCustomer = customers.find(customer => customer.id === selectedCustomerId) || null;

    return (
        <div className="flex h-screen">
            <CustomerList
                customers={customers}
                selectedCustomerId={selectedCustomerId}
                onSelectCustomer={setSelectedCustomerId}
            />
            <CustomerDetail customer={selectedCustomer} />
        </div>
    );
};

export default App;
