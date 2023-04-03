interface IFavoriteItem {
	id: string;
	name: string;
	imageId: string;
	price: number;
	fullPrice?: number;
}

interface IFavorite {
	favoriteList: IFavorite[];
}

export type { IFavoriteItem, IFavorite };
