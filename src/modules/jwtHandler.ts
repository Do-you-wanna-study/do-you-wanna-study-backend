import jwt from 'jsonwebtoken';
import config from '../config';
import { JwtPayloadInfo } from './JwtPayloadInfo';

const getToken = (userId: number): string => {
  const payload: JwtPayloadInfo = {
    user: {
      id: userId,
    },
  };

  const accessToken: string = jwt.sign(payload, config.jwtSecret, { expiresIn: '100d' });

  return accessToken;
};

export default getToken;
