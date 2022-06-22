import { Sequelize, DataTypes, Model } from "Sequelize";


const sequelize = new Sequelize('mysql');

class Products extends Model {}

Products.init({
        id: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        slug: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
        },
        categorySlug: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.FLOAT(6, 2)
        },
        countInStock: {
            type: DataTypes.INTEGER
        },
        brand: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.INTEGER
        },
        numReview: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        }
    });
   