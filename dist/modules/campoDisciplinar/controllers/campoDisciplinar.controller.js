"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampoDisciplinarController = void 0;
const campoDisciplinar_model_1 = require("../models/campoDisciplinar.model");
class CampoDisciplinarController {
    constructor() {
        this.crearCampoDisciplinar = (req, res) => {
            const nuevaCampoDisciplinar = new campoDisciplinar_model_1.default({
                campoDisciplinar: req.body.campoDisciplinar
            });
            nuevaCampoDisciplinar.save()
                .then(campoDisciplinarCreada => {
                res.status(201).json({
                    ok: true,
                    campoDisciplinar: campoDisciplinarCreada,
                    message: 'CampoDisciplinar creada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'CampoDisciplinar no creada'
                });
            });
        };
        this.obtenerCampoDisciplinars = (req, res) => {
            campoDisciplinar_model_1.default.find()
                .then(campoDisciplinars => {
                res.status(200).json({
                    ok: true,
                    campoDisciplinars: campoDisciplinars
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: error.message
                });
            });
        };
        this.actualizarCampoDisciplinar = (req, res) => {
            campoDisciplinar_model_1.default.findByIdAndUpdate(req.params.id, {
                campoDisciplinar: req.body.campoDisciplinar
            })
                .then(campoDisciplinarActualizada => {
                res.status(200).json({
                    ok: true,
                    campoDisciplinar: campoDisciplinarActualizada,
                    message: 'CampoDisciplinar actualizada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'CampoDisciplinar no actualizada'
                });
            });
        };
        this.eliminarCampoDisciplinar = (req, res) => {
            campoDisciplinar_model_1.default.findByIdAndDelete(req.params.id)
                .then(campoDisciplinarEliminada => {
                res.status(200).json({
                    ok: true,
                    message: 'CampoDisciplinar eliminada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'CampoDisciplinar no eliminada'
                });
            });
        };
    }
}
exports.CampoDisciplinarController = CampoDisciplinarController;
//# sourceMappingURL=campoDisciplinar.controller.js.map