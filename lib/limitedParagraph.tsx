interface Props {
  text: String;
  wordLimit: number;
}

const LimitedParagraph = ({ text, wordLimit }: Props) => {
  const words = text.split(" ");
  const limitedText = words.slice(0, wordLimit).join(" ");

  return (
    <p className="text-gray-600 text-justify">
      {limitedText}
      {words.length > wordLimit ? "..." : ""}
    </p>
  );
};

export default LimitedParagraph;
