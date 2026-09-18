-- Après inscription avec demo@monbudget.sn, remplacez :user_id par son identifiant dans votre client SQL.
INSERT INTO transactions(libelle,montant,type,date_operation,categorie_id,user_id)
SELECT 'Salaire',350000,'revenu',CURRENT_DATE,c.id,c.user_id FROM categories c WHERE c.user_id=:user_id AND c.nom='Salaire';
INSERT INTO transactions(libelle,montant,type,date_operation,categorie_id,user_id)
SELECT 'Courses du mois',65000,'depense',CURRENT_DATE,c.id,c.user_id FROM categories c WHERE c.user_id=:user_id AND c.nom='Alimentation';
