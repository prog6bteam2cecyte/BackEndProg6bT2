"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CampoDisciplinarSchema = new Schema({
    campoDisciplinar: {
        type: String,
        required: [true, 'campoDisciplinar required'],
        unique: true
    }
});
const CampoDisciplinar = mongoose.model("CampoDisciplinar", CampoDisciplinarSchema);
exports.default = CampoDisciplinar;
//# sourceMappingURL=campoDisciplinar.models.js.map