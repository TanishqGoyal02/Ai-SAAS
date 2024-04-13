import { ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "John Doe",
    avatar: "A",
    title: "Software Engineer",
    description:
      "This is a great tool for generating code. I have been using it for a while now and it has saved me a lot of time.",
  },
  {
    name: "Jane Doe",
    avatar: "B",
    title: "Product Manager",
    description:
      "I have been using this tool for a while now and it has helped me generate code quickly and efficiently.",
  },
  {
    name: "John Smith",
    avatar: "C",
    title: "Software Engineer",
    description:
      "great tool for music generation. I have been using it for a while now and it has saved me a lot of time.",
  },
  {
    name: "Jane Smith",
    avatar: "D",
    title: "Product Manager",
    description:
      "This is a great tool for generating code. I have been using it for a while now and it has saved me a lot of time.",
  },
];

export const LandingContent = () => {
  return (
    <div className="Px-10 bb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.description}
            className="bg-[#192339] border-none text-white "
          >
            <CardHeader>
              <CardTitle className="flex flex-col items-start gap-x-2">
                <p className="text-lg">{testimonial.name}</p>
                <p className="text-zinc-400 text-sm">{testimonial.title}</p>
              </CardTitle>
              <CardContent className="pt-4 pb-0 px-0">
                {testimonial.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
