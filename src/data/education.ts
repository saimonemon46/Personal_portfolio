export interface Education {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  maxCgpa: string;
  location: string;
  highlights: string[];
  coursework: string[];
}

export const educationData: Education = {
  institution: "International University of Business Agriculture and Technology (IUBAT)",
  degree: "Bachelor of Science in Computer Science & Engineering (B.Sc. in CSE)",
  period: "2023 – 2027",
  cgpa: "3.84",
  maxCgpa: "4.00",
  location: "Dhaka, Bangladesh",
  highlights: [
    "Academic Excellence with 3.84 CGPA in core computer science curriculum",
    "Consistently mentored university juniors in Data Structures, Algorithms, and Git workflows",
    "Active participant in technical symposiums, research conferences, and national hackathons",
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Operating Systems & Concurrency",
    "Computer Networks & Protocols",
    "Software Architecture & Design Patterns",
    "Object-Oriented Programming (OOP)",
  ],
};
