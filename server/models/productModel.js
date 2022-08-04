// mongodb建立数据表

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 食物属于早餐、晚餐、午餐
const CategorySchema = new Schema(
    {
        name: { type: String, required: true }
    }
)

//食物的详细信息
const ProductSchema = new Schema(
    {
        name: { type: String, required: true },
        adjective: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: String, required: true },
        category: { type: String, required: true },
    }
)

module.exports = mongoose.model('Product', ProductSchema);