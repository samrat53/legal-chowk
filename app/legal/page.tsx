"use client";
import BookmarkIcon from "@/components/Bookmark";
import UnbookmarkIcon from "@/components/Unbookmark";
import { useState } from "react";

export default async function Page() {
  const data = [
    {
      question: "How can I join the 'Introduction to Web Development' session?",
      answer:
        "Simply attend the session at the specified time. No prior registration is required.",
    },
    {
      question: "How can I join the 'Introduction to Web Development' session?",
      answer:
        "Simply attend the session at the specified time. No prior registration is required.",
    },
    {
      question: "Is the '21 Days Challenge' suitable for beginners?",
      answer:
        "Absolutely! The challenge is designed for both beginners and experienced coders to enhance their web development skills.",
    },
    {
      question:
        "Can I use platforms other than Replit or Codepen for the 21 Days Challenge?",
      answer:
        "No, submissions from other platforms won't be accepted. Stick to Replit, Codepen, or local coding with Google Drive uploads.",
    },
    {
      question: "Is collaboration allowed during the 21 Days Challenge?",
      answer:
        "Collaboration is encouraged, but sharing solutions publicly during the task period is strictly prohibited.",
    },
    {
      question: "What happens if I miss a day in the 21 Days Challenge?",
      answer:
        "Try to complete each task daily, but if you miss a day, catch up on the following day. Late submissions, however, might not be accepted, and any points won’t be provided for late submission.",
    },
    {
      question:
        "Can I share my solutions on GitHub during the 21 Days Challenge?",
      answer:
        "Yes, but only after the specified task period has ended. Respect the challenge rules.",
    },
  ];

  const RenderData = ({
    question,
    answer,
  }: {
    question: string;
    answer: string;
  }) => {
    const [isBookmarked, setBookmarked] = useState(false);

    return (
      <>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-200 m-3 ml-8 w-[80vw]"
        >
          <div className="collapse-title flex text-xl gap-5 font-medium items-center">
            <span className="flex-1">Query: {question}</span>
            <button
              className="hover:bg-gray-400 rounded-2xl"
              onClick={() => setBookmarked((prevValue) => !prevValue)}
            >
              {isBookmarked ? <UnbookmarkIcon /> : <BookmarkIcon />}
            </button>
          </div>
          <div className="collapse-content">
            <p>Discussion: {answer}</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <main>
      <h1 className="text-2xl flex flex-col items-center topic-class my-9">
        Legal Discussions:
      </h1>
      {data.map((item, index) => (
        <RenderData key={index} question={item.question} answer={item.answer} />
      ))}
    </main>
  );
}
