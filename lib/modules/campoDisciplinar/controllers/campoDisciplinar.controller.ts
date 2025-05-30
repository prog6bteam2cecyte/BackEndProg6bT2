import { Request, Response } from 'express';
import * as _ from 'lodash';
import CampoDisciplinar from '../models/campoDisciplinar.models';

export class CampoDisciplinarController {
    crearCampoDisciplinar = (req: Request, res: Response) =>  {
        const nuevaCampoDisciplinar = new CampoDisciplinar({
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
        .catch(error =>{
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'CampoDisciplinar no creada'
            });
        });
    }

    obtenerCampoDisciplinars = (req: Request, res: Response) => {
        CampoDisciplinar.find()
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
    }

    actualizarCampoDisciplinar  = (req: Request, res: Response) => {
        CampoDisciplinar.findByIdAndUpdate(req.params.id, {
            campoDisciplinar: req.body.campoDisciplinar
        })
        .then(campoDisciplinarActualizada => {
            res.status(200).json(
                {
                    ok: true,
                    campoDisciplinar: campoDisciplinarActualizada,
                    message: 'CampoDisciplinar actualizada'    
                }
            );
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'CampoDisciplinar no actualizada'
            });
        });
    }

    eliminarCampoDisciplinar  = (req: Request, res: Response) => {
        CampoDisciplinar.findByIdAndDelete(req.params.id)
        .then(campoDisciplinarEliminada => {
            res.status(200).json(
                {
                    ok: true,                   
                    message: 'CampoDisciplinar eliminada'    
                }
            );
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'CampoDisciplinar no eliminada'
            });
        });
    }

    

}