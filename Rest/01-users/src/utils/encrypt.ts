import bcryptjs from 'bcryptjs';

export const encrypt = ( password: string ) => {
    const salt: string = bcryptjs.genSaltSync(10);

    return bcryptjs.hashSync(password, salt);
}