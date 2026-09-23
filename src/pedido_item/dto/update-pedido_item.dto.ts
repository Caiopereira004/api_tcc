import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoItemDto } from './create-pedido_item.dto.js';

export class UpdatePedidoItemDto extends PartialType(CreatePedidoItemDto) {}
