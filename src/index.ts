import { deleteAllDocumentsByState } from './rapconector/index';
import dotenv from 'dotenv';

dotenv.config();

const stateArgv = process.argv[1];

export async function deleteDocumentsByState() {
    console.log("stateArgv, " + stateArgv);
    
    await deleteAllDocumentsByState(Number(stateArgv));
};
