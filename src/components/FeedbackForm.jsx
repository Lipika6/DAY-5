import { useFormStatus } from 'react-dom';
import { submitFeedback } from '../actions/feedback';
import { useRef } from 'react';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending} style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer' }}>
            {pending ? 'Submitting...' : 'Submit Feedback'}
        </button>
    );
}

export default function FeedbackForm({ addFeedback }) {
    const formRef = useRef(null);

    const handleAction = async (formData) => {
        const result = await submitFeedback(formData);
        if (result.success) {
            addFeedback(result.data);
            formRef.current.reset(); // clear form after successful submission
        } else {
            alert(result.error);
        }
    };

    return (
        <form ref={formRef} action={handleAction} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Leave Feedback</h2>

            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <label htmlFor="rating" style={{ marginBottom: '5px' }}>Rating (1-5):</label>
                <input
                    type="number"
                    id="rating"
                    name="rating"
                    min="1"
                    max="5"
                    required
                    style={{ padding: '8px' }}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <label htmlFor="comment" style={{ marginBottom: '5px' }}>Comment:</label>
                <textarea
                    id="comment"
                    name="comment"
                    rows="4"
                    required
                    style={{ padding: '8px' }}
                ></textarea>
            </div>

            <SubmitButton />
        </form>
    );
}
