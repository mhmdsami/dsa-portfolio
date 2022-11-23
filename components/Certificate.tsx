import { Card } from "./index";

const certifications = [
  {
    image: "certificate-1.png",
    content: "MongoDB M130: Basic Custer Administration",
  },
  { image: "certificate-2.jpg", content: "AWS Cloud Foundations" },
  { image: "certificate-3.jpg", content: "Postman Student Expert" },
];

export default function Certificate() {
  return (
    <div
      id="certifications"
      className="w-6/7 m-auto flex min-h-screen flex-col gap-4"
    >
      <div className="text-2xl font-bold md:text-4xl">Certificates</div>
      <div className="grid md:grid-cols-2">
        {certifications.map(({ image, content }, index) => (
          <Card
            key={index}
            image={`/certificates/${image}`}
            name={`certificate-${index + 1}`}
          >
            {content}
          </Card>
        ))}
      </div>
    </div>
  );
}
