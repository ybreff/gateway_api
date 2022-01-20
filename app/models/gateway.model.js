module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
          name: String,
          address: String
        },
        { timestamps: true }
      );
    
      //we must to convert _id to id field into object result  
      schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
    
      const Gateway = mongoose.model("gateway", schema);
      return Gateway;
  };