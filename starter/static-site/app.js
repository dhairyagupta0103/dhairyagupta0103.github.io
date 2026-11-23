async function loadProjectDetails() {
  try {
    const response = await fetch("project.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Project details could not be loaded.");
    const project = await response.json();

    const title = typeof project.title === "string" ? project.title : "My First Project";
    const summary = typeof project.summary === "string" ? project.summary : "A small idea, made real one step at a time.";
    const category = typeof project.category === "string" ? project.category : "Experiment";
    const status = typeof project.status === "string" ? project.status : "In progress";

    document.title = title;
    document.querySelector("#project-title").textContent = title;
    document.querySelector("#project-summary").textContent = summary;
    document.querySelector("#project-category").textContent = category.toUpperCase();
    document.querySelector("#project-status").textContent = status.toUpperCase();
    document.querySelector("#footer-title").textContent = title;
  } catch (error) {
    // The built-in sample text remains visible if project.json is unavailable.
    console.warn(error.message);
  }
}

loadProjectDetails();
