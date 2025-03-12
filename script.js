document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
    
    if (name && rating && comment) {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.innerHTML = `<strong>${name}</strong> (Rating: ${rating})<br>${comment}`;
        
        document.getElementById('reviews').appendChild(reviewDiv);
        
        document.getElementById('reviewForm').reset();
    }
});