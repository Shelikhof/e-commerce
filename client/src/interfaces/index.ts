interface IProduct {
	image: string;
	name: string;
	price: number;
	fullPrice?: number;
	rating: number;
	orders: number;
	description: string;
}

export type { IProduct };
