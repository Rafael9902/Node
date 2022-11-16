import Role  from '../models/role';

export const validateRole = () => async(role = '') => {
    const existRole = await Role.findOne({role});
    if(!existRole) throw new Error(`The role ${role} doesn't exists`);
}