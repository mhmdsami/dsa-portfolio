import Image from "next/image";

interface info {
  title: string;
  content: string;
}

const heroInfo: info[] = [
  { title: "Name", content: "Mohamed Sami" },
  { title: "Registration Number", content: "RA2111032010022" },
  { title: "Mail ID", content: "mm5481@srmist.edu.in" },
  { title: "Department", content: "Networking and Communications" },
  { title: "Semester", content: "III" },
];

const courseInfo: info[] = [
  {
    title: "Subject Title",
    content: "18CSC201J Data Structures and Algorithms",
  },
  { title: "Handled By", content: "Dr.TYJ.Naga Malleswari" },
];
export default function Hero() {
  return (
    <div className="m-auto flex min-h-[80vh] w-3/4 flex-col gap-4 md:pt-20">
      <div className="text-2xl font-bold md:text-4xl">My Portfolio</div>
      <div className="flex flex-col justify-between lg:flex-row">
        <Image
          src="/assets/photo-new.png"
          width={200}
          height={200}
          alt="Sami Photo"
        />
        <ul className="flex flex-col place-content-center">
          {heroInfo.map(({ title, content }: info, idx) => (
            <li key={idx} className="md:text-xl">
              <span className="font-medium">{title}</span>: {content}
            </li>
          ))}
        </ul>
      </div>
      <ul>
        {courseInfo.map(({ title, content }: info, idx) => (
          <li key={idx} className="md:text-xl">
            <span className="font-medium">{title}</span>: {content}
          </li>
        ))}
      </ul>
    </div>
  );
}
