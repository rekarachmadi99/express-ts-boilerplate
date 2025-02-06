import { Model, DataTypes } from 'sequelize';
import sequelize from '@/config/sequelize';
import { UserDetailsAttributes, UserDetailsCreationAttributes } from './userDetails.type';
import User from '../user/user.model';


class UserDetails extends Model<UserDetailsAttributes, UserDetailsCreationAttributes> implements UserDetailsAttributes {
    public id!: number;
    public userId!: number;
    public nama!: string;
    public alamat!: string;
    public telepon?: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

UserDetails.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        alamat: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telepon: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'UserDetails',
        tableName: 'user_details',
        timestamps: true,
    }
);

User.hasOne(UserDetails, { foreignKey: 'userId' });
UserDetails.belongsTo(User, { foreignKey: 'userId' });

export default UserDetails;
