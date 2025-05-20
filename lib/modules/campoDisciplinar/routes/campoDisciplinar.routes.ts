import { CampoDisciplinarController } from "../controllers/campoDisciplinar.controller";

export class CampoDisciplinarRoutes {
    private campoDisciplinarController: CampoDisciplinarController = new CampoDisciplinarController();
    public routes(app): void {
        app.route('/campoDisciplinar')
        .get(this.campoDisciplinarController.obtenerCampoDisciplinars)
        .post(this.campoDisciplinarController.crearCampoDisciplinar);

        app.route('/campoDisciplinar/:id')
        .put(this.campoDisciplinarController.actualizarCampoDisciplinar)
        .delete(this.campoDisciplinarController.eliminarCampoDisciplinar);
    }
}