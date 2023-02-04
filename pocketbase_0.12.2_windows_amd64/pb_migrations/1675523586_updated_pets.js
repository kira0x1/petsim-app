migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wcranoblcanw1bs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oc32e8xz",
    "name": "weight",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zoohs2ej",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wcranoblcanw1bs")

  // remove
  collection.schema.removeField("oc32e8xz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zoohs2ej",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
