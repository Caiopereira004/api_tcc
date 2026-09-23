import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaProdutoDto } from './create-categoria_produto.dto.js';

export class UpdateCategoriaProdutoDto extends PartialType(CreateCategoriaProdutoDto) {}
