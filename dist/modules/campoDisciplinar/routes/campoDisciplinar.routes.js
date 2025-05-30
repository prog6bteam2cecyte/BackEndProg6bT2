"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampoDisciplinarRoutes = void 0;
const campoDisciplinar_controller_1 = require("../controllers/campoDisciplinar.controller");
class CampoDisciplinarRoutes {
    constructor() {
        this.campoDisciplinarController = new campoDisciplinar_controller_1.CampoDisciplinarController();
    }
    routes(app) {
        app.route('/campoDisciplinar')
            .get(this.campoDisciplinarController.obtenerCampoDisciplinars)
            .post(this.campoDisciplinarController.crearCampoDisciplinar);
        app.route('/campoDisciplinar/:id')
            .put(this.campoDisciplinarController.actualizarCampoDisciplinar)
            .delete(this.campoDisciplinarController.eliminarCampoDisciplinar);
    }
}
exports.CampoDisciplinarRoutes = CampoDisciplinarRoutes;
//# sourceMappingURL=campoDisciplinar.routes.js.map