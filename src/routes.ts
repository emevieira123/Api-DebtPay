import { Router } from "express";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";
import { CreateDebtController } from "./modules/debts/useCases/create/CreateDebtController";
import { GetAllDebtsAndParcelasController } from "./modules/debts/useCases/getAllDebtsAndParcelas/GetAllDebtsAndParcelasController";
import { GetDebtAndParcelasController } from "./modules/debts/useCases/getDebtAndParcelas/GetDebtAndParcelasController";
import { AuthenticateUserController } from "./modules/login/auth/AuthenticateUserController";
import { CreateParcelasController } from "./modules/parcelas/useCases/create/CreateParcelasController";
import { PutStatusParcelaController } from "./modules/parcelas/useCases/update/PutStatusParcelaController";
import { CreateUsersController } from "./modules/users/useCases/create/CreateUsersCrontroller";
import { GetAllDebtsController } from "./modules/users/useCases/getAllDebts/GetAllDebtsController";
import { GetUserController } from "./modules/users/useCases/getUser/GetUserController";

const routes = Router();

// LOGIN
const authenticateUserController = new AuthenticateUserController();
routes.post('/login', authenticateUserController.handle);

//USERS
const createUsersController = new CreateUsersController();
routes.post('/users', createUsersController.handle);

const getUserController = new GetUserController();
routes.get('/users/:id', ensureAuthenticateUser, getUserController.handle);

const getAllDebtsController = new GetAllDebtsController();
routes.get('/users/debts', ensureAuthenticateUser, getAllDebtsController.handle);

//DEBT
const createDebtController = new CreateDebtController();
routes.post('/debt', ensureAuthenticateUser, createDebtController.handle);

const getAllDebtsAndParcelasController = new GetAllDebtsAndParcelasController();
routes.get('/debt', ensureAuthenticateUser, getAllDebtsAndParcelasController.handle);

const getDebtAndParcelasController = new GetDebtAndParcelasController();
routes.get('/debt/:id', ensureAuthenticateUser, getDebtAndParcelasController.handle);

//PARCELAS
const createParcelasController = new CreateParcelasController();
routes.post('/parcelas', ensureAuthenticateUser, createParcelasController.handle);

const putStatusParcelaController = new PutStatusParcelaController();
routes.put('/parcelas/update/:id', ensureAuthenticateUser, putStatusParcelaController.handle);



export { routes };