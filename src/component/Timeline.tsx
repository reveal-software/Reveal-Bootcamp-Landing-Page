import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

const Timeline = () => {
  const timeLine = [
    {
      starColor: "#80D957",
      background: "#F4F4F4",
      textColor: "#000",
      date: "MONTH 1",
      title: "Programming Fundamentals",
      description: `In this lesson, you will Master the underlying principles of your new craft through writing code, researching syntax, and solving complex problems as you would in a real-world job setting.`,
      footer: `Command line, Java, Git, and GitHub, Algorithms & Data Structures`
    },
    {
      starColor: "#80D957",
      background: "#F4F4F4",
      textColor: "#000",
      date: " MONTH-2 &3",
      title: "Web Development",
      description: `Understand and build with the underlying technologies that make the internet work, then develop front-end and back-end websites and deploy them to the internet.`,
      footer: `HTTP, Servers, HTML, CSS, JavaScript, Responsive Design, Heroku`
    },
    {
      starColor: "#80D957",
      background: "#F4F4F4",
      textColor: "#000",
      date: "MONTH-4 &5",
      title: "Front-End Development",
      description: `In this lesson, you will Master the power and flexibility of a modern front-end framework to create interactive page web applications.`,
      footer: `React, Hooks, Redux, Hooks, Web Sockets`
    },
    {
      starColor: "#80D957",
      background: "#F4F4F4",
      textColor: "#000",
      date: "MONTH-6 & 7",
      title: "Back-end Development",
      description: `In this lesson, you will Master back-end development to create robust and modern back-end servers to persist and manipulate data for your web applications.`,
      footer: `Express, SQL, Object-relational Mappers`
    },
    {
      starColor: "#80D957",
      background: "#F4F4F4",
      textColor: "#000",
      date: "ONE WEEK LONG",
      title: "Professional English for Software Developers",
      description: `This English learning program is built around your communication challenges since you will work as a global freelancer you'll be communicating in fast-paced environments across different channels, time zones, and cultures.`,
      footer: ``
    }
  ];

  return (
    <VerticalTimeline lineColor="#DDD">
      {timeLine.map((timeline, i) => (
        <VerticalTimelineElement
          key={i}
          className="vertical-timeline-element--work rounded-xl"
          contentStyle={{
            background: timeline.background,
            color: timeline.textColor,
            borderRadius: 15
          }}
          contentArrowStyle={{
            borderRight: `7px solid  ${timeline.background}`
          }}
          date={timeline.date}
          iconStyle={{ background: timeline.starColor, color: "#fff" }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          }
        >
          <h3 className="vertical-timeline-element-title medium-font font-[700]">
            {timeline.title}
          </h3>
          <p className="small-font">{timeline.description}</p>
          <p style={{ fontSize: 14, fontWeight: 700 }}>{timeline.footer}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
