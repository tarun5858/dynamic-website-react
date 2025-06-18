import "../App.css";

const TopicBarCta = ({ isActive, onClick, topic, ...props }) => {
  return (
    <button
      // type="button"
      className={`cta-row-button ${isActive ? "clicked" : ""}`}
      onClick={onClick}
      {...props}
    >
      {topic}
    </button>
  );
};

export default TopicBarCta;
