import { CampoDisciplinarRoutes } from "./modules/campoDisciplinar/routes/campoDisciplinar.routes";
import { UsuarioRoutes } from "./modules/usuario/routes/usuario.routes";

export class Routes {

    private usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    private campoDisciplinarRoutes: CampoDisciplinarRoutes=new CampoDisciplinarRoutes();

    public routes(app): void {
        this.usuarioRoutes.routes(app);
        this.campoDisciplinarRoutes.routes(app);
    }
}