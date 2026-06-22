import Song from '../models/Song.js';
import User from '../models/User.js';
import Favorite from '../models/Favorite.js';
import bcrypt from 'bcrypt';
import { Op } from 'sequelize';

export const regUser  = async (login, password) => {
    const exist = await User.findOne({where: {login}})
    if (exist) return null;

    const hash = await bcrypt.hash(password, 10);
    return User.create({ login, password: hash });
};

export const logUser  = async (login, password) => {
    const user = await User.findOne({where: {login}});
    if(!user) return null;

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return null;
    
    return user;
};

export const deleteUser = async (login, password) => {
    const user = await User.findOne({where: {login}});
    if (!user) return null;

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return null;

    await User.destroy({ where: { login } });

    return true;
};

export const changeWholeUser = async (login, newLogin, newPassword, oldPassword) => {
    const user = await User.findOne({ where: { login } });
    if (!user) return null;
    
    const valid = await bcrypt.compare(oldPassword, user.password);
    if (!valid) return null;
    
    const hash = newPassword ? await bcrypt.hash(newPassword, 10) : user.password;
    
    await User.update(
        { login: newLogin || login, password: hash },
        { where: { login } }
    );
    
    return User.findOne({ where: { login: newLogin || login } });
};

export const changeUserPassword = async (login, oldPassword, newPassword) => {
   const user = await User.findOne({ where: { login } });
    if (!user) return null;
    
    const valid = await bcrypt.compare(oldPassword, user.password);
    if (!valid) return null;
    
    const hash = await bcrypt.hash(newPassword, 10);
    await User.update({ password: hash }, { where: { login } });
    
    return true;
};