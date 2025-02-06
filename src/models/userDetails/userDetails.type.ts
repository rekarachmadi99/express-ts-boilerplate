export interface UserDetailsAttributes {
    id: number;
    userId: number;
    nama: string;
    alamat: string;
    telepon?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserDetailsCreationAttributes extends Omit<UserDetailsAttributes, 'id' | 'createdAt' | 'updatedAt'> {
}
