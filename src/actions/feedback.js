export async function submitFeedback(formData) {
  // Simulate a server timeout for the action
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  const rating = formData.get('rating');
  const comment = formData.get('comment');
  
  if (!rating || !comment) {
    return { success: false, error: 'Rating and comment are required.' };
  }
  
  return { 
    success: true, 
    data: { 
      id: Date.now(),
      rating: Number(rating), 
      comment: comment.toString() 
    } 
  };
}
