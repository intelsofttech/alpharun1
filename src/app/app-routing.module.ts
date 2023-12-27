import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./first/first.module').then( m => m.FirstPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.module').then( m => m.CountryPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'recette/:param1/:param2',
    loadChildren: () => import('./recette/recette.module').then( m => m.RecettePageModule)
  },
  {
    path: 'depense/:param1/:param2',
    loadChildren: () => import('./depense/depense.module').then( m => m.DepensePageModule)
  },
  {  
    path: 'categorie/:param1/:param2',
    loadChildren: () => import('./categorie/categorie.module').then( m => m.CategoriePageModule)
  },
  {  
    path: 'categoryproject/:param1/:param2',
    loadChildren: () => import('./categoriepro/categorie.module').then( m => m.CategoriePageModule)
  },
  {  
    path: 'serviceproject/:param1/:param2',
    loadChildren: () => import('./categoriepro/categorie.module').then( m => m.CategoriePageModule)
  },
  {  
    path: 'localiteproject/:param1/:param2',
    loadChildren: () => import('./categoriepro/categorie.module').then( m => m.CategoriePageModule)
  },
  {  
    path: 'materielproject/:param1/:param2',
    loadChildren: () => import('./categoriepro/categorie.module').then( m => m.CategoriePageModule)
  },
  {  
    path: 'niveauproject/:param1/:param2/:param3',
    loadChildren: () => import('./categoriepro/categorie.module').then( m => m.CategoriePageModule)
  },
  {
    path: 'membre/:param1/:param2/:param3',
    loadChildren: () => import('./membre/membre.module').then( m => m.MembrePageModule)
  },
  {
    path: 'departement',
    loadChildren: () => import('./departement/departement.module').then( m => m.DepartementPageModule)
  },
  {
    path: 'annonce',
    loadChildren: () => import('./annonce/annonce.module').then( m => m.AnnoncePageModule)
  },
  {
    path: 'carte',
    loadChildren: () => import('./carte/carte.module').then( m => m.CartePageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'motdepasse',
    loadChildren: () => import('./motdepasse/motdepasse.module').then( m => m.MotdepassePageModule)
  },
  {
    path: 'parametre',
    loadChildren: () => import('./parametre/parametre.module').then( m => m.ParametrePageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'mouvementproduit/:param1/:param2/:param3',
    loadChildren: () => import('./mouvementproduit/mouvementproduit.module').then( m => m.MouvementproduitPageModule)
  },
  {
    path: 'partner/:param1/:param2',
    loadChildren: () => import('./partner/partner.module').then( m => m.PartnerPageModule)
  },
  {
    path: 'agentpro/:param1/:param2',
    loadChildren: () => import('./agent/partner.module').then( m => m.PartnerPageModule)
  },
  {
    path: 'selectpartner/:param1/:param2',
    loadChildren: () => import('./partnerselection/partner.module').then( m => m.PartnerPageModule)
  },
  {
    path: 'bill/:param1/:param2/:param3/:param4',
    loadChildren: () => import('./bill/bill.module').then( m => m.BillPageModule)
  },
  {
    path: 'billin/:param1/:param2/:param3/:param4',
    loadChildren: () => import('./bill/bill.module').then( m => m.BillPageModule)
  },
  {
    path: 'billcaisse/:param1/:param2/:param3',
    loadChildren: () => import('./billcaisse/bill.module').then( m => m.BillPageModule)
  },
  {
    path: 'etablissement',
    loadChildren: () => import('./etablissement/etablissement.module').then( m => m.EtablissementPageModule)
  },
  {
    path: 'users/:param1/:param2',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'caisse',
    loadChildren: () => import('./caisse/caisse.module').then( m => m.CaissePageModule)
  },
  {
    path: 'billdetail/:param1/:param2/:param3',
    loadChildren: () => import('./billdetail/billdetail.module').then( m => m.BilldetailPageModule)
  },
  {
    path: 'operation/:param1/:param2',
    loadChildren: () => import('./operation/operation.module').then( m => m.OperationPageModule)
  },
  {
    path: 'addoperation/:param1/:param2/:param3',
    loadChildren: () => import('./addoperation/newoperation.module').then( m => m.NewoperationPageModule)
  },
  {
    path: 'newoperation',
    loadChildren: () => import('./newoperation/newoperation.module').then( m => m.NewoperationPageModule)
  },
  {
    path: 'params/:param1/:param2',
    loadChildren: () => import('./params/params.module').then( m => m.ParamsPageModule)
  },
  {
    path: 'paramsdetail/:param1/:param2',
    loadChildren: () => import('./paramsdetail/paramsdetail.module').then( m => m.ParamsdetailPageModule)
  },
  {
    path: 'project/:param1/:param2/:param3',
    loadChildren: () => import('./project/project.module').then( m => m.ProjectPageModule)
  },
  {
    path: 'first',
    loadChildren: () => import('./first/first.module').then( m => m.FirstPageModule)
  },
  {
    path: 'addtocart',
    loadChildren: () => import('./addtocart/addtocart.module').then( m => m.AddtocartPageModule)
  },
  {
    path: 'projectdetail/:param1/:param2',
    loadChildren: () => import('./projectdetail/projectdetail.module').then( m => m.ProjectdetailPageModule)
  },
  {
    path: 'projectbill',
    loadChildren: () => import('./projectbill/projectbill.module').then( m => m.ProjectbillPageModule)
  },
  {
    path: 'bilan',
    loadChildren: () => import('./bilan/bilan.module').then( m => m.BilanPageModule)
  },
  {
    path: 'membredetail/:param1/:param2',
    loadChildren: () => import('./membredetail/membredetail.module').then( m => m.MembredetailPageModule)
  },
  {
    path: 'membreselected/:param1/:param2/:param3',
    loadChildren: () => import('./membreselected/membreselected.module').then( m => m.MembreselectedPageModule)
  },
  {
    path: 'billedition',
    loadChildren: () => import('./billedition/billedition.module').then( m => m.BilleditionPageModule)
  },
  {
    path: 'membreselection/:param1/:param2/:param3',
    loadChildren: () => import('./membreselection/membreselection.module').then( m => m.MembreselectionPageModule)
  },
  {
    path: 'type-chambre/:param1/:param2',
    loadChildren: () => import('./type-chambre/type-chambre.module').then( m => m.TypeChambrePageModule)
  },
  {
    path: 'chambre/:param1/:param2',
    loadChildren: () => import('./chambre/chambre.module').then( m => m.ChambrePageModule)
  },
  {
    path: 'membregroupe/:param1/:param2/:param3',
    loadChildren: () => import('./membregroupe/membregroupe.module').then( m => m.MembregroupePageModule)
  },
  {
    path: 'cotisation/:param1/:param2',
    loadChildren: () => import('./cotisation/cotisation.module').then( m => m.CotisationPageModule)
  },
  {
    path: 'listecotisations/:param1/:param2',
    loadChildren: () => import('./listecotisations/listecotisations.module').then( m => m.ListecotisationsPageModule)
  },
  {
    path: 'saisiecotisation/:param1/:param2/:param3',
    loadChildren: () => import('./saisiecotisation/saisiecotisation.module').then( m => m.SaisiecotisationPageModule)
  },
  {
    path: 'editioncotisation/:param1/:param2/:param3/:param4/:param5',
    loadChildren: () => import('./editioncotisation/editioncotisation.module').then( m => m.EditioncotisationPageModule)
  },
  {
    path: 'validatebill/:param1/:param2/:param3/:param4',
    loadChildren: () => import('./validatebill/validatebill.module').then( m => m.ValidatebillPageModule)
  },
  {
    path: 'billstatusall/:param1/:param2/:param3/:param4/:param5',
    loadChildren: () => import('./billstatus/validatebill.module').then( m => m.ValidatebillPageModule)
  },
  {
    path: 'billstatusattente/:param1/:param2/:param3/:param4/:param5',
    loadChildren: () => import('./billstatus/validatebill.module').then( m => m.ValidatebillPageModule)
  },
  {
    path: 'billstatustransmis/:param1/:param2/:param3/:param4/:param5',
    loadChildren: () => import('./billstatus/validatebill.module').then( m => m.ValidatebillPageModule)
  },
  {
    path: 'billstatusvalide/:param1/:param2/:param3/:param4/:param5',
    loadChildren: () => import('./billstatus/validatebill.module').then( m => m.ValidatebillPageModule)
  },
  {
    path: 'billstatusapprouve/:param1/:param2/:param3/:param4/:param5',
    loadChildren: () => import('./billstatus/validatebill.module').then( m => m.ValidatebillPageModule)
  },
  {
    path: 'billstatusdecaisse/:param1/:param2/:param3/:param4/:param5',
    loadChildren: () => import('./billstatus/validatebill.module').then( m => m.ValidatebillPageModule)
  },
  {
    path: 'billstatusrejete/:param1/:param2/:param3/:param4/:param5',
    loadChildren: () => import('./billstatus/validatebill.module').then( m => m.ValidatebillPageModule)
  },
  {
    path: 'billstatus/:param1/:param2/:param3/:param4/:param5',
    loadChildren: () => import('./billstatus/validatebill.module').then( m => m.ValidatebillPageModule)
  },
  {
    path: 'hebergementnuite/:param1/:param2/:param3/:param4',
    loadChildren: () => import('./hebergementnuite/hebergementnuite.module').then( m => m.HebergementnuitePageModule)
  },
  {
    path: 'disponibilite',
    loadChildren: () => import('./disponibilite/disponibilite.module').then( m => m.DisponibilitePageModule)
  },
  {
    path: 'hebergementday',
    loadChildren: () => import('./hebergementday/hebergementday.module').then( m => m.HebergementdayPageModule)
  },
  {
    path: 'selectionchambre/:param1/:param2/:param3/:param4/:param5',
    loadChildren: () => import('./selectionchambre/selectionchambre.module').then( m => m.SelectionchambrePageModule)
  },
  {
    path: 'hebergementdetail',
    loadChildren: () => import('./hebergementdetail/hebergementdetail.module').then( m => m.HebergementdetailPageModule)
  },
  {
    path: 'menu/:param1/:param2',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./learning/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'filiere',
    loadChildren: () => import('./learning/filiere/filiere.module').then( m => m.FilierePageModule)
  },
  {
    path: 'matiere',
    loadChildren: () => import('./learning/matiere/matiere.module').then( m => m.MatierePageModule)
  },
  {
    path: 'matiereniveau/:param1/:param2/:param3',
    loadChildren: () => import('./learning/matiereniveau/matiereniveau.module').then( m => m.MatiereniveauPageModule)
  },
  {
    path: 'typematiere',
    loadChildren: () => import('./learning/typematiere/typematiere.module').then( m => m.TypematierePageModule)
  },
  {
    path: 'niveau',
    loadChildren: () => import('./learning/niveau/niveau.module').then( m => m.NiveauPageModule)
  },
  {
    path: 'classe',
    loadChildren: () => import('./learning/classe/classe.module').then( m => m.ClassePageModule)
  },
  {
    path: 'periode/:param1/:param2/:param3',
    loadChildren: () => import('./learning/periode/periode.module').then( m => m.PeriodePageModule)
  },
  {
    path: 'confignote/:param1/:param2/:param3',
    loadChildren: () => import('./learning/confignote/confignote.module').then( m => m.ConfignotePageModule)
  },
  {
    path: 'note',
    loadChildren: () => import('./learning/note/note.module').then( m => m.NotePageModule)
  },
  {
    path: 'saisienote',
    loadChildren: () => import('./learning/saisienote/saisienote.module').then( m => m.SaisienotePageModule)
  },
  {
    path: 'moyenne',
    loadChildren: () => import('./learning/moyenne/moyenne.module').then( m => m.MoyennePageModule)
  },
  {
    path: 'bulletin',
    loadChildren: () => import('./learning/bulletin/bulletin.module').then( m => m.BulletinPageModule)
  },
  {
    path: 'agent',
    loadChildren: () => import('./learning/agent/agent.module').then( m => m.AgentPageModule)
  },
  {
    path: 'selectenseignant',
    loadChildren: () => import('./learning/selectenseignant/enseignant.module').then( m => m.EnseignantPageModule)
  },
  {
    path: 'enseignant/:param1/:param2',
    loadChildren: () => import('./learning/enseignant/enseignant.module').then( m => m.EnseignantPageModule)
  },
  {
    path: 'presence',
    loadChildren: () => import('./learning/presence/presence.module').then( m => m.PresencePageModule)
  },
  {
    path: 'absence',
    loadChildren: () => import('./learning/absence/absence.module').then( m => m.AbsencePageModule)
  },
  {
    path: 'pointpresence/:param1/:param2/:param3',
    loadChildren: () => import('./learning/pointpresence/pointpresence.module').then( m => m.PointpresencePageModule)
  },
  {
    path: 'pointabsence',
    loadChildren: () => import('./learning/pointabsence/pointabsence.module').then( m => m.PointabsencePageModule)
  },
  {
    path: 'bulletinpaie',
    loadChildren: () => import('./learning/bulletinpaie/bulletinpaie.module').then( m => m.BulletinpaiePageModule)
  },
  {
    path: 'retrait',
    loadChildren: () => import('./wallet/retrait/retrait.module').then( m => m.RetraitPageModule)
  },
  {
    path: 'depot',
    loadChildren: () => import('./wallet/depot/depot.module').then( m => m.DepotPageModule)
  },
  {
    path: 'facture',
    loadChildren: () => import('./wallet/facture/facture.module').then( m => m.FacturePageModule)
  },
  {
    path: 'other',
    loadChildren: () => import('./wallet/other/other.module').then( m => m.OtherPageModule)
  },
  {
    path: 'colis',
    loadChildren: () => import('./wallet/colis/colis.module').then( m => m.ColisPageModule)
  },
  {
    path: 'compte',
    loadChildren: () => import('./wallet/compte/compte.module').then( m => m.ComptePageModule)
  },
  {
    path: 'finance',
    loadChildren: () => import('./wallet/finance/finance.module').then( m => m.FinancePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./wallet/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'data',
    loadChildren: () => import('./wallet/data/data.module').then( m => m.DataPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./learning/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'configschool/:param1/:param2/:param3',
    loadChildren: () => import('./learning/config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'filierenote',
    loadChildren: () => import('./learning/filierenote/filierenote.module').then( m => m.FilierenotePageModule)
  },
  {
    path: 'typefrais/:param1/:param2/:param3',
    loadChildren: () => import('./learning/typefrais/typefrais.module').then( m => m.TypefraisPageModule)
  },
  {
    path: 'frais',
    loadChildren: () => import('./learning/frais/frais.module').then( m => m.FraisPageModule)
  },
  {
    path: 'horaire/:param1/:param2/:param3',
    loadChildren: () => import('./learning/horaire/horaire.module').then( m => m.HorairePageModule)
  },
  {
    path: 'classematiere/:param1/:param2/:param3',
    loadChildren: () => import('./learning/classematiere/classematiere.module').then( m => m.ClassematierePageModule)
  },
  {
    path: 'enseignantmatiere/:param1/:param2',
    loadChildren: () => import('./learning/enseignantmatiere/enseignantmatiere.module').then( m => m.EnseignantmatierePageModule)
  },
  {
    path: 'right',
    loadChildren: () => import('./right/right.module').then( m => m.RightPageModule)
  },
  {
    path: 'productstock',
    loadChildren: () => import('./productstock/productstock.module').then( m => m.ProductstockPageModule)
  },
  {
    path: 'partners',
    loadChildren: () => import('./partners/partners.module').then( m => m.PartnersPageModule)
  },
  {
    path: 'partnerbill/:param1/:param2/:param3/:param4/:param5',
    loadChildren: () => import('./partnerbill/partnerbill.module').then( m => m.PartnerbillPageModule)
  },
  {
    path: 'productselection',
    loadChildren: () => import('./productselection/productselection.module').then( m => m.ProductselectionPageModule)
  },
  {
    path: 'productmouv',
    loadChildren: () => import('./productmouv/productmouv.module').then( m => m.ProductmouvPageModule)
  },
  {
    path: 'typeoperation/:param1/:param2',
    loadChildren: () => import('./typeoperation/typeoperation.module').then( m => m.TypeoperationPageModule)
  },
  {
    path: 'ajoutcotisation',
    loadChildren: () => import('./ajoutcotisation/ajoutcotisation.module').then( m => m.AjoutcotisationPageModule)
  },
  {
    path: 'editcotisation',
    loadChildren: () => import('./editcotisation/editcotisation.module').then( m => m.EditcotisationPageModule)
  },
  {
    path: 'newcotisation',
    loadChildren: () => import('./newcotisation/newcotisation.module').then( m => m.NewcotisationPageModule)
  },
  {
    path: 'editfiliere',
    loadChildren: () => import('./learning/editfiliere/editfiliere.module').then( m => m.EditfilierePageModule)
  },
  {
    path: 'editmatiereniveau/:param1/:param2/:param3',
    loadChildren: () => import('./learning/editmatiereniveau/editmatiereniveau.module').then( m => m.EditmatiereniveauPageModule)
  },
  {
    path: 'program/:param1/:param2/:param3',
    loadChildren: () => import('./learning/program/program.module').then( m => m.ProgramPageModule)
  },
  {
    path: 'programcontent/:param1/:param2/:param3/:param4',
    loadChildren: () => import('./learning/programcontent/programcontent.module').then( m => m.ProgramcontentPageModule)
  },
  {
    path: 'contentdetail/:param1/:param2',
    loadChildren: () => import('./learning/contentdetail/contentdetail.module').then( m => m.ContentdetailPageModule)
  },
  {
    path: 'typeprogram/:param1/:param2',
    loadChildren: () => import('./learning/typeprogram/typeprogram.module').then( m => m.TypeprogramPageModule)
  },
  {
    path: 'printbill',
    loadChildren: () => import('./printbill/printbill.module').then( m => m.PrintbillPageModule)
  },
  {
    path: 'student/:param1/:param2/:param3',
    loadChildren: () => import('./learning/student/student.module').then( m => m.StudentPageModule)
  },
  {
    path: 'configemploi/:param1/:param2/:param3',
    loadChildren: () => import('./learning/configemploi/configemploi.module').then( m => m.ConfigemploiPageModule)
  },
  {
    path: 'editemploi/:param1/:param2/:param3',
    loadChildren: () => import('./learning/editemploi/editemploi.module').then( m => m.EditemploiPageModule)
  },
  {
    path: 'addemploi/:param1/:param2/:param3',
    loadChildren: () => import('./learning/addemploi/addemploi.module').then( m => m.AddemploiPageModule)
  },
  {
    path: 'filiereenseign',
    loadChildren: () => import('./learning/filiereenseign/filiereenseign.module').then( m => m.FiliereenseignPageModule)
  },
  {
    path: 'emploienseign/:param1/:param2/:param3',
    loadChildren: () => import('./learning/emploienseign/emploienseign.module').then( m => m.EmploienseignPageModule)
  },
  {
    path: 'editconfigclass',
    loadChildren: () => import('./learning/editconfigclass/editconfigclass.module').then( m => m.EditconfigclassPageModule)
  },
  {
    path: 'editemploiclassone/:param1/:param2/:param3',
    loadChildren: () => import('./learning/editemploiclassone/editemploiclassone.module').then( m => m.EditemploiclassonePageModule)
  },
  {
    path: 'editemploiclassall',
    loadChildren: () => import('./learning/editemploiclassall/editemploiclassall.module').then( m => m.EditemploiclassallPageModule)
  },
  {
    path: 'editemploienseignone/:param1/:param2/:param3',
    loadChildren: () => import('./learning/editemploienseignone/editemploienseignone.module').then( m => m.EditemploienseignonePageModule)
  },
  {
    path: 'editemploienseignall',
    loadChildren: () => import('./learning/editemploienseignall/editemploienseignall.module').then( m => m.EditemploienseignallPageModule)
  },
  {
    path: 'editemploienseignjour',
    loadChildren: () => import('./learning/editemploienseignjour/editemploienseignjour.module').then( m => m.EditemploienseignjourPageModule)
  },
  {
    path: 'editemploiclassjour',
    loadChildren: () => import('./learning/editemploiclassjour/editemploiclassjour.module').then( m => m.EditemploiclassjourPageModule)
  },
  {
    path: 'saisiepresenceens/:param1/:param2/:param3',
    loadChildren: () => import('./learning/saisiepresenceens/saisiepresenceens.module').then( m => m.SaisiepresenceensPageModule)
  },
  {
    path: 'saisieabsence/:param1/:param2/:param3',
    loadChildren: () => import('./learning/saisieabsence/saisieabsence.module').then( m => m.SaisieabsencePageModule)
  },
  {
    path: 'validatepresence',
    loadChildren: () => import('./learning/validatepresence/validatepresence.module').then( m => m.ValidatepresencePageModule)
  },
  {
    path: 'validateabsence',
    loadChildren: () => import('./learning/validateabsence/validateabsence.module').then( m => m.ValidateabsencePageModule)
  },
  {
    path: 'editpresenceens/:param1',
    loadChildren: () => import('./learning/editpresenceens/editpresenceens.module').then( m => m.EditpresenceensPageModule)
  },
  {
    path: 'pays',
    loadChildren: () => import('./pays/pays.module').then( m => m.PaysPageModule)
  },
  {
    path: 'ville',
    loadChildren: () => import('./ville/ville.module').then( m => m.VillePageModule)
  },
  {
    path: 'secteur',
    loadChildren: () => import('./secteur/secteur.module').then( m => m.SecteurPageModule)
  },
  {
    path: 'diplome',
    loadChildren: () => import('./diplome/diplome.module').then( m => m.DiplomePageModule)
  },
  {
    path: 'editpresence/:param1/:param2/:param3',
    loadChildren: () => import('./learning/editpresence/editpresence.module').then( m => m.EditpresencePageModule)
  },
  {
    path: 'classeabsences',
    loadChildren: () => import('./learning/classeabsences/classeabsences.module').then( m => m.ClasseabsencesPageModule)
  },
  {
    path: 'saisieabsenceseleves/:param1/:param2/:param3/:param4/:param5/:param6/:param7/:param8/:param9',
    loadChildren: () => import('./learning/saisieabsenceseleves/saisieabsenceseleves.module').then( m => m.SaisieabsenceselevesPageModule)
  },
  {
    path: 'addabsenceseleves',
    loadChildren: () => import('./learning/addabsenceseleves/addabsenceseleves.module').then( m => m.AddabsenceselevesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./gestionimmo/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'gestion/partner/:param1/:param2',
    loadChildren: () => import('./gestionimmo/partner/partner.module').then( m => m.PartnerPageModule)
  },
  {
    path: 'gestion/partnerselect/:param1/:param2',
    loadChildren: () => import('./gestionimmo/partner/partner.module').then( m => m.PartnerPageModule)
  },
  {
    path: 'gestion/property/:param1/:param2',
    loadChildren: () => import('./gestionimmo/property/property.module').then( m => m.PropertyPageModule)
  },
  {
    path: 'gestion/apartment/:param1/:param2/:param3',
    loadChildren: () => import('./gestionimmo/apartment/apartment.module').then( m => m.ApartmentPageModule)
  },
  {  
    path: 'gestion/categorie/:param1/:param2',
    loadChildren: () => import('./gestionimmo/categorie/categorie.module').then( m => m.CategoriePageModule)
  },
  {
    path: 'location/:param1/:param2/:param3',
    loadChildren: () => import('./gestionimmo/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'newlocation',
    loadChildren: () => import('./gestionimmo/newlocation/newlocation.module').then( m => m.NewlocationPageModule)
  },
  {
    path: 'apartmentstatus',
    loadChildren: () => import('./gestionimmo/apartmentstatus/apartmentstatus.module').then( m => m.ApartmentstatusPageModule)
  },
  {
    path: 'partnerselected',
    loadChildren: () => import('./gestionimmo/partnerselected/partnerselected.module').then( m => m.PartnerselectedPageModule)
  },
  {
    path: 'partnermodal',
    loadChildren: () => import('./partnermodal/partnermodal.module').then( m => m.PartnermodalPageModule)
  },
  {
    path: 'partnercontrat',
    loadChildren: () => import('./partnercontrat/partnercontrat.module').then( m => m.PartnercontratPageModule)
  },
  {
    path: 'ajoutquittance',
    loadChildren: () => import('./ajoutquittance/ajoutquittance.module').then( m => m.AjoutquittancePageModule)
  },
  {
    path: 'gestionimmoquittance',
    loadChildren: () => import('./gestionimmoquittance/gestionimmoquittance.module').then( m => m.GestionimmoquittancePageModule)
  },
  {
    path: 'quittance/:param1/:param2',
    loadChildren: () => import('./gestionimmo/quittance/quittance.module').then( m => m.QuittancePageModule)
  },
  
  {
    path: 'editquittance/:param1/:param2/:param3/:param4',
    loadChildren: () => import('./gestionimmo/editquittance/editquittance.module').then( m => m.EditquittancePageModule)
  },
  {
    path: 'locationdetail',
    loadChildren: () => import('./gestionimmo/locationdetail/locationdetail.module').then( m => m.LocationdetailPageModule)
  },
  {
    path: 'locationquittanceprint/:param1',
    loadChildren: () => import('./gestionimmo/locationprint2/locationprint.module').then( m => m.LocationprintPageModule)
  },
  {
    path: 'locationprint/:param1',
    loadChildren: () => import('./gestionimmo/locationprint/locationprint.module').then( m => m.LocationprintPageModule)
  },
  {
    path: 'quittanceprint/:param1',
    loadChildren: () => import('./gestionimmo/quittanceprint/quittanceprint.module').then( m => m.QuittanceprintPageModule)
  },
  {
    path: 'quittancepartner/:param1/:param2/:param3/:param4',
    loadChildren: () => import('./gestionimmo/quittancepartner/quittancepartner.module').then( m => m.QuittancepartnerPageModule)
  },
  {
    path: 'billprint/:param1/:param2/:param3',
    loadChildren: () => import('./billprint/billprint.module').then( m => m.BillprintPageModule)
  },
  {
    path: 'editabsences/:param1/:param2/:param3',
    loadChildren: () => import('./learning/editabsences/editabsences.module').then( m => m.EditabsencesPageModule)
  },
  {
    path: 'editabsenceseleve/:param1/:param2/:param3',
    loadChildren: () => import('./learning/editabsenceseleve/editabsenceseleve.module').then( m => m.EditabsenceselevePageModule)
  },
  {
    path: 'editpointabsences',
    loadChildren: () => import('./learning/editpointabsences/editpointabsences.module').then( m => m.EditpointabsencesPageModule)
  },
  {
    path: 'saisienotes/:param1/:param2/:param3',
    loadChildren: () => import('./learning/saisienotes/saisienotes.module').then( m => m.SaisienotesPageModule)
  },
  {
    path: 'saisienoteseleve/:param1/:param2/:param3',
    loadChildren: () => import('./learning/saisienoteseleve/saisienoteseleve.module').then( m => m.SaisienoteselevePageModule)
  },
  {
    path: 'promotion/property/:param1/:param2',
    loadChildren: () => import('./promotionimmo/propriete/propriete.module').then( m => m.ProprietePageModule)
  },
  {
    path: 'ilot/:param1/:param2/:param3',
    loadChildren: () => import('./promotionimmo/ilot/ilot.module').then( m => m.IlotPageModule)
  },
  {
    path: 'souscripteur/:param1/:param2',
    loadChildren: () => import('./promotionimmo/partner/partner.module').then( m => m.PartnerPageModule)
  },
  {
    path: 'souscription/:param1/:param2/:param3',
    loadChildren: () => import('./promotionimmo/souscription/souscription.module').then( m => m.SouscriptionPageModule)
  },
  {
    path: 'souscriptiondetail/:param1/:param2',
    loadChildren: () => import('./promotionimmo/souscriptiondetail/souscriptiondetail.module').then( m => m.SouscriptiondetailPageModule)
  },
  {
    path: 'ilotstatus',
    loadChildren: () => import('./promotionimmo/ilotstatus/ilotstatus.module').then( m => m.IlotstatusPageModule)
  },
  {
    path: 'lot/:param1/:param2/:param3/:param4',
    loadChildren: () => import('./promotionimmo/lot/lot.module').then( m => m.LotPageModule)
  },
  {
    path: 'lotilot',
    loadChildren: () => import('./promotionimmo/lotilot/lotilot.module').then( m => m.LotilotPageModule)
  },
  {
    path: 'selectpartner',
    loadChildren: () => import('./promotionimmo/selectpartner/selectpartner.module').then( m => m.SelectpartnerPageModule)
  },
  {
    path: 'selectlot',
    loadChildren: () => import('./promotionimmo/selectlot/selectlot.module').then( m => m.SelectlotPageModule)
  },
  {
    path: 'planningpayment/:param1/:param2/:param3',
    loadChildren: () => import('./promotionimmo/planningpayment/planningpayment.module').then( m => m.PlanningpaymentPageModule)
  },
  {
    path: 'payment/:param1/:param2/:param3/:param4',
    loadChildren: () => import('./promotionimmo/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'arriere/:param1/:param2',
    loadChildren: () => import('./gestionimmo/arriere/arriere.module').then( m => m.ArrierePageModule)
  },
  {
    path: 'dette/:param1/:param2',
    loadChildren: () => import('./gestionimmo/dette/dette.module').then( m => m.DettePageModule)
  },
  {
    path: 'car/:param1/:param2',
    loadChildren: () => import('./gestionauto/car/car.module').then( m => m.CarPageModule)
  },
  {
    path: 'investissement/:param1/:param2',
    loadChildren: () => import('./gestionauto/investissement/investissement.module').then( m => m.InvestissementPageModule)
  },
  {
    path: 'chargefixe/:param1/:param2/:param3/:param4',
    loadChildren: () => import('./gestionauto/chargefixe/chargefixe.module').then( m => m.ChargefixePageModule)
  },
  {
    path: 'chargevariable/:param1/:param2',
    loadChildren: () => import('./gestionauto/chargevariable/chargevariable.module').then( m => m.ChargevariablePageModule)
  },
  {
    path: 'cardetail/:param1/:param2',
    loadChildren: () => import('./gestionauto/cardetail/cardetail.module').then( m => m.CardetailPageModule)
  },
  {
    path: 'chiffredaffaire/:param1/:param2/:param3/:param4',
    loadChildren: () => import('./gestionauto/chiffredaffaire/chiffredaffaire.module').then( m => m.ChiffredaffairePageModule)
  },
  {
    path: 'rapport/:param1/:param2',
    loadChildren: () => import('./gestionauto/rapport/rapport.module').then( m => m.RapportPageModule)
  },
  {
    path: 'conducteur/:param1/:param2',
    loadChildren: () => import('./gestionauto/conducteur/conducteur.module').then( m => m.ConducteurPageModule)
  },
  {
    path: 'proprietaire/:param1/:param2',
    loadChildren: () => import('./gestionauto/proprietaire/proprietaire.module').then( m => m.ProprietairePageModule)
  },
  {
    path: 'selectconducteur',
    loadChildren: () => import('./gestionauto/selectconducteur/selectconducteur.module').then( m => m.SelectconducteurPageModule)
  },
  {
    path: 'selectproprietaire',
    loadChildren: () => import('./gestionauto/selectproprietaire/selectproprietaire.module').then( m => m.SelectproprietairePageModule)
  },
  {
    path: 'selectautomobile',
    loadChildren: () => import('./gestionauto/selectautomobile/selectautomobile.module').then( m => m.SelectautomobilePageModule)
  },
  {
    path: 'caissesultation',
    loadChildren: () => import('./caissesultation/caissesultation.module').then( m => m.CaissesultationPageModule)
  },
  {
    path: 'souscriptionprint/:param1/:param2',
    loadChildren: () => import('./promotionimmo/souscriptionprint/souscriptionprint.module').then( m => m.SouscriptionprintPageModule)
  },
  {
    path: 'quittancedetail/:param1/:param2/:param3',
    loadChildren: () => import('./gestionimmo/quittancedetail/quittancedetail.module').then( m => m.QuittancedetailPageModule)
  },
  {
    path: 'demandes/:param1/:param2',
    loadChildren: () => import('./gestionimmo/demandes/demandes.module').then( m => m.DemandesPageModule)
  },
  {
    path: 'demandesdetail/:param1/:param2/:param3',
    loadChildren: () => import('./gestionimmo/demandesdetail/demandesdetail.module').then( m => m.DemandesdetailPageModule)
  },
  {
    path: 'selectproperty',
    loadChildren: () => import('./gestionimmo/selectproperty/selectproperty.module').then( m => m.SelectpropertyPageModule)
  },
  {
    path: 'apartementdetail',
    loadChildren: () => import('./gestionimmo/apartementdetail/apartementdetail.module').then( m => m.ApartementdetailPageModule)
  },
  {
    path: 'apartmentprint/:param1/:param2',
    loadChildren: () => import('./gestionimmo/apartmentprint/apartmentprint.module').then( m => m.ApartmentprintPageModule)
  },
  {
    path: 'partnerprint/:param1/:param2',
    loadChildren: () => import('./gestionimmo/partnerprint/partnerprint.module').then( m => m.PartnerprintPageModule)
  },
  {
    path: 'editnotes/:param1/:param2/:param3',
    loadChildren: () => import('./learning/editnotes/editnotes.module').then( m => m.EditnotesPageModule)
  },
  {
    path: 'editnotesresume/:param1/:param2/:param3',
    loadChildren: () => import('./learning/editnotesresume/editnotesresume.module').then( m => m.EditnotesresumePageModule)
  },
  {
    path: 'quittanceimprime/:param1/:param2',
    loadChildren: () => import('./gestionimmo/quittanceimprime/quittanceimprime.module').then( m => m.QuittanceimprimePageModule)
  },
  {
    path: 'studentaccount/:param1/:param2/:param3',
    loadChildren: () => import('./learning/studentaccount/studentaccount.module').then( m => m.StudentaccountPageModule)
  },
  {
    path: 'editnotesall',
    loadChildren: () => import('./learning/editnotesall/editnotesall.module').then( m => m.EditnotesallPageModule)
  },
  {
    path: 'commission/:param1/:param2/:param3/:param4',
    loadChildren: () => import('./gestionimmo/commission/commission.module').then( m => m.CommissionPageModule)
  },
  {
    path: 'confirmation/:param1/:param2',
    loadChildren: () => import('./gestionimmo/confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: 'echeancier/:param1/:param2',
    loadChildren: () => import('./promotionimmo/echeancier/echeancier.module').then( m => m.EcheancierPageModule)
  },
  {
    path: 'fiche/:param1',
    loadChildren: () => import('./promotionimmo/fiche/fiche.module').then( m => m.FichePageModule)
  },
  {
    path: 'recu/:param1',
    loadChildren: () => import('./promotionimmo/recu/recu.module').then( m => m.RecuPageModule)
  },
  {
    path: 'echeancierprint/:param1',
    loadChildren: () => import('./promotionimmo/echeancierprint/echeancierprint.module').then( m => m.EcheancierprintPageModule)
  },
  {
    path: 'lotstatut/:param1/:param2',
    loadChildren: () => import('./promotionimmo/lotstatut/lotstatut.module').then( m => m.LotstatutPageModule)
  },
  {
    path: 'notificationsms/:param1/:param2',
    loadChildren: () => import('./gestionimmo/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'notificationmail/:param1/:param2',
    loadChildren: () => import('./gestionimmo/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'notificationwhatsapp/:param1/:param2',
    loadChildren: () => import('./gestionimmo/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'billext',
    loadChildren: () => import('./billext/billext.module').then( m => m.BillextPageModule)
  },
  {
    path: 'billreport/:param1/:param2/:param3/:param4/:param5/:param6/:param7/:param8',
    loadChildren: () => import('./billreport/billreport.module').then( m => m.BillreportPageModule)
  },
  {
    path: 'prospect',
    loadChildren: () => import('./gestionimmo/prospect/prospect.module').then( m => m.ProspectPageModule)
  },
  {
    path: 'societe/:param1/:param2',
    loadChildren: () => import('./promotionimmo/societe/societe.module').then( m => m.SocietePageModule)
  },
  {
    path: 'bon',
    loadChildren: () => import('./gestionbon/bon/bon.module').then( m => m.BonPageModule)
  },
  {
    path: 'bonstatut',
    loadChildren: () => import('./gestionbon/bonstatut/bonstatut.module').then( m => m.BonstatutPageModule)
  },
  {
    path: 'bondetail',
    loadChildren: () => import('./gestionbon/bondetail/bondetail.module').then( m => m.BondetailPageModule)
  },
  {
    path: 'bonprint',
    loadChildren: () => import('./gestionbon/bonprint/bonprint.module').then( m => m.BonprintPageModule)
  },
  {
    path: 'bonedition',
    loadChildren: () => import('./gestionbon/bonedition/bonedition.module').then( m => m.BoneditionPageModule)
  },
  {
    path: 'bondecaisse',
    loadChildren: () => import('./gestionbon/bondecaisse/bondecaisse.module').then( m => m.BondecaissePageModule)
  },
  {
    path: 'bonhistorique',
    loadChildren: () => import('./gestionbon/bonhistorique/bonhistorique.module').then( m => m.BonhistoriquePageModule)
  },
  {
    path: 'bonrecu',
    loadChildren: () => import('./gestionbon/bonrecu/bonrecu.module').then( m => m.BonrecuPageModule)
  },
  {
    path: 'bonvalidation',
    loadChildren: () => import('./gestionbon/bonvalidation/bonvalidation.module').then( m => m.BonvalidationPageModule)
  },
  {
    path: 'bondecaisseretour',
    loadChildren: () => import('./gestionbon/bondecaisseretour/bondecaisseretour.module').then( m => m.BondecaisseretourPageModule)
  },
  {
    path: 'decaissements',
    loadChildren: () => import('./gestionbon/decaissements/decaissements.module').then( m => m.DecaissementsPageModule)
  },
  {
    path: 'printquittance/:param1',
    loadChildren: () => import('./print/as/printquittance/printquittance.module').then( m => m.PrintquittancePageModule)
  },
  {
    path: 'printbail/:param1',
    loadChildren: () => import('./print/as/printbail/printbail.module').then( m => m.PrintbailPageModule)
  },
  {
    path: 'recu',
    loadChildren: () => import('./print/as/recu/recu.module').then( m => m.RecuPageModule)
  },
  {
    path: 'projectedition/:param1/:param2/:param3',
    loadChildren: () => import('./projectedition/projectedition.module').then( m => m.ProjecteditionPageModule)
  },
  {
    path: 'projectagent/:param1/:param2/:param3',
    loadChildren: () => import('./projectedition/projectedition.module').then( m => m.ProjecteditionPageModule)
  },
  {
    path: 'projectmateriel/:param1/:param2/:param3',
    loadChildren: () => import('./projectedition/projectedition.module').then( m => m.ProjecteditionPageModule)
  },
  {
    path: 'projecttache/:param1/:param2/:param3',
    loadChildren: () => import('./projectedition/projectedition.module').then( m => m.ProjecteditionPageModule)
  },
  {
    path: 'projectrapport/:param1/:param2/:param3',
    loadChildren: () => import('./projectedition/projectedition.module').then( m => m.ProjecteditionPageModule)
  },
  {
    path: 'projectfacture/:param1/:param2/:param3',
    loadChildren: () => import('./projectedition/projectedition.module').then( m => m.ProjecteditionPageModule)
  },
  {
    path: 'projectfichier/:param1/:param2/:param3',
    loadChildren: () => import('./projectedition/projectedition.module').then( m => m.ProjecteditionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
