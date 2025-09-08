import Image from "next/image";

interface CareerStep {
  title: string;
  company: string;
  period: string;
  description: string;
  logo: string;
  website: string;
}

interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: string;
}

interface Interest {
  name: string;
  description: string;
  icon: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  logo: string;
  website: string;
}

export default function Home() {
  const careerSteps: CareerStep[] = [
    {
      title: "Senior Solution Engineer",
      company: "Deloitte Engineering, Data&AI",
      period: "June 2024 - Present",
      description: "Leading data engineering and AI solution architecture projects. Working with cutting-edge technologies in cloud computing and data analytics to deliver enterprise-scale solutions.",
      logo: "/logos/deloitte.jpg",
      website: "https://www.deloitte.com"
    },
    {
      title: "Cloud Solution Engineer",
      company: "Deloitte",
      period: "March 2023 - July 2024",
      description: "Developed and implemented cloud-based solutions using Azure and modern data platforms. Specialized in building scalable data pipelines and analytics solutions.",
      logo: "/logos/deloitte.jpg",
      website: "https://www.deloitte.com"
    },
    {
      title: "Cloud Solution Developer",
      company: "Deloitte",
      period: "April 2022 - March 2023",
      description: "Started my journey at Deloitte focusing on cloud solution development. Gained expertise in data engineering, cloud architecture, and modern development practices.",
      logo: "/logos/deloitte.jpg",
      website: "https://www.deloitte.com"
    },
    {
      title: "Research Assistant - NLP Group",
      company: "TIB/UB Hannover (Open Research Knowledge Graph)",
      period: "January 2021 - October 2021",
      description: "Worked on Natural Language Processing projects and React development for the Open Research Knowledge Graph initiative. Contributed to cutting-edge research in knowledge representation.",
      logo: "/logos/orkg.svg",
      website: "https://www.tib.eu"
    },
    {
      title: "Working Student - Technical Project Management",
      company: "Hacon",
      period: "March 2019 - June 2020",
      description: "Gained experience in technical project management while studying. Contributed to project planning and coordination in a technology-focused environment.",
      logo: "/logos/hacon.png",
      website: "https://www.hacon.de"
    }
  ];

  const skills: Skill[] = [
    { name: "Azure Databricks", level: "Expert", category: "Data Platform" },
    { name: "Python", level: "Expert", category: "Languages" },
    { name: "Scala", level: "Advanced", category: "Languages" },
    { name: "Apache Spark", level: "Advanced", category: "Big Data" },
    { name: "SQL", level: "Advanced", category: "Database" },
    { name: "Kotlin", level: "Advanced", category: "Languages" },
    { name: "React.js", level: "Intermediate", category: "Frontend" },
    { name: "JavaScript", level: "Intermediate", category: "Languages" },
    { name: "Git", level: "Advanced", category: "DevOps" },
    { name: "Docker", level: "Intermediate", category: "DevOps" },
  ];

  const interests: Interest[] = [
    {
      name: "Data Engineering",
      description: "Passionate about building scalable data pipelines and analytics solutions using modern cloud platforms like Azure Databricks.",
      icon: "📊"
    },
    {
      name: "Cloud Computing",
      description: "Expertise in cloud architecture and solutions, specializing in Azure ecosystem and distributed computing platforms.",
      icon: "☁️"
    },
    {
      name: "Natural Language Processing",
      description: "Research experience in NLP through work on the Open Research Knowledge Graph project, combining AI with knowledge representation.",
      icon: "🔬"
    },
    {
      name: "Software Engineering",
      description: "Strong foundation in software development with experience across multiple programming languages and modern development practices.",
      icon: "💻"
    }
  ];

  const education: Education[] = [
    {
      degree: "Master of Science - Computer Engineering",
      institution: "Leibniz Universität Hannover",
      period: "Oct 2019 - Aug 2022",
      description: "Specialized in Computer Engineering with focus on software systems and data processing.",
      logo: "/logos/luh_logo.svg",
      website: "https://www.uni-hannover.de"
    },
    {
      degree: "Master Wirtschaftsingenieurwesen (Industrial Engineering)",
      institution: "Leibniz Universität Hannover",
      period: "Oct 2018 - Oct 2019",
      description: "Interdisciplinary program combining engineering and business administration.",
      logo: "/logos/luh_logo.svg",
      website: "https://www.uni-hannover.de"
    }
  ];

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-db-orange text-white dark:bg-db-orange dark:text-white';
      case 'Advanced': return 'bg-db-blue text-white dark:bg-db-blue-light dark:text-white';
      case 'Intermediate': return 'bg-db-gray-600 text-white dark:bg-db-gray-500 dark:text-white';
      case 'Beginner': return 'bg-db-gray-300 text-db-gray-800 dark:bg-db-gray-700 dark:text-white';
      default: return 'bg-db-gray-300 text-db-gray-800 dark:bg-db-gray-700 dark:text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-db-gray-50 to-white dark:from-db-blue dark:to-db-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <div className="mb-8">
            <Image
              src="/developer-photo.jpg"
              alt="Rasmus von Glahn - Senior Solution Engineer"
              width={200}
              height={200}
              className="rounded-full mx-auto border-4 border-white shadow-lg dark:border-db-gray-700 object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-db-blue dark:text-white mb-4">
            Hi, I&apos;m Rasmus
          </h1>
          <p className="text-xl md:text-2xl text-db-gray-700 dark:text-db-gray-200 mb-6 font-medium">
            Senior Solution Engineer at Deloitte Engineering, Data&AI
          </p>
          <p className="text-lg text-db-gray-600 dark:text-db-gray-300 max-w-2xl mx-auto">
            Strong interest in Data Engineering, Software Engineering and Cloud Computing.
            Specialized in Azure Databricks and building enterprise-scale data solutions.
          </p>
        </header>

        {/* Career Steps Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-db-blue dark:text-white mb-8 text-center">
            Career Journey
          </h2>
          <div className="space-y-6">
            {careerSteps.map((step, index) => (
              <div key={`career-${step.title}-${index}`} className="bg-white dark:bg-db-blue rounded-lg p-6 shadow-lg border border-db-gray-200 dark:border-db-gray-600 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-db-blue dark:text-white">
                    {step.title}
                  </h3>
                  <div className="text-sm text-db-gray-600 dark:text-db-gray-300 mt-1 md:mt-0">
                    {step.period}
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <a
                    href={step.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={step.logo}
                      alt={`${step.company} logo`}
                      width={80}
                      height={24}
                      className="object-contain"
                    />
                  </a>
                  <div className="text-db-gray-700 dark:text-db-gray-200 font-medium">
                    {step.company}
                  </div>
                </div>
                <p className="text-db-gray-700 dark:text-db-gray-200">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-db-blue dark:text-white mb-8 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={`skill-${skill.name}-${index}`} className="bg-white dark:bg-db-blue rounded-lg p-4 shadow-lg border border-db-gray-200 dark:border-db-gray-600 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-db-blue dark:text-white">
                    {skill.name}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSkillLevelColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
                <p className="text-sm text-db-gray-600 dark:text-db-gray-300">
                  {skill.category}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Interests Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-db-blue dark:text-white mb-8 text-center">
            Interests & Passions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <div key={`interest-${interest.name}-${index}`} className="bg-white dark:bg-db-blue rounded-lg p-6 shadow-lg border border-db-gray-200 dark:border-db-gray-600 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{interest.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-db-blue dark:text-white mb-2">
                      {interest.name}
                    </h3>
                    <p className="text-db-gray-700 dark:text-db-gray-200">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-db-blue dark:text-white mb-8 text-center">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={`education-${edu.degree}-${index}`} className="bg-white dark:bg-db-blue rounded-lg p-6 shadow-lg border border-db-gray-200 dark:border-db-gray-600 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-db-blue dark:text-white">
                    {edu.degree}
                  </h3>
                  <div className="text-sm text-db-gray-600 dark:text-db-gray-300 mt-1 md:mt-0">
                    {edu.period}
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      width={80}
                      height={24}
                      className="object-contain"
                    />
                  </a>
                  <div className="text-db-gray-700 dark:text-db-gray-200 font-medium">
                    {edu.institution}
                  </div>
                </div>
                <p className="text-db-gray-700 dark:text-db-gray-200">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-db-blue dark:text-white mb-8">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-db-gray-700 dark:text-db-gray-200 mb-6">
            I&apos;m always interested in new opportunities and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/RvonGlahn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-db-orange hover:bg-db-orange-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Visit my GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rasmus-von-glahn/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-db-blue hover:bg-db-blue-light text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Visit my LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
