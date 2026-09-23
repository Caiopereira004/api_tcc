import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaTutorialDto } from './create-categoria_tutorial.dto.js';

export class UpdateCategoriaTutorialDto extends PartialType(CreateCategoriaTutorialDto) {}
