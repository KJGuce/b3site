"use client";

import { useState } from "react";
import Link from "next/link";

interface StudyQuestion {
  week: number;
  questions: string[];
}

interface StudyContent {
  id: string;
  title: string;
  content: string;
  weeklyQuestions: StudyQuestion[];
}

const studyContent: Record<string, StudyContent> = {
  "week-1": {
    id: "week-1",
    title: "Week 1: 1 John 1",
    content: `1 John 1:1-4
That which was from the beginning, which we have heard, which we have seen with our eyes, which we have looked at and our hands have touched—this we proclaim concerning the Word of life. The life appeared; we have seen it and testify to it, and we proclaim to you the eternal life, which was with the Father and has appeared to us. We proclaim to you what we have seen and heard, so that you also may have fellowship with us. And our fellowship is with the Father and with his Son, Jesus Christ. We write this to make our joy complete.

1 John 1:5-10
This is the message we have heard from him and declare to you: God is light; in him there is no darkness at all. If we claim to have fellowship with him and yet walk in the darkness, we lie and do not live out the truth. But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus, his Son, purifies us from all sin.

If we claim to be without sin, we deceive ourselves and the truth is not in us. If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness. If we claim we have not sinned, we make him out to be a liar and his word is not in us.`,
    weeklyQuestions: [
      {
        week: 1,
        questions: [
          "What does John mean when he says 'God is light'?",
          "How does walking in the light affect our relationships with others?",
          "What is the relationship between confession and forgiveness?",
          "Why is it important to acknowledge our sin?",
        ],
      },
    ],
  },
  "week-2": {
    id: "week-2",
    title: "Week 2: 1 John 2",
    content: `1 John 2:1-6
My dear children, I write this to you so that you will not sin. But if anybody does sin, we have an advocate with the Father—Jesus Christ, the Righteous One. He is the atoning sacrifice for our sins, and not only for ours but also for the sins of the whole world.

We know that we have come to know him if we keep his commands. Whoever says, "I know him," but does not do what he commands is a liar, and the truth is not in that person. But if anyone obeys his word, love for God is truly made complete in them. This is how we know we are in him: Whoever claims to live in him must live as Jesus did.`,
    weeklyQuestions: [
      {
        week: 2,
        questions: [
          "What is the role of Jesus as our advocate?",
          "How does obedience demonstrate our knowledge of God?",
          "What does it mean to live as Jesus did?",
          "How is love for God made complete in us?",
        ],
      },
    ],
  },
  "week-3": {
    id: "week-3",
    title: "Week 3: 1 John 3",
    content: `1 John 3:1-3
See what great love the Father has lavished on us, that we should be called children of God! And that is what we are! The reason the world does not know us is that it did not know him. Dear friends, now we are children of God, and what we will be has not yet been made known. But we know that when Christ appears, we shall be like him, for we shall see him as he is. All who have this hope in him purify themselves, just as he is pure.

1 John 3:4-10
Everyone who sins breaks the law; in fact, sin is lawlessness. But you know that he appeared so that he might take away our sins. And in him is no sin. No one who lives in him keeps on sinning. No one who continues to sin has either seen him or known him.`,
    weeklyQuestions: [
      {
        week: 3,
        questions: [
          "What does it mean to be called children of God?",
          "How does our hope in Christ affect our daily lives?",
          "What is the relationship between sin and lawlessness?",
          "How does knowing Christ change our behavior?",
        ],
      },
    ],
  },
  "week-4": {
    id: "week-4",
    title: "Week 4: 1 John 4",
    content: `1 John 4:1-6
Dear friends, do not believe every spirit, but test the spirits to see whether they are from God, because many false prophets have gone out into the world. This is how you can recognize the Spirit of God: Every spirit that acknowledges that Jesus Christ has come in the flesh is from God, but every spirit that does not acknowledge Jesus is not from God. This is the spirit of the antichrist, which you have heard is coming and even now is already in the world.

1 John 4:7-12
Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God. Whoever does not love does not know God, because God is love. This is how God showed his love among us: He sent his one and only Son into the world that we might live through him.`,
    weeklyQuestions: [
      {
        week: 4,
        questions: [
          "How can we test the spirits?",
          "What is the relationship between love and knowing God?",
          "How did God demonstrate his love?",
          "What does it mean to live through Christ?",
        ],
      },
    ],
  },
  "week-5": {
    id: "week-5",
    title: "Week 5: 1 John 5",
    content: `1 John 5:1-5
Everyone who believes that Jesus is the Christ is born of God, and everyone who loves the father loves his child as well. This is how we know that we love the children of God: by loving God and carrying out his commands. In fact, this is love for God: to keep his commands. And his commands are not burdensome, for everyone born of God overcomes the world. This is the victory that has overcome the world, even our faith. Who is it that overcomes the world? Only the one who believes that Jesus is the Son of God.

1 John 5:6-12
This is the one who came by water and blood—Jesus Christ. He did not come by water only, but by water and blood. And it is the Spirit who testifies, because the Spirit is the truth. For there are three that testify: the Spirit, the water and the blood; and the three are in agreement.`,
    weeklyQuestions: [
      {
        week: 5,
        questions: [
          "What is the relationship between faith and victory?",
          "How do we demonstrate our love for God?",
          "What is the significance of the three witnesses?",
          "How does our faith overcome the world?",
        ],
      },
    ],
  },
  "week-6": {
    id: "week-6",
    title: "Week 6: 2 John & 3 John",
    content: `2 John 1:1-6
The elder,
To the lady chosen by God and to her children, whom I love in the truth—and not I only, but also all who know the truth—because of the truth, which lives in us and will be with us forever:
Grace, mercy and peace from God the Father and from Jesus Christ, the Father's Son, will be with us in truth and love.

It has given me great joy to find some of your children walking in the truth, just as the Father commanded us. And now, dear lady, I am not writing you a new command but one we have had from the beginning. I ask that we love one another. And this is love: that we walk in obedience to his commands. As you have heard from the beginning, his command is that you walk in love.

3 John 1:1-8
The elder,
To my dear friend Gaius, whom I love in the truth.
Dear friend, I pray that you may enjoy good health and that all may go well with you, even as your soul is getting along well. It gave me great joy when some believers came and testified about your faithfulness to the truth, telling how you continue to walk in it. I have no greater joy than to hear that my children are walking in the truth.

Dear friend, you are faithful in what you are doing for the brothers and sisters, even though they are strangers to you. They have told the church about your love. Please send them on their way in a manner that honors God. It was for the sake of the Name that they went out, receiving no help from the pagans. We ought therefore to show hospitality to such people so that we may work together for the truth.`,
    weeklyQuestions: [
      {
        week: 6,
        questions: [
          "What does it mean to walk in truth and love?",
          "How does hospitality demonstrate our faith?",
          "What is the importance of supporting fellow believers?",
          "How can we apply these principles in our community?",
        ],
      },
    ],
  },
};

export default function Study() {
  const [selectedWeek, setSelectedWeek] = useState<string>("week-1");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Bible Study</h1>
        <p className="text-xl text-gray-600">
          Explore the books of John through our 6-week study
        </p>
      </div>

      {/* Week Selection */}
      <div className="flex justify-center space-x-2 mb-8">
        {[1, 2, 3, 4, 5, 6].map((week) => (
          <button
            key={week}
            onClick={() => setSelectedWeek(`week-${week}`)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              selectedWeek === `week-${week}`
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Week {week}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">
            {studyContent[selectedWeek].title}
          </h2>

          {/* Scripture Content */}
          <div className="prose max-w-none mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-gray-900 text-lg leading-relaxed font-serif">
                {studyContent[selectedWeek].content
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          </div>

          {/* Study Questions */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-semibold mb-4">Study Questions</h3>
            <ul className="space-y-4">
              {studyContent[selectedWeek].weeklyQuestions[0].questions.map(
                (question, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-medium mr-3">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{question}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-12 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">
          Additional Resources
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start">
            <svg
              className="w-5 h-5 mr-2 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Download the study guide for personal reflection</span>
          </li>
          <li className="flex items-start">
            <svg
              className="w-5 h-5 mr-2 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <a
              href="https://c3toronto.churchcenter.com/groups/connect-groups/summer-2025-cg-b3-brampton-bible-brunch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 hover:underline"
            >
              Join our weekly discussion group
            </a>
          </li>
          <li className="flex items-start">
            <svg
              className="w-5 h-5 mr-2 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Access supplementary materials and commentaries</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
