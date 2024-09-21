"use client";
import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { programContent } from "./utils/types";
import { ShowCoursesModal } from "./utils/components/show-courses-modal";
import {
  YearTwoCMFirstSem,
  YearThreeCMFirstSem,
  YearFourCMFirstSem,
} from "./utils/combined-major-courses";
import {
  YearTwoITFirstSem,
  YearThreeITFirstSem,
  YearFourITFirstSem,
} from "./utils/IT-courses";
import {
  YearTwoMFirstSem,
  YearThreeMFirstSem,
  YearFourMFirstSem,
} from "./utils/minor-courses";
import {
  YearTwoSMFirstSem,
  YearThreeSMFirstSem,
  YearFourSMFirstSem,
} from "./utils/single-major-courses";
import ParallaxImages from "./utils/components/parallax";

export default function Home() {
  const [semester, setSemester] = useState<string>();
  const [level, setLevel] = useState<string>();
  const [programme, setProgramme] = useState<string>();
  const [courses, setCourses] = useState<programContent>();

  const handleSemesterChange = (event: SelectChangeEvent) => {
    setSemester(event.target.value as string);
  };

  const handleLevelChange = (event: SelectChangeEvent) => {
    setLevel(event.target.value as string);
  };

  const handleProgrammeChange = (event: SelectChangeEvent) => {
    setProgramme(event.target.value as string);
  };

  const handleGetCourses = () => {
    if (!semester || !level || !programme) {
      alert("Please select all fields: semester, level, and programme.");
      return;
    }

    if (
      semester === "First Semester" &&
      level === "200" &&
      programme === "Single Major Computer Science"
    ) {
      setCourses(YearTwoSMFirstSem);
    } else if (
      semester === "First Semester" &&
      level === "200" &&
      programme === "Combined Major / Major Minor Computer Science"
    ) {
      setCourses(YearTwoCMFirstSem);
    } else if (
      semester === "First Semester" &&
      level === "200" &&
      programme === "IT"
    ) {
      setCourses(YearTwoITFirstSem);
    } else if (
      semester === "First Semester" &&
      level === "200" &&
      programme === "Minor Computer Science"
    ) {
      setCourses(YearTwoMFirstSem);
    } else if (
      semester === "First Semester" &&
      level === "300" &&
      programme === "Single Major Computer Science"
    ) {
      setCourses(YearThreeSMFirstSem);
    } else if (
      semester === "First Semester" &&
      level === "300" &&
      programme === "Combined Major / Major Minor Computer Science"
    ) {
      setCourses(YearThreeCMFirstSem);
    } else if (
      semester === "First Semester" &&
      level === "300" &&
      programme === "IT"
    ) {
      setCourses(YearThreeITFirstSem);
    } else if (
      semester === "First Semester" &&
      level === "300" &&
      programme === "Minor Computer Science"
    ) {
      setCourses(YearThreeMFirstSem);
    } else if (
      semester === "First Semester" &&
      level === "400" &&
      programme === "Single Major Computer Science"
    ) {
      setCourses(YearFourSMFirstSem);
    } else if (
      semester === "First Semester" &&
      level === "400" &&
      programme === "Combined Major / Major Minor Computer Science"
    ) {
      setCourses(YearFourCMFirstSem);
    } else if (
      semester === "First Semester" &&
      level === "400" &&
      programme === "IT"
    ) {
      setCourses(YearFourITFirstSem);
    } else if (
      semester === "First Semester" &&
      level === "400" &&
      programme === "Minor Computer Science"
    ) {
      setCourses(YearFourMFirstSem);
    }

    // Show the modal with the courses
    const modal = document.getElementById("courses_modal") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  // Parallax effect
  useEffect(() => {
    const parallax = (event: MouseEvent) => {
      const images = document.querySelectorAll(".mouse");
      images.forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * Number(position)) / 90;
        const y = (window.innerHeight - event.pageY * Number(position)) / 90;
        (
          shift as HTMLElement
        ).style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallax);
    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  return (
    <div className="mouse_move relative w-full h-screen overflow-hidden flex justify-center items-center bg-white md:bg-[#e58018]">
      {/* Parallax Images */}
      <ParallaxImages />
      {/* Main Form and Modal */}
      <div className="w-full md:w-[40%] mx-0 md:mx-auto absolute px-4 md:px-0 z-10 bg-white md:rounded-lg">
        <div className="flex flex-col justify-center items-center space-y-9 md:px-20 py-10">
          <div className="flex flex-col justify-center items-center w-full text-center space-y-2">
            <img id="img5" src="/campssa-2d.png" className="w-[100px]" />
            <div>
              <h1 className="text-4xl font-bold text-[#000]">
                Course Selection
              </h1>
              <p className="text-lg text-gray-500">
                COMPSSA Academic Committee
              </p>
            </div>
          </div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Semester</InputLabel>
            <Select
              labelId="select-label-1"
              id="simple-select-1"
              value={semester}
              label="Semester"
              onChange={handleSemesterChange}
            >
              <MenuItem value={"First Semester"}>First Semester</MenuItem>
              <MenuItem value={"Second Semester"} disabled>
                Second Semester
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="select-label-2">Level</InputLabel>
            <Select
              labelId="select-label-2"
              id="simple-select-2"
              value={level}
              label="Level"
              onChange={handleLevelChange}
            >
              <MenuItem value={"100"} disabled>
                Level 100
              </MenuItem>
              <MenuItem value={"200"}>Level 200</MenuItem>
              <MenuItem value={"300"}>Level 300</MenuItem>
              <MenuItem value={"400"}>Level 400</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="select-label-3">Programme</InputLabel>
            <Select
              labelId="select-label-3"
              id="simple-select-3"
              value={programme}
              label="Programme"
              onChange={handleProgrammeChange}
            >
              <MenuItem value={"IT"}>IT</MenuItem>
              <MenuItem value={"Single Major Computer Science"}>
                Single Major Computer Science
              </MenuItem>
              <MenuItem value={"Combined Major / Major Minor Computer Science"}>
                Combined Major / Major-Minor Computer Science
              </MenuItem>
              <MenuItem value={"Minor Computer Science"}>
                Minor Computer Science
              </MenuItem>
            </Select>
          </FormControl>
          <button
            className="btn bg-[#2286ea] text-white w-40"
            onClick={handleGetCourses}
          >
            Get Courses
          </button>
          <div>
            <span>Get Slides and Past Questions here: </span>
            <a
              href="https://drive.google.com/drive/u/0/folders/1WV08e8RLx3mwDwtrju0NoWshC6pf9oUb"
              target="_blank"
              className="text-[#2286ea] underline"
            >
              Drive One
            </a>
            &nbsp;and&nbsp;
            <a
              href="https://drive.google.com/drive/folders/1tfe1OxqdDB7xq7i400sNmAivCdP2B43R?usp=sharing"
              target="_blank"
              className="text-[#2286ea] underline"
            >
              Drive Two
            </a>
          </div>
        </div>
        <ShowCoursesModal courses={courses} />
      </div>
    </div>
  );
}
