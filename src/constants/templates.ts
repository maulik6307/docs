export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: "/blank-document.svg",
        initialContent: `<!-- Start with an empty document -->`
    },
    {
        id: "software-proposal",
        label: "Software Development Proposal",
        imageUrl: "/software-proposal.svg",
        initialContent: `
        <h1>Software Development Proposal</h1>
        <h2>Project Overview</h2>
        <p>Provide a brief description of the software and its objectives.</p>
        <h2>Scope of Work</h2>
        <p>Detail the features, functionality, and technologies to be used.</p>
        <h2>Timeline</h2>
        <p>Outline key milestones and estimated completion dates.</p>
        <h2>Cost</h2>
        <p>Provide a breakdown of the project cost, including resources and tools.</p>
      `
    },
    {
        id: "project-proposal",
        label: "Project Proposal",
        imageUrl: "/project-proposal.svg",
        initialContent: `
        <h1>Project Proposal</h1>
        <h2>Introduction</h2>
        <p>Introduce the project and its goals.</p>
        <h2>Objectives</h2>
        <p>List the objectives and key deliverables.</p>
        <h2>Methodology</h2>
        <p>Explain your approach, methodology, and technologies to be used.</p>
        <h2>Schedule</h2>
        <p>Provide a timeline with milestones and deadlines.</p>
        <h2>Budget</h2>
        <p>Include an estimated budget with a cost breakdown.</p>
        <h2>Conclusion</h2>
        <p>Summarize the benefits and invite further discussion.</p>
      `
    },
    {
        id: "business-letter",
        label: "Business Letter",
        imageUrl: "/business-letter.svg",
        initialContent: `
        <h1>Business Letter</h1>
        <p>[Your Company Name]</p>
        <p>[Your Address]</p>
        <p>[City, State, ZIP]</p>
        <p>[Date]</p>
        <br />
        <p>[Recipient Name]</p>
        <p>[Recipient Title]</p>
        <p>[Company Name]</p>
        <p>[Company Address]</p>
        <br />
        <h2>Subject: [Subject of the Letter]</h2>
        <p>Dear [Recipient Name],</p>
        <p>[Introduction paragraph: State the purpose of the letter.]</p>
        <p>[Body paragraphs: Provide detailed information or requests.]</p>
        <p>[Conclusion: Summarize the key points and mention any follow-up action.]</p>
        <br />
        <p>Sincerely,</p>
        <p>[Your Name]</p>
        <p>[Your Title]</p>
      `
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg",
        initialContent: `
        <h1>[Your Name]</h1>
        <p>[Your Address] | [Your Phone Number] | [Your Email Address]</p>
        <hr />
        <h2>Professional Summary</h2>
        <p>A brief summary that highlights your experience, skills, and career objectives.</p>
        <h2>Work Experience</h2>
        <h3>[Job Title] at [Company Name]</h3>
        <p>[Dates of Employment]</p>
        <ul>
          <li>Key responsibility or achievement</li>
          <li>Key responsibility or achievement</li>
          <li>Key responsibility or achievement</li>
        </ul>
        <h2>Education</h2>
        <p>[Degree], [Major] - [Institution Name] ([Year of Graduation])</p>
        <h2>Skills</h2>
        <p>A list of your relevant technical and soft skills.</p>
        <h2>Certifications</h2>
        <p>[Certification Name] - [Issuing Organization] ([Year])</p>
      `
    },
    {
        id: "cover-letter",
        label: "Cover Letter",
        imageUrl: "/cover-letter.svg",
        initialContent: `
        <h1>Cover Letter</h1>
        <p>[Your Name]</p>
        <p>[Your Address]</p>
        <p>[Your Email] | [Your Phone]</p>
        <p>[Date]</p>
        <br />
        <p>[Recipient Name]</p>
        <p>[Recipient Title]</p>
        <p>[Company Name]</p>
        <br />
        <p>Dear [Hiring Manager/Recipient Name],</p>
        <p>[Introduction: Mention the position you are applying for and a brief summary of why you are a good fit.]</p>
        <p>[Body: Elaborate on your qualifications, experiences, and how you can add value to the organization. Provide examples where possible.]</p>
        <p>[Conclusion: Thank the reader, reiterate your interest, and state your desire for an interview.]</p>
        <br />
        <p>Sincerely,</p>
        <p>[Your Name]</p>
      `
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: `
        <h1>Letter</h1>
        <p>[Your Address]</p>
        <p>[City, State, ZIP]</p>
        <p>[Email Address]</p>
        <p>[Date]</p>
        <br />
        <p>[Recipient Name]</p>
        <p>[Recipient Address]</p>
        <br />
        <p>Dear [Recipient Name],</p>
        <p>[The body of your letter. This section should contain a clear message, whether it's an invitation, a request, or an update.]</p>
        <p>[Add additional paragraphs as needed to convey your full message.]</p>
        <br />
        <p>Sincerely,</p>
        <p>[Your Name]</p>
      `
    }
];
