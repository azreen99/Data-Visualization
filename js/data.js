// Covid-19 DataSet
var date = [
    [0, " 4 / 7 / 2021"],
    [1, " 5 / 7 / 2021"],
    [2, " 6 / 7 / 2021"],
    [3, " 7 / 7 / 2021"],
    [4, " 8 / 7 / 2021"],
    [5, " 9 / 7 / 2021"],
    [6, " 10 / 7 / 2021"]
],
    active = [
        [0, 20],
        [1, 25],
        [2, 30],
        [3, 35],
        [4, 40]
    ],
    confirmed = [
        [0, 10],
        [1, 19],
        [2, 10],
        [3, 20],
        [4, 15]
    ],
    recovered = [
        [0, 13],
        [1, 12],
        [2, 44],
        [3, 47],
        [4, 19]
    ],
    fatal = [
        [0, 19],
        [1, 10],
        [2, 02],
        [3, 03],
        [4, 07]
    ],
    graph, states;

states = [
    [0, "Kelantan"],
    [1, "Sarawak"],
    [2, "Selangor"],
    [3, "Terengganu"],
    [4, "Melaka"]
];

// localStorage.setItem("date", JSON.stringify(date));
// localStorage.setItem("active", JSON.stringify(active));
// localStorage.setItem("confirmed", JSON.stringify(confirmed));
// localStorage.setItem("recovered", JSON.stringify(recovered));
// localStorage.setItem("fatal", JSON.stringify(fatal));
// localStorage.setItem("states", JSON.stringify(states));