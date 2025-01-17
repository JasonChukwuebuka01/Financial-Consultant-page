import React from 'react';

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


const GoalsAndPrinciples = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4 border-2 border-red-500">
                <h2 className="text-3xl font-bold mb-8 text-center text-red-600">
                    Our Goals and Principles
                </h2>


                {/* Goals Section */}
                <article>
                    <h3 className="text-2xl font-semibold mb-4 text-red-600">Our Goals</h3>
                    <ul className="space-y-4  grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {goals.map((goal, index) => (
                            <li key={index} className="bg-white p-4 rounded-md shadow-md">
                                <h4 className="text-xl font-semibold mb-2 text-red-600">{goal.name}</h4>
                                <p className="text-gray-700">{goal.description}</p>
                            </li>
                        ))}
                    </ul>
                </article>


                <article className='mt-20'>
                    <h3 className="text-2xl font-semibold mb-4 text-red-600">Our Principles</h3>
                    <ul className="space-y-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {principles.map((principle, index) => (
                            <li key={index} className="bg-white p-4 rounded-md shadow-md">
                                <h4 className="text-xl font-semibold mb-2 text-red-600">{principle.name}</h4>
                                <p className="text-gray-700">{principle.description}</p>
                            </li>
                        ))}
                    </ul>
                </article>



            </div>
        </section>
    );
};

export default GoalsAndPrinciples;

/***
 * 
 * 
 */