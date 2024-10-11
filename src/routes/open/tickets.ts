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
let groups: Group[] = [
    {"groupNum": 1, "studentA": "Abe", "studentB": "Jeremiah", "needsHelp": false, "ticketSubmitted": undefined },
    {"groupNum": 2, "studentA": "John", "studentB": "Bob", "needsHelp": true, "ticketSubmitted": new Date() }
];
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
