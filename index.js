'use strict';

var ReactNativeStore = require('./asyncstore');
var RNDBModel = {};
RNDBModel.create_db = function(db){
    var me = this;
    me.db_name = db;

    /**
     * @description Finds all the objects based on the query
     * @param query_data
     * @param callback
     */
    me.get = function(query_data, callback){
        ReactNativeStore.table(me.db_name).then(function(collection){
            var results = collection.where(query_data).find();
            if(callback){
                callback(results)
            }
        });
    };

    /**
     * @description Finds by ID
     * @param id
     * @param callback
     */
    me.get_id = function(id, callback){
        ReactNativeStore.table(me.db_name).then(function(collection){
            var results = collection.get(id);
            if(callback){
                callback(results)
            }
        });
    };

    /**
     * @description Gets all the data of the table
     * @param callback
     */
    me.get_all = function( callback){
        ReactNativeStore.table(me.db_name).then(function(collection){
            var results = collection.databaseData[me.db_name];
            if(callback){
                callback(results)
            }
        });
    };

    /**
     * @description Adds data to the Table in the DB
     * @param data_to_add
     * @param callback
     */
    me.add = function(data_to_add, callback){
        ReactNativeStore.table(me.db_name).then(function(collection){
            // Add Data
            collection.add(data_to_add, function(added_data_id){
                if(callback){
                    callback(added_data_id)
                }
            });
        });
    };

    /**
     * @description Removes all the objects matching the query
     * @param query_data
     * @param callback
     */
    me.remove = function(query_data, callback){
        ReactNativeStore.table(me.db_name).then(function(collection){
            collection.where(query_data).remove(function(data_removed){
                if(callback){
                    callback(data_removed);
                }
            });
        });
    };

    /**
     * @description Removed object by ID
     * @param id
     * @param callback
     */
    me.remove_id = function(id, callback){
        ReactNativeStore.table(me.db_name).then(function(collection){
            collection.removeById(id, function(data_removed){
                if(callback){
                    callback(data_removed);
                }
            });
        });
    };

    /**
     * @description Erases the complete DB
     * @param callback
     */
    me.erase_db = function(callback){
        ReactNativeStore.table(me.db_name).then(function(collection){
            collection.remove(function(data_removed){
                if(callback){
                    callback(data_removed);
                }
            });
        });
    }
    /**
     * @description Updates the Table with the query
     * @param query_data
     * @param replace_data
     * @param callback
     */
    me.update = function(query_data, replace_data, callback){
        ReactNativeStore.table(me.db_name).then(function(collection){
            collection.where(query_data).update(replace_data, function(data){
                if(callback){
                    callback(data);
                }
            });
        });
    };

    /**
     * @description Updates the DB Object by ID
     * @param id
     * @param replace_data
     * @param callback
     */
    me.update_id = function(id, replace_data, callback){
        ReactNativeStore.table(me.db_name).then(function(collection){
            collection.update_id(id, replace_data, function(data){
                if(callback){
                    callback(data);
                }
            });
        });
    };

    /**
     * @description Removed object by ID
     * @param id
     * @param callback
     */
    me.remove_id = function(id, callback){
        ReactNativeStore.table(me.db_name).then(function(collection){
            collection.removeById(id, function(data_removed){
                if(callback){
                    callback(data_removed);
                }
            });
        });
    };

};

module.exports = RNDBModel;