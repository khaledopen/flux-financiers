import { validationResult } from 'express-validator';
export function validate(req,res,next){const errors=validationResult(req);if(!errors.isEmpty())return res.status(422).json({message:'Données invalides.',errors:errors.array()});next();}
export function errorHandler(err,req,res,next){console.error(err);if(err.code==='23505')return res.status(409).json({message:'Cette valeur existe déjà.'});res.status(err.status||500).json({message:err.message||'Erreur interne du serveur.'});}
