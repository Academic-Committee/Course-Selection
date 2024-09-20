import { programContent } from "./types";

export const YearTwoMFirstSem: programContent = {
  header: "Level 200 First Semester (Minor In Computer Science)",
  description: "",
  courses: [
    {
      id: 1,
      code: "CBAS 210",
      title: "Academic Writing II",
      credits: 3,
      preRequisite: "",
      type: "core",
    },
    {
      id: 2,
      code: "DCIT 201",
      title: "Programming I",
      credits: 3,
      preRequisite: "",
      type: "core",
    },
    {
      id: 3,
      code: "DCIT 203",
      title: "Digital and Logic Systems Design",
      credits: 3,
      preRequisite: "",
      type: "core",
    },
    {
      id: 6,
      code: "MATH 223",
      title: "Calculus II",
      credits: 3,
      preRequisite: "",
      type: "core",
    },
  ],
};

export const YearThreeMFirstSem: programContent = {
  header: "Level 300 First Semester (Minor in Computer Science)",
  description: "* Select 6 credits from the following courses *",
  courses: [
    {
      id: 7,
      code: "DCIT 301",
      title: "Operating Systems",
      credits: 3,
      preRequisite: "",
      type: "core",
    },
    {
      id: 8,
      code: "DCIT 303",
      title: "Computer Networks",
      credits: 3,
      preRequisite: "",
      type: "core",
    },
    {
      id: 9,
      code: "DCIT 305",
      title: "Database Fundamentals",
      credits: 3,
      preRequisite: "",
      type: "core",
    },
  ],
};

export const YearFourMFirstSem: programContent = {
  header: "Level 400 First Semester (Combined Major)",
  description: "* Select all your courses from your major *",
  courses: [],
};
