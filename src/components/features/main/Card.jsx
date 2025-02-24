const Card = ({ cardContent }) => {
  return (
    <div className="text-left p-6 rounded-lg shadow-lg">
      <h1 className="text-xl pb-4">{cardContent.title}</h1>
      <p className="text-gray-500">{cardContent.content}</p>
    </div>
  );
};

export default Card;
