const QuestionCard = ({ question }) => {
  return (
    <div className="w-[400px] mb-10">
      <p className="text-lg font-medium mb-3">{question.question}</p>
      <label
        htmlFor={question.id + "a"}
        className="w-[400px] p-3 border-2 border-solid rounded-lg flex items-center mb-2 transition delay-100 duration-300 ease-in-out hover:border-gray-500"
      >
        <input
          type="radio"
          id={question.id + "a"}
          name={question.id}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2"
        />
        {question.options[0]}
      </label>

      <label
        htmlFor={question.id + "b"}
        className="w-[400px] p-3 border-2 border-solid rounded-lg flex items-center transition delay-100 duration-300 ease-in-out hover:border-gray-500"
      >
        <input
          type="radio"
          id={question.id + "b"}
          name={question.id}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2"
        />
        {question.options[1]}
      </label>
    </div>
  );
};

export default QuestionCard;
