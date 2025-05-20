import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface ICampoDisciplinar extends mongoose.Document {  
    campoDisciplinar: string;
}

 const CampoDisciplinarSchema = new Schema(
    {
        campoDisciplinar: {
            type: String,
            required: [true, 'campoDisciplinar required'],
            unique: true
        }
    }
    
 );

const CampoDisciplinar = mongoose.model<ICampoDisciplinar>("CampoDisciplinar", CampoDisciplinarSchema);
export default CampoDisciplinar;