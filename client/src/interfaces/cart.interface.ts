interface ICartItem {
	id: string;
	name: string;
	price: number;
	fullPrice: number;
	imageId: string;
	count: number;
}

interface ICartPrice {
	totalPrice: number;
	subTotalPrice: number;
	discount?: number;
}

interface ICart {
	price: ICartPrice;
	cartItems: ICartItem[];
	length: number;
}

export type { ICartItem, ICartPrice, ICart };
