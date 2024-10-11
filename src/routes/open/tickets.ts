// express is the framework we're going to use to handle requests
import express, { Request, Response, Router } from 'express';

// retrieve the router object from express
const ticketsRouter: Router = express.Router();


//   ~ TODO REPLACE WITH DATABASE ~
interface Group {
    groupNum: number;
    studentA: string;
    studentB: string;
    needsHelp: boolean;
    ticketSubmitted: Date;
}
function genGroups(): Group[] {
    const NUM_NAMES: number = 72;
    const NUM_GROUPS: number = NUM_NAMES / 2;
    const NAMES: string[] = [
        "Nigel Bates", "Isabella Huynh", "Reginald Hoover", "Tobias Meyers", "Dorian Berry", "Bessie Villa", "Shelia Gutierrez", "Claudio Shields",
        "Tommy Russo", "Sam Knox", "Terence Cardenas", "Pete Oconnell", "Grant Mayer", "Nikki Mcbride", "Nona Simon", "Long Perkins",
        "Sue Wheeler", "Mikel Jacobs", "Romeo Larson", "Leslie Hardin", "Brenda Stevenson", "Letitia Reese", "Bennie Baker", "Alexandra Vaughan",
        "Minerva Mathis", "Giuseppe Jensen", "Kerry Carroll", "Lavonne Brock", "Hollie Fuller", "Tamika Carlson", "Marion Richmond", "Oswaldo Cox",
        "Denver Mckee", "Jamaal Edwards", "Lessie Mercer", "Glenna Nielsen", "Renaldo Dickerson", "Serena Li", "Thurman Yates", "Guadalupe Sharp",
        "Ramona Buchanan", "Gail Weeks", "Dana Roberson", "Lesa Bradford", "Tanisha Flowers", "Roderick Carey", "Angelique Warren", "Rosalind Rosario",
        "Jamel Tate", "Francesco Hansen", "Isreal Jordan", "Sadie Ritter", "Lazaro Richardson", "Darnell Whitaker", "Ronnie Carney", "Kareem Burton",
        "Merle Thompson", "Walton Mejia", "Bonita Bullock", "Colton Boone", "Derick Parsons", "Kris Hays", "Rosemary Stuart", "Lillie Cabrera",
        "Bradly Anderson", "Chang Mullins", "Kristi Deleon", "Louis Bryan", "Darrell Weiss", "Brendon Trevino", "Jodie Strickland", "Madge Hester"
    ];
    if (NAMES.length != NUM_NAMES) { throw Error("Invalid number of names.") };
    
    let output: Group[] = new Array<Group>(NUM_GROUPS);
    for(let i = 0; i < NUM_GROUPS; i++) {
        let needsHelp: boolean = Math.random() < 0.2;
        let ticketSubmitted: Date = undefined;
        if (needsHelp) {
            ticketSubmitted = new Date();
            ticketSubmitted.setSeconds(Math.floor( Math.random() * 59 ));
            ticketSubmitted.setMinutes(Math.floor( Math.random() * 59 ));
        }
        output[i] = {
            "groupNum": i + 1,
            "studentA": NAMES[i * 2],
            "studentB": NAMES[i * 2 + 1],
            "needsHelp": needsHelp,
            "ticketSubmitted": ticketSubmitted
        };
    }

    return output;
}
let groups: Group[] = genGroups();
/*let groups: Group[] = [
    {"groupNum": 1, "studentA": "Abe", "studentB": "Jeremiah", "needsHelp": false, "ticketSubmitted": undefined },
    {"groupNum": 2, "studentA": "John", "studentB": "Bob", "needsHelp": true, "ticketSubmitted": new Date() }
];*/
//   ~ TODO REPLACE WITH DATABASE ~


ticketsRouter.get('/', (request: Request, response: Response) => {
    response.send(groups);
});

ticketsRouter.put('/', (request: Request, response: Response) => {
    let relevantGroup: Group = groups.find(x => x.groupNum === request.body.groupNum);
    
    if (request.body.needsHelp) {
        if (!relevantGroup.needsHelp) {
            relevantGroup.needsHelp = true;
            relevantGroup.ticketSubmitted = new Date();
        }
    } else {
        relevantGroup.needsHelp = false;
        relevantGroup.ticketSubmitted = undefined;
    }

    //response.sendStatus(200);


    // used currently for debugging
    response.send(groups);
});


// Make the router object visible to outside modules
export { ticketsRouter };
