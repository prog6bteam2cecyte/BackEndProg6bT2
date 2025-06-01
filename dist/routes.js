"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const campoDisciplinar_routes_1 = require("./modules/campoDisciplinar/routes/campoDisciplinar.routes");
const usuario_routes_1 = require("./modules/usuario/routes/usuario.routes");
class Routes {
    constructor() {
        this.usuarioRoutes = new usuario_routes_1.UsuarioRoutes();
        this.campoDisciplinarRoutes = new campoDisciplinar_routes_1.CampoDisciplinarRoutes();
    }
    routes(app) {
        this.usuarioRoutes.routes(app);
        this.campoDisciplinarRoutes.routes(app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map