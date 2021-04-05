import * as AWS from 'aws-sdk';
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { extname } from "path";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class AwsS3Service {
  s3: any;

  constructor(private configService: ConfigService) {
    this.s3 = new AWS.S3();
  }
  public async uploadFile(file: Express.Multer.File): Promise<string> {
    const urlKey =  `${uuidv4()}${extname(file.originalname)}`;
    const params = {
      Body: file.buffer,
      Bucket: this.configService.get('BUCKET_NAME'),
      Key: urlKey
    }

    return await this.s3
      .putObject(params)
      .promise()
      .then(
        () => urlKey,
        (error: any) => {
          throw new InternalServerErrorException(error.message);
        }
      )
  }

  public async deleteFile(fileName: string): Promise<string> {
    const params = {
      Bucket: this.configService.get('BUCKET_NAME'),
      Key: fileName
    }

    return await this.s3
      .deleteObject(params)
      .promise()
      .then(
        () => fileName,
        (error: any) => {
          throw new InternalServerErrorException(error.message);
        }
      )
  }
}

