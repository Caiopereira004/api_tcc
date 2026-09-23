import { PartialType } from '@nestjs/mapped-types';
import { CreateCarrinhoItemDto } from './create-carrinho_item.dto.js';

export class UpdateCarrinhoItemDto extends PartialType(CreateCarrinhoItemDto) {}
