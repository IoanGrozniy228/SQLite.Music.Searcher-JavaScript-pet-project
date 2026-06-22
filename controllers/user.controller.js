import * as userService from '../services/user.service.js';

export const reg = async (req, res) => {
    try {
        const { login, password } = req.body;
        const user = await userService.regUser(login, password);
        if(!user) return res.status(400).json({ message:'This login already exist in system' });
        return res.status(200).json({ message: 'Registered', id_user: user.id_user });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

export const log = async (req, res) => {
    try {
        const { login, password } = req.body;
        const user = await userService.logUser(login, password);
        if(!user) return res.status(400).json({ message:'Invalid login or password' });
        return res.status(200).json({ message: 'Logged in succesfully', id_user: user.id_user});
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

export const del = async (req, res) => {
    try {
        const { login, password } = req.body;
        const user = await userService.deleteUser(login, password);
        if(!user) return res.status(400).json({ message:'Invalid login or password' });
        return res.status(200).json({ message: 'User deleted succesfully'});
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

export const put = async (req, res) => {
    try {
        const { login, newLogin, newPassword, oldPassword } = req.body;
        
        if (!oldPassword) {
            return res.status(400).json({ message: 'Old password required' });
        }
        
        const user = await userService.changeWholeUser(login, newLogin, newPassword, oldPassword);
        if (!user) return res.status(400).json({ message: 'Invalid login or password' });
        
        return res.status(200).json({ message: 'Updated', id_user: user.id_user });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

export const patch = async (req, res) => {
    try {
        const { login, oldPassword, newPassword } = req.body;
        
        if (!oldPassword || !newPassword) {
            return res.status(400).json({ message: 'Old and new password required' });
        }
        
        const result = await userService.changeUserPassword(login, oldPassword, newPassword);
        if (!result) return res.status(400).json({ message: 'Invalid login or password' });
        
        return res.status(200).json({ message: 'Password updated' });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};