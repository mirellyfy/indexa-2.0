export interface Contato {
    id?: number
    nome: string
    avatar: string | ArrayBuffer
    telefone: string
    email: string
    aniversario?: string
    redes?: string
    observacoes?: string
}
