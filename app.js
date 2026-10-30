const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// ====== STUDENT DETAILS ======
const STUDENT = {
  name: "Muhammad Shahzaib Rafaqat",
  rollNo: "48746",
  course: "DevOps",
};
// =============================

const startTime = Date.now();

app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: `Welcome to ${STUDENT.name}'s DevOps Node.js REST API!`,
    student: STUDENT,
    timestamp: new Date(),
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "Node.js Container API",
    owner: STUDENT.name,
    rollNo: STUDENT.rollNo,
    uptimeSeconds: Math.floor((Date.now() - startTime) / 1000),
  });
});

app.get("/about", (req, res) => {
  res.json({
    project: "Containerizing & Automating Node.js Express API",
    tools: ["Node.js", "Express", "Docker", "GitHub", "GitHub Actions"],
    student: STUDENT,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});