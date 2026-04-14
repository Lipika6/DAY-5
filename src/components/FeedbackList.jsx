export default function FeedbackList({ feedbacks }) {
    if (feedbacks.length === 0) {
        return <p style={{ textAlign: 'center', color: '#666' }}>No feedback submitted yet. Be the first!</p>;
    }

    return (
        <div style={{ marginTop: '2rem' }}>
            <h2>Recent Feedback</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {feedbacks.map((fb) => (
                    <li key={fb.id} style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'left' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <strong>Rating: {'⭐'.repeat(fb.rating)}</strong>
                            <small style={{ color: '#888' }}>{new Date(fb.id).toLocaleTimeString()}</small>
                        </div>
                        <p style={{ margin: 0 }}>{fb.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
