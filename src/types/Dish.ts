export interface Dish {
    id: number;
    title: string;
    description: string;
    photo: string;
    size: number;
    serving: number;
    price: number;
    category: {
        id: number;
        label: string;
    }
}