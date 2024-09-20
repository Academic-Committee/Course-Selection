"use client";
import React from "react";
import { programContent } from "../types";

export const ShowCoursesModal = ({
  courses,
}: {
  courses: programContent | undefined;
}) => {
  return (
    <dialog id="courses_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div className="overflow-x-auto">
          <h2 className="text-left text-2xl font-bold mt-4 text-[#2286ea]">
            {courses?.header}
          </h2>
          <p className="text-left text-sm italic mt-4 text-gray-500">
            {courses?.description}
          </p>
          <h2 className="text-left text-xl font-bold mt-4">Core Courses</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Title</th>
                <th>Credits</th>
              </tr>
            </thead>
            {courses?.courses
              .filter((course) => course.type === "core")
              .map((course, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{course.code}</td>
                    <td>{course.title}</td>
                    <td>{course.credits}</td>
                  </tr>
                </tbody>
              ))}
          </table>

          <h2 className="text-left text-xl font-bold mt-4">Elective Courses</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Title</th>
                <th>Credits</th>
              </tr>
            </thead>
            {courses?.courses
              .filter((course) => course.type === "elective")
              .map((course, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{course.code}</td>
                    <td>{course.title}</td>
                    <td>{course.credits}</td>
                  </tr>
                </tbody>
              ))}
            {courses?.courses.filter((course) => course.type === "elective")
              .length === 0 && (
              <div className="text-center w-full">No Electives Available</div>
            )}
          </table>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn bg-[#2286ea] text-white">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
