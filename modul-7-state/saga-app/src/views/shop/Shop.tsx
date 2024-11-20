import React from "react";
import {Product} from "../../state/shop-cart";
import {ShopItem} from "./ShopItem";

const products: Product[] = new Array(20).fill(0).map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: Math.floor(Math.random() * 1000),
    url: Math.random() > 0.5
        ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
        : 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
}))

export const Shop = () => {
    return <>
        <h1>Shop</h1>
        <div>
            {
                products.map(product => {
                    return <ShopItem key={product.id} product={product} />
                })
            }
        </div>
    </>
}