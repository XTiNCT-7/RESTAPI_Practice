const DB = require("./db.json");

const getRecordForWorkout  = (workoutId)=>{
    try {
        const record = DB.records.filter((record)=>record.workout === workoutId);
        if (!record) {
            throw{
                status:400,
                message:`can't find workout with the id '${workoutId}'`
            };
        }
        return record;
    } catch (error) {
        throw {statis:error?.status || 500,message:error?.message||error};
    }
};

module.exports = {getRecordForWorkout};