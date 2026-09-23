export class CreateCartaoDto {
    id: number;
    usuario_id: number;
    ultimos_digitos: string;
    nome_titular: string;
    validade: string;
    gateway_token: string;
    bandeira: string;
}
