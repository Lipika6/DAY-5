import { use } from 'react';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    res.json()
);

function UserCard({ user }) {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '1.5rem',
            textAlign: 'left',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
        }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#6c63ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    marginRight: '1rem',
                    flexShrink: 0,
                }}>
                    {user.name.charAt(0)}
                </div>
                <div>
                    <strong style={{ fontSize: '1rem' }}>{user.name}</strong>
                    <p style={{ margin: 0, color: '#888', fontSize: '0.85rem' }}>{user.email}</p>
                </div>
            </div>
            <p style={{ margin: '0.3rem 0', fontSize: '0.85rem' }}><strong>Job Title:</strong> {user.company.bs}</p>
            <p style={{ margin: '0.3rem 0', fontSize: '0.85rem' }}><strong>Department:</strong> {user.company.name}</p>
            <p style={{ margin: '0.3rem 0', fontSize: '0.85rem' }}><strong>Office Phone:</strong> {user.phone}</p>
            <p style={{ margin: '0.3rem 0', fontSize: '0.85rem' }}><strong>Website:</strong> {user.website}</p>
        </div>
    );
}

function UserCardGallery() {
    const users = use(usersPromise);

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
        }}>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}

export default UserCardGallery;
