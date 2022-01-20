module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
          gateway_id: String,
          vendor: String,
          isonline: Boolean 
        },
        { timestamps: true }
      );
    
      //we must to convert _id to id field into object result  
      schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
    
      const Device = mongoose.model("device", schema);
      return Device;
  };