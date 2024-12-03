import React from 'react';

const UserCards = () => {
    const users = [
        {
            id: 1,
            name: 'Freebie',
            
            hobbies: ['20,000+ of PNG & SVG graphics', 'Access to 100 million stock images', 'Upload custom icons and fonts', 'Unlimited Sharing', 'Upload graphics & video in up to 4k', 'Unlimited Projects', 'Instant Access to our design system', 'Create teams to collaborate on designs'],
        },
        {
            id: 2,
            name: 'Bob',
            hobbies: ['Gaming', 'Hiking', 'Photography'],
        },
        {
            id: 3,
            name: 'Charlie',
            hobbies: ['Music', 'Art', 'Sports'],
        },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-6 p-6">
            {users.map(user => (
                <div key={user.id} className="bg-white shadow-md rounded-lg p-4 w-64">
                    <h2 className="text-xl font-bold mb-2">{user.name}</h2>
                    <h3 className="text-lg font-semibold mb-1">Hobbies:</h3>
                    <ul className="list-disc pl-5">
                        {user.hobbies.map((hobby, index) => (
                            <li key={index} className="text-gray-700">{hobby}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default UserCards;