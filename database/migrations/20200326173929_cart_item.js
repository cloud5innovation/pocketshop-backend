
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cart_item', cart_item => {
        cart_item.increments();
        cart_item
          .string('cart_id')
          .unsigned()
          .notNullable()
          .references('firebase_id')
          .inTable('cart');
          cart_item
          .integer('product_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('product');
          cart_item.integer('quantity').defaultTo(1);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cart_item')
  };
