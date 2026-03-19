export default function Submit() {
  return (
    <div className="submit-container">
      <h2>Submit Your Project</h2>
      <p>Fill out the form below to share your creation with Canvas!</p>

      <iframe
        src="https://forms.fillout.com/t/cpkSPtkx7wus"
        title="Canvas Project Submission"
        width="100%"
        height="1200px" // adjust as needed for the form length
        frameBorder="0"
        style={{ border: 'none', borderRadius: '8px' }}
        allowFullScreen
      ></iframe>
    </div>
  );
}