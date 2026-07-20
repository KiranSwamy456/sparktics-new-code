import React from "react";
import TestimonialCard from "./TestimonialCard";

const clients = [
  {
    id: 1,
    name: "Rahul Raj",
    designation: "CEO",
    image_url: "user1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id fugit alias voluptates corporis vitae necessitatibus ex tenetur inventore vero?",
  },
  {
    id: 2,
    name: "Chen Michael",
    designation: "Founder of --",
    image_url: "user2.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id fugit alias voluptates corporis vitae necessitatibus ex tenetur  vero?",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    designation: "Admin",
    image_url: "user3.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id fugit alias voluptates corporis vitae necessitatibus ex tenetur inventore vero?",
  },
];

const Stories = () => {
  return (
    <section className="py-20 md:pt-[100px]  md:pb-[100px] max-w-8xl mx-auto px-4">
      <div>
        <h1 className="text-white  text-center text-2xl md:text-[64px] md:leading-[75px]">
          Client Success Stories
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
        {clients.map((client) => (
          <TestimonialCard key={client.id} client={client} />
        ))}
      </div>
    </section>
  );
};

export default Stories;
