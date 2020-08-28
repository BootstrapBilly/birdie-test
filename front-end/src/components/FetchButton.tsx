import * as React from 'react';

interface FetchButtonInputProps {

    fetchRecords(id: String): void;

}

export const FetchButton: React.FC<FetchButtonInputProps> = ({ fetchRecords }) => {

    const buttonClick = () => {

        fetchRecords('df50cac5-293c-490d-a06c-ee26796f850d');
    };

    return (
        <div>
            <button onClick={buttonClick}>Make call</button>
        </div>
    );
    
};
