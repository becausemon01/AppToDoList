export const getNumberTask = (tasks, name) => {
    if (name === "") {
        return tasks.length != 0 ? tasks.length : "";
    } else {
        let result = tasks.filter(task => task.Project === name);
        return result != 0 ? result.length : "";
    }
};

const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};

export const getId = () => {
    return "tan_" + s4() + s4() + "_" + s4() + "_" + s4() + s4() + s4() + s4();
};

export const reOder = (todoList, startIndex, endIndex) => {
    const result = Array.from(todoList);
    const [remove] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, remove);
    return result;
};

export const findIndex = (tasks, id) => {
    let result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) result = index;
    });
    return result;
};

export const getInForProject = (projects, id) => {
    // const result = projects.filter(project => project.name === name);
    // return result;
    let result = "";
    projects.map(project => {
        if (project.id === id) {
            result = project;
        }
        return { ...project };
    });
    return result;
};
