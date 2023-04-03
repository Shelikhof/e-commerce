import sequelize from '../dataBase.js';
import { DataTypes, UUIDV1, UUIDV4 } from 'sequelize';

const User = sequelize.define('user', {
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		allowNull: false,
		primaryKey: true,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		// unique: true,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	first_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	last_name: {
		type: DataTypes.STRING,
	},
	image: {
		type: DataTypes.STRING,
	},
	created_at: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: new Date(),
	},
});

const RefreshToken = sequelize.define('refresh_token', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	refresh_token: {
		type: DataTypes.STRING(512),
		allowNull: false,
	},
});

const Cart = sequelize.define('cart', {
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		allowNull: false,
		primaryKey: true,
	},
});

const CartDevice = sequelize.define('cart_device', {
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		allowNull: false,
		primaryKey: true,
	},
	amount: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 1,
	},
});

const Device = sequelize.define('device', {
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		allowNull: false,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	price: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0,
	},
	rating: {
		type: DataTypes.FLOAT(2),
		allowNull: false,
		defaultValue: 0,
	},
	image: {
		type: DataTypes.UUID,
		defaultValue: '5f280aba-29b6-444d-b02d-d6e5ed16e8ae',
	},
	amount: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
});

const Brand = sequelize.define('brand', {
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		allowNull: false,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING(1024),
	},
	// rating: {
	// 	type: DataTypes.FLOAT,
	// 	defaultValue: 0,
	// },
	image: {
		type: DataTypes.UUID,
		defaultValue: '5f280aba-29b6-444d-b02d-d6e5ed16e8ae',
	},
	created_at: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: new Date(),
	},
});

const Administrator = sequelize.define('administrator', {
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		allowNull: false,
		primaryKey: true,
	},
	created_at: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: new Date(),
	},
});

const AdminRole = sequelize.define('admin_role', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	admin_type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

const BrandAdmin = sequelize.define('brand_admin', {
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		allowNull: false,
		primaryKey: true,
	},
	created_at: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: new Date(),
	},
});

User.hasOne(RefreshToken, { onDelete: 'cascade', foreignKey: { allowNull: false } });
RefreshToken.belongsTo(User);

User.hasOne(Cart, { onDelete: 'cascade', foreignKey: { allowNull: false } });
Cart.belongsTo(User);

Cart.hasMany(CartDevice, { onDelete: 'cascade', foreignKey: { allowNull: false } });
CartDevice.belongsTo(Cart);

Device.hasMany(CartDevice, { onDelete: 'cascade', foreignKey: { allowNull: false } });
CartDevice.belongsTo(Device);

Brand.hasMany(Device, { onDelete: 'cascade', foreignKey: { allowNull: false } });
Device.belongsTo(Brand);

User.hasMany(Administrator, { onDelete: 'cascade', foreignKey: { allowNull: false } });
Administrator.belongsTo(User);

AdminRole.hasMany(Administrator, { onDelete: 'cascade', foreignKey: { allowNull: false } });
Administrator.belongsTo(AdminRole);

Administrator.hasMany(BrandAdmin, { onDelete: 'cascade', foreignKey: { allowNull: false } });
BrandAdmin.belongsTo(Administrator);

Brand.hasMany(BrandAdmin, { onDelete: 'cascade', foreignKey: { allowNull: false } });
BrandAdmin.belongsTo(Brand);

export { User, RefreshToken, Cart, CartDevice, Device, Brand };
