import jwt from 'jsonwebtoken';
export function protect(req,res,next){
  const token=req.headers.authorization?.replace(/^Bearer\s+/,'');
  if(!token) return res.status(401).json({message:'Authentification requise.'});
  try { req.user=jwt.verify(token,process.env.JWT_SECRET); next(); }
  catch { return res.status(401).json({message:'Session invalide ou expirée.'}); }
}
