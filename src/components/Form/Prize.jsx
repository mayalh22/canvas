export default function Prize() {
  return (
    <div className="prize-container">
      <h2>Redeem Your Pixels</h2>
      <p>Use this form to claim your prizes based on the pixels you've earned!</p>

      <iframe
        src="https://forms.fillout.com/t/2MzaQbUpvWus"
        title="Canvas Prize Redemption"
        width="100%"
        height="1200px" // adjust if your prize form is shorter/longer
        frameBorder="0"
        style={{ border: 'none', borderRadius: '8px' }}
        allowFullScreen
      ></iframe>
    </div>
  );
}