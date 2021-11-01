const checkWishlist = (parent) => {
    return parent.wishlist.length
}

const checkFavourite = (parent) => {
    return parent.favourite.length
}

module.exports = {
    checkWishlist,
    checkFavourite
}