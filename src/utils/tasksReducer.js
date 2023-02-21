const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [action.newTask, ...tasks];
    }
    case "edited": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((task) => task.id !== action.taskId);
    }
    case "cleared": {
      return tasks.filter((task) => task.status === "active");
    }
    case "dragged": {
      return action.newTasks;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default tasksReducer;
