// app/goals-and-principles.ts

interface Goal {
    name: string;
    description: string;
}

interface Principle {
    name: string;
    description: string;
}

const goals: Goal[] = [
    {
        name: "Lead Generation",
        description:
            "The primary objective is to attract potential clients who are actively seeking investment services. This involves capturing their contact information and initiating meaningful engagements.",
    },
    {
        name: "Brand Credibility",
        description:
            "Cultivate a strong and trustworthy brand image that positions the firm as an expert in investment management. This includes demonstrating financial acumen and reliability.",
    },
    {
        name: "Client Education",
        description:
            "Provide prospective clients with clear and informative resources about the firm's offerings and expertise, empowering them to make well-informed investment decisions.",
    }
];

const principles: Principle[] = [
    {
        name: "User-Centricity",
        description:
            "Prioritize user needs and perspectives in the design and content of the landing page. Ensure the user experience is intuitive and focused on addressing their pain points.",
    },
    {
        name: "Clarity",
        description:
            "Communicate intricate information with transparency and simplicity. Avoid jargon and ensure that all users, regardless of their financial expertise, can understand the content.",
    },
    {
        name: "Trust",
        description:
            "Cultivate trust through meticulous, professional design elements, backed by solid social proof and unwavering commitment to security protocols. Establish confidence in the firm's competence and integrity.",
    },
    {
        name: "Action-Oriented",
        description:
            "Guide users toward clear calls to action that are relevant to their needs and the firm's objectives. Make it simple and compelling for users to take the desired next steps.",
    },
    {
        name: "Mobile-First Approach",
        description:
            "Develop with a mobile-first mentality to ensure a seamless user experience across all devices. Guarantee that the landing page is responsive and highly functional regardless of the screen size.",
    },
    {
        name: "Accessibility",
        description:
            "Adhere to accessibility guidelines to make the page usable for all individuals, including those with disabilities. Prioritize inclusiveness and support for all users.",
    },
    {
        name: "Performance",
        description:
            "Optimize the site for speed and responsiveness. A fast-loading page is essential for maintaining user engagement and overall satisfaction.",
    },
    {
        name: "Scalability",
        description:
            "Ensure the page is structured for growth, allowing for easy expansion and addition of new features or content as the firm evolves and expands its services.",
    }
];

export { goals, principles }