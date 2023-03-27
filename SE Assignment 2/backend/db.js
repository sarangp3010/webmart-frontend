const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  image_url: { type: String, required: true },
});

const Inventory = mongoose.model('inventory', inventorySchema);

module.exports = {
    Inventory: Inventory
}
