import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { BadRequestException } from '@nestjs/common';

function imageFileFilter(req: Express.Request, file: Express.Multer.File, callback: Function) {
  if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
    callback(null, true);
  } else {
    callback(null, false);
    return callback(new BadRequestException('Only .png, .jpg and .jpeg format allowed!'));
  }
}

export const imageSaveOptions: MulterOptions = {
  limits: {
    fileSize: 1100000 // 1.1 Megabyte
  },
  fileFilter: imageFileFilter
};
