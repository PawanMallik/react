import React from 'react'

const Array = () => {
    const people = [
        {
            id: 1,
            name: "Aarav Mehta",
            email: "aarav.mehta@example.com",
            phone: "9876543210",
            address: "123 MG Road, Mumbai, Maharashtra"
        },
        {
            id: 2,
            name: "Sneha Sharma",
            email: "sneha.sharma@example.com",
            phone: "9823456789",
            address: "45 Nehru Street, Delhi"
        },
        {
            id: 3,
            name: "Ravi Kumar",
            email: "ravi.kumar@example.com",
            phone: "9123456780",
            address: "7 Park Avenue, Chennai, Tamil Nadu"
        },
        {
            id: 4,
            name: "Priya Singh",
            email: "priya.singh@example.com",
            phone: "9988776655",
            address: "66 Residency Road, Bengaluru, Karnataka"
        },
        {
            id: 5,
            name: "Amit Joshi",
            email: "amit.joshi@example.com",
            phone: "9345678123",
            address: "11 Civil Lines, Jaipur, Rajasthan"
        },
        {
            id: 6,
            name: "Kiran Desai",
            email: "kiran.desai@example.com",
            phone: "9234567891",
            address: "304 GIDC, Ahmedabad, Gujarat"
        },
        {
            id: 7,
            name: "Fatima Khan",
            email: "fatima.khan@example.com",
            phone: "9812345670",
            address: "89 Charminar, Hyderabad, Telangana"
        },
        {
            id: 8,
            name: "Vikram Patel",
            email: "vikram.patel@example.com",
            phone: "9001234567",
            address: "22 Station Road, Surat, Gujarat"
        },
        {
            id: 9,
            name: "Neha Verma",
            email: "neha.verma@example.com",
            phone: "9870123456",
            address: "190 Lake View, Bhopal, MP"
        },
        {
            id: 10,
            name: "Manish Reddy",
            email: "manish.reddy@example.com",
            phone: "9765432109",
            address: "202 Jubilee Hills, Hyderabad, Telangana"
        }
    ];


    console.log(people)

    return (
        <div className='container'>
        <div className="card-container">
            {people.map((data, id) => {
                return <div key={id} className="card" >
                        <h1>{data.name}</h1>
                        <h2>{data.email}</h2>
                        <h3>{data.phone}</h3>
                        <p>{data.address}</p>
                    </div>
            })}
                </div>
        </div>
    )
}

export default Array