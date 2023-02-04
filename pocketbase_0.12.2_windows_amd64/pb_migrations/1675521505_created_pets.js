migrate((db) => {
  const collection = new Collection({
    "id": "wcranoblcanw1bs",
    "created": "2023-02-04 14:38:25.053Z",
    "updated": "2023-02-04 14:38:25.053Z",
    "name": "pets",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wcranoblcanw1bs");

  return dao.deleteCollection(collection);
})
