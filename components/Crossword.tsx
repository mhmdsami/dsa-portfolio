import { Card } from "@components";

export default function Crossword() {
  return (
    <div
      id="crosswords"
      className="w-6/7 m-auto flex min-h-screen flex-col gap-4"
    >
      <div className="text-2xl font-bold md:text-4xl">Crosswords</div>
      <div className="grid md:grid-cols-2">
        {[...Array(4)].map((_, index) => (
          <Card
            key={index}
            image={`/crosswords/crossword-${index + 1}.png`}
            name={`crossword-${index + 1}`}
          >{`Unit-${index + 1} Crossword`}</Card>
        ))}
      </div>
    </div>
  );
}
