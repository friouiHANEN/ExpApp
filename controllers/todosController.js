import express from "express";

export const getAllNotes = (req, res) => {
  res.send("All notes");
};
export const getSingle = (req, res) => {
  res.send("Single Note");
};
