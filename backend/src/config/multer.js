import multer from 'multer';

import crypto from 'crypto';

import { extname, resolve } from 'path';

export default {
  Storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {},
  }),
};
