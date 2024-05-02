import React from 'react';
import { useMutable } from 'react-server-dom';

const PassportPage: React.FC = () => {
    const passportData = useMutable({
        productName: '',
        manufacturer: '',
        country: '',
        expirationDate: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        passportData[name] = value;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // TODO: Add logic to handle form submission
        console.log(passportData);
    };

    return (
        <div>
            <h1>Create Product Passport</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Product Name:
                    <input
                        type="text"
                        name="productName"
                        value={passportData.productName}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Manufacturer:
                    <input
                        type="text"
                        name="manufacturer"
                        value={passportData.manufacturer}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Country:
                    <input
                        type="text"
                        name="country"
                        value={passportData.country}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Expiration Date:
                    <input
                        type="text"
                        name="expirationDate"
                        value={passportData.expirationDate}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button type="submit">Create Passport</button>
            </form>
        </div>
    );
};

export default PassportPage;
