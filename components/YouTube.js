export default function YouTube({ id }) {
  return (
    <div className="container">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
      />
    </div>
  );
}
