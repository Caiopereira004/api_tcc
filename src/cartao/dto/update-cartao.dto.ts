import { PartialType } from '@nestjs/mapped-types';
import { CreateCartaoDto } from './create-cartao.dto.js';

export class UpdateCartaoDto extends PartialType(CreateCartaoDto) {}
