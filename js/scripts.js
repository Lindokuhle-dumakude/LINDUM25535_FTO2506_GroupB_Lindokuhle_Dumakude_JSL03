const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// Allow to add up to 3 new tasks

for (let i = 1; i <= 3; i++) {
  // if limit reached

  if (initialTasks.length >= 6) {
    alert(
      "There are enough tasks on your board, please check them in the console."
    );
    break; // Stop loop if limit is reached
  }

  // Prompt user for  task details

  let title = prompt(`Enter the title for Task ${initialTasks.length + 1}:`);
  let description = prompt(
    `Enter the description for Task ${initialTasks.length + 1}:`
  );

  // Ask for status & validate

  let status = prompt(`Enter status (todo, doing, done):`).toLowerCase();

  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status! Please enter: todo, doing, or done.");
    status = prompt(`Enter status (todo, doing, done):`).toLowerCase();
  }

  // Create new task object

  let newTask = {
    id: initialTasks.length + 1, // increment ID
    title: title,
    description: description,
    status: status,
  };

  // Add new task to array

  initialTasks.push(newTask);
}
