import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoritosTutorialDto } from './create-favoritos_tutorial.dto.js';

export class UpdateFavoritosTutorialDto extends PartialType(CreateFavoritosTutorialDto) {}
