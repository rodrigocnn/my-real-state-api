import * as bcrypt from 'bcrypt';
import { Hasher } from './hasher';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BcryptHasher implements Hasher {
  async hash(value: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(value, salt);
  }

  async compare(value: string, hash: string): Promise<boolean> {
    return bcrypt.compare(value, hash);
  }
}
