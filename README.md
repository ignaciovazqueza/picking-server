# Picking-Server

RESTful Micro-ORM for CRUD and more, using Node.js, Express, and PostgreSQL.

Picking-Server provides a set of generic REST endpoints for CRUD (Create, Read, Update, Delete) and simple charts based on models rather than code.
 
For a matching model-driven UI, use [Picking-Client](https://github.com/ignaciovazqueza/picking-client).


## Installation

[Download](https://github.com/ignaciovazqueza/picking-server/archive/master.zip) or clone from GitHub.

```bash
# To get the latest stable version, use git from the command line.
git clone https://github.com/ignaciovazqueza/picking-server.git
```

## Setup

After installing Picking-Server, follow these steps:

1. Create a PostgreSQL database.

2. In the file [config.js](https://github.com/ignaciovazqueza/picking-server/blob/master/config.js) set the PostgreSQL connection string and the schema name to access your new database.

3. Maybe, also change other config options in the same file.

4. In the command line type the following:

```bash
# Install dependencies
npm install

# Create sample database w/ demo tables
node js/setup/database.js

# Run the node.js server
npm start

```

**Note**: The database creation and population scripts are logged in the files "evol-db-schema-{datetime}.sql" and  "evol-db-data-{datetime}.sql".

In a web browser, go to the url [http://localhost:2000/api/v1/evolutility/todo](http://localhost:2000/api/v1/evolutility/todo).


## Configuration

Configuration options are set in the file [config.js](https://github.com/ignaciovazqueza/picking-server/blob/master/config.js).


| Option       | Description                             |
|--------------|-----------------------------------------|
| apiPath   | Path for REST API (i.e.: "/api/v1/evolutility/").|
| apiPort   | Port for REST API (i.e.: 2000). |
| connectionString | DB connection string (i.e.: "postgres://evol:love@localhost:5432/evol"). |
| schema | DB schema name (i.e.: "evolutility").|
| pageSize | Number of rows per page in pagination (default = 50).|
| lovSize | Maximum number of values allowed for form dropdowns (default = 100). |
| csvSize | Maximum number of rows in CSV export (default = 1000).|
| csvHeader | CSV list of labels for CSV export| | uploadPath | path for pictures and documents uploads (i.e.: "../evolutility-ui-react/public/pix/").|
| consoleLog | Log SQL statements to console.|
| wComments | Allow for user comments. |
| wRating | Allow for user ratings. |
| wTimestamp | Timestamp columns u_date and c_date w/ date of record creation and last update. |



## Models

To be accessible by the REST API, each database table must be described in a model.
Models contain the name of the driving table and the list of fields/columns present in the API.


### Entity

| Property     | Description                             |
|--------------|-----------------------------------------|
| id           | Unique key to identify the entity (used as API parameter). |
| table        | Database table name.                    |
| fields       | Array of fields.                        |
| titleField    | Field id for the column value used as record title. |
| searchFields    | Array of field ids for fields used to perform searches.  |  


### Field

| Property     | Description                           |
|--------------|---------------------------------------|
| id           | Unique key for the field (can be the same as column but doesn't have to be). |
| column       | Database column name for the field    |
| lovtable     | Table to join to for field value (only for fields of "lov" type). |  
| lovcolumn    | Column name (in the lovtable) for field value (only for fields of "lov" type). |  
| type         | Field type is not a database column type but more a UI field type. Possible field types: <ul><li>boolean (yes/no)</li><li>date</li><li>datetime</li><li>decimal</li><li>document</li><li>email</li><li>image</li><li>integer</li><li>lov (list of values)</li><li>money</li><li>text</li><li>textmultiline</li><li>time</li><li>url</li></ul> |
| required     | Determines if the field is required for saving.      |
| readonly     | Prevents field modification.          |                      
| inMany       | Determines if the field is present (by default) in lists of records. | 

Notes: More field properties (unique, min, max, minLength, maxLength...) will be added later.

### Sample model

Below is the model for a To-Do app.

```javascript
module.exports = {
    id: 'item',
    entity: 'item',
    table: 'item',
    active: true,

    titleField: 'name',
    searchFields: ['sku', 'name', 'position'],

    label: 'Artículos',
    name: 'artículo',
    namePlural: 'artículos',

    fields: [
        {
            id: 'sku',
            label: 'SKU',
            column: 'sku',
            type: 'text',
            maxLength: 20,
            inMany: true,
            required: true
        },
        {
            id: 'name',
            label: 'Nombre',
            column: 'name',
            type: 'text',
            maxLength: 50,
            inMany: true,
            required: true
        },
        {
            id: 'position',
            label: 'Posición',
            column: 'position',
            type: 'text',
            maxLength: 20,
            inMany: true,
            required: true
        }
    ],
};
```

## API
Picking-Server provides a generic RESTful API for CRUD (Create, Read, Update, Delete) and more.
It is a partial server-side Javascript implementation of [PostgREST](http://postgrest.com) using [Node.js](https://nodejs.org/en/), [Express](http://expressjs.com/) and [PostgreSQL](http://www.postgresql.org/).

When running Picking-Server locally, the url for the "item" app is 
[http://localhost:2000/api/v1/evolutility/item](http://localhost:2000/api/v1/evolutility/item).

### Requesting Information

#### Get One
To get a specific record by ID, use "< ObjectName >/ID".

```
GET /<model.id>/<id>

GET /item/12
```

#### Get Many
Every model is exposed. You can query lists of items by using the model ID.

```
GET /<model.id>

GET /item
```

#### Filtering
You can filter result rows by adding conditions on fields, each condition is a query string parameter. 

```
GET /<model.id>/<field.id>=<operator>.<value>

GET /item?title=sw.a
GET /item?priority=in.1,2,3
```
Adding multiple parameters conjoins the conditions:
```
item?sku=1&position=A1
```

These operators are available:

| Operator     | Meaning                 | Example                      |
|--------------|-------------------------|------------------------------|
| eq           | equals                  | /item?category=eq.1          |
| gt           | greater than            | /item?duedate=gt.2017-01-15  |
| lt           | less than               | /item?duedate=lt.2017-01-15  |
| gte          | less than or equal      | /item?duedate=gte.2017-01-15 |
| lte          | less than or equal      | /item?duedate=lte.2017-01-15 |
| ct           | contains                | /item?title=ct.e             |
| sw           | start with              | /item?title=sw.a             |
| fw           | finishes with           | /item?title=fw.z             |
| in           | one of a list of values | /item?priority=in.1,2,3      |
| 0            | is false or null        | /item?complete=0             |
| 1            | is true                 | /item?complete=1             |
| null         | is null                 | /item?category=null          |
| nn           | is not null             | /item?category==nn           |


#### Ordering

The reserved word "order" reorders the response rows. It uses a comma-separated list of fields and directions:

```
GET /<model.id>?order=<field.id>.<asc/desc>

GET /item?order=priority.desc,title.asc
```
If no direction is specified it defaults to ascending order:
```
GET /item?order=duedate
```

#### Limiting and Pagination


The reserved words "page" and "pageSize" limits the response rows.

```
GET /<model.id>?page=<pageindex>&pageSize=<pagesize>

GET /item?page=0&pageSize=50
```

#### Formatting

By default all APIs return data in JSON format. This API call allows to request data in CSV format (export to Excel).
This feature is using [express-csv](https://github.com/nulltask/express-csv).

```
GET /<model.id>?format=csv

GET /item?format=csv
```
Notes: In the returned data every object has an extra property "\_full_count" which indicate the total number of records in the query (before limit).

### Updating Data

#### Record Creation

To create a row in a database table post a JSON object whose keys are the names of the columns you would like to create. Missing keys will be set to default values when applicable.

```
POST <model.id> {<data>}

POST /item
{ title: 'Finish testing', priority: 2}
```

Even though it is a "POST", the request returns the new record. It is not standard but it saves the UI a subsequent call.

#### Update

PATCH or PUT can be used to update specific records.

```
PATCH /<model.id>/<id>

PATCH /item/5
{ title: 'Finish testing', priority: 2}
```

```
PUT /<model.id>/<id>

PUT /item/5
{ title: 'Finish testing', priority: 2}
```
Notes: The request returns the updated record. It is not standard but it saves the UI a subsequent call.


#### Deletion
Simply use the DELETE verb with the id of the record to remove. 

```
DELETE /<model.id>/<id>

DELETE /item/5
```

### Extras endpoints

In addition to CRUD, Picking-Server provides a few endpoints for Charts, Lists of values, and more.

#### Discovery

Returns the list of Objects and their APIs (only objects flagged active are included).
This end-point must be enabled in the configuration with {apiInfo: true}.

```
GET /
```


#### Charts

For charts data, it is possible to get aggregated data for field of types lov, boolean, integer, decimal, and money.

```
GET /<model.id>/chart/<field id>

GET /item/chart/category
```

#### Stats

Returns the total count, and the min, max, average, and total for numeric fields in the model.

```
GET /<model.id>/stats

GET /item/stats
```

#### Lists of Values

Dropdown fields in the UI (field.type="lov" in the model) have a REST endpoint to get the list of values (used for dropdowns in the UI).

```
GET /<model.id>/lov/<field.id>

GET /item/lov/category
```

#### File upload

This endpoint lets you upload a file. The current (naive) implementation simply saves the file on the file server in a folder named like the model id (inside the folder specified by the option "uploadPath" in config.js).

```
POST /<model.id>/upload/<id>

POST /item/upload/5
```
With query parameters: file and "field.id".


#### API Version

This endpoint gets the API version (as specified in the project's package.json file).

```
GET /version
```


## License

Copyright (c) 2018 [Olivier Giulieri](https://evoluteur.github.io/).
